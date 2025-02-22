import { projects, ProjectCardData, LinkType } from '@/lib/project-data';
import Heading from '@/components/Heading';
import * as Svg from '@/components/svg';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useReducer, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useHeaderNavContext } from '@/hooks/header';
import { useEnterAnim } from '@/hooks/anim';

/*
 * Time in seconds selected link can be idle before resetting.
 * A link is idle whenever it has been selected, but not navigated to.
 */
const SL_MAX_IDLE_TIME = 10000;

type SelectedLinkState = [number, LinkType, Date] | undefined;
type SelectedLinkAction = { action: 'update'; args: [number, LinkType] } | { action: 'reset' };

/** Ensures only one timeout is active at a time for checking if the link is idle. */
let linkClickTimeout: ReturnType<typeof setTimeout>;

/**
 * A dispatch that can either:
 * - specify a specific card and link to be selected (more than one can't be a selected at a time)
 * - reset the state of the clicked links after a time interval if it hasn't been updated recently
 */
function updateSelectedLink(prev: SelectedLinkState, action: SelectedLinkAction) {
  if (action.action == 'update') {
    return [action.args[0], action.args[1], new Date()] as SelectedLinkState;
  } else {
    if (prev && Date.now() - prev[2].getTime() >= SL_MAX_IDLE_TIME) {
      return undefined;
    }
  }
}

interface ProjectCardProps {
  data: ProjectCardData;
  selectedLink?: keyof ProjectCardData['links'];
  onLinkClick: (link: LinkType) => void;
  onLinkNavigate: (link: LinkType) => void;
}

const selectedLinkLabels: Record<LinkType, string> = {
  live: 'Live App',
  github: 'Source Code',
  newsletter: 'Blog Post',
  documentation: 'Documentation',
};

function ProjectCard({ data, selectedLink, onLinkClick, onLinkNavigate }: ProjectCardProps) {
  const [showPreview, setShowPreview] = useState(false);
  const enter1 = useEnterAnim();

  const techUsed = data.techUsed.map(skill => (
    <li key={skill} className='gap-1 rounded-lg bg-white bg-opacity-10 px-3 text-base'>
      {skill}
    </li>
  ));

  if (selectedLink) {
    console.debug('link selected: ', data.title, selectedLink);
  }

  const links = Object.keys(data.links).map(link => {
    const projLink = link as keyof typeof data.links;
    if (!data.links[projLink]) return null;

    let divClass = 'proj-link relative flex size-[52px] items-center justify-center rounded-full bg-white ';
    let btnClass = 'absolute left-0 top-0 z-10 size-full ';
    if (projLink == selectedLink) {
      // divClass += 'scale-[1.15]';
      divClass += 'selected';
      btnClass += 'hidden';
    }

    const svg =
      projLink == 'newsletter' ? (
        // <Svg.Newspaper className='size-full fill-[#969696] hover:fill-black' />
        <Svg.Newspaper className='proj-link-svg size-full fill-black' />
      ) : projLink == 'documentation' ? (
        <Svg.Document className='proj-link-svg size-full fill-black' />
      ) : projLink == 'github' ? (
        <Svg.Github className='proj-link-svg size-full fill-black' />
      ) : (
        <Svg.Link className='proj-link-svg size-full fill-black' />
      );

    return (
      <div key={link} className={divClass}>
        <div className='size-[40px]'>
          <Link
            href={data.links[projLink]}
            target='_blank'
            className='relative z-0'
            onClick={() => onLinkNavigate(projLink)}
          >
            {svg}
          </Link>
        </div>
        <button className={btnClass} onClick={() => onLinkClick(projLink)}>
          &nbsp;
        </button>
      </div>
    );
  });

  let selectedLinkLabel = 'No link selected';
  const selectedLinkLabelClasses = ['text-lg', 'font-bold', 'font-[family-name:--font-oswald]', 'opacity-0'];
  const selectedLinkTooltipClasses = ['pointer-events-none', 'mb-2', 'opacity-0'];
  if (selectedLink) {
    selectedLinkLabel = selectedLinkLabels[selectedLink];
    selectedLinkLabelClasses.pop();
    selectedLinkTooltipClasses.pop();
  }

  const sllc = selectedLinkLabelClasses.join(' ');
  const sltc = selectedLinkTooltipClasses.join(' ');

  const ogClasses = 'rounded-2xl transition-all duration-1000 ' + (showPreview ? 'opacity-0' : 'opacity-1');
  const previewClasses =
    'absolute left-0 top-0 size-full rounded-2xl transition-all duration-1000 ' +
    (showPreview ? 'opacity-1' : 'opacity-0');

  return (
    <article
      ref={enter1.ref}
      className={`${enter1.animClasses} lifted mb-10 flex w-fit max-w-full flex-col items-center gap-8 rounded-[32px] bg-[#101217] px-8 py-8 md:flex-row md:rounded-[64px] md:even:flex-row-reverse xl:gap-20 xl:px-32 xl:py-20`}
    >
      <div>
        <button
          disabled={!data.previewImg}
          onClick={() => {
            if (data.previewImg) setShowPreview(!showPreview);
          }}
          className='relative mb-4 max-w-[500px] flex-grow'
        >
          <Image width={1200} height={630} src={data.ogImg} alt={data.title} className={ogClasses} />
          {data.previewImg && (
            <Image width={1200} height={630} src={data.previewImg} alt={data.title} className={previewClasses} />
          )}
        </button>
        <ul className='flex flex-wrap justify-center gap-4'>{techUsed}</ul>
      </div>
      <div className='flex w-[500px] max-w-full flex-col items-center justify-center gap-2 text-center'>
        <h3 className='relative z-10 font-[family-name:--font-oswald] text-[30px] font-bold leading-none tracking-tight'>
          {data.title}
        </h3>
        <p className='mb-4 md:mb-10'>{data.description}</p>
        <label className={sllc}>{selectedLinkLabel}</label>
        <p className={sltc}>Click again to visit the page.</p>
        <div className='flex gap-4'>{links}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [state, dispatch] = useReducer(updateSelectedLink, undefined);
  const headerNav = useHeaderNavContext();

  const { ref, inView } = useInView({ threshold: 0.3 });
  const enter1 = useEnterAnim();

  useEffect(() => {
    headerNav.setProjectsVisible(inView);
  }, [headerNav, inView]);

  const onLinkClick = (index: number, link: LinkType) => {
    dispatch({ action: 'update', args: [index, link] });
    if (linkClickTimeout) clearTimeout(linkClickTimeout);
    linkClickTimeout = setTimeout(() => dispatch({ action: 'reset' }), SL_MAX_IDLE_TIME);
  };

  const onLinkNavigate = (index: number, link: LinkType) => {
    if (state && index == state[0] && link == state[1]) {
      dispatch({ action: 'reset' });
    }
  };

  const cards = projects.map((data, i) => (
    <ProjectCard
      key={i}
      data={data}
      selectedLink={state && state[0] == i ? state[1] : undefined}
      onLinkClick={link => onLinkClick(i, link)}
      onLinkNavigate={link => onLinkNavigate(i, link)}
    />
  ));

  return (
    <section
      ref={ref}
      id='projects'
      className='flex w-fit min-w-full max-w-[100vw] flex-col items-center px-10 pt-10 sm:pt-20 2xl:px-32'
    >
      <Heading ref={enter1.ref} className={`${enter1.animClasses} mb-10`}>
        PROJECTS
      </Heading>
      <div className='flex w-full flex-col items-center'>{cards}</div>
    </section>
  );
}
