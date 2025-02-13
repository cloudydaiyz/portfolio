'use client';

import { projects, ProjectCardData, ProjectLinkToImageMap, LinkType } from '@/lib/project-data';
import Heading from '@/components/Heading';

import Image from 'next/image';
import Link from 'next/link';
import { useReducer } from 'react';

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
  const techUsed = data.techUsed.map(skill => (
    <li key={skill} className='gap-1 rounded-lg bg-white bg-opacity-10 px-3 text-base'>
      {skill}
    </li>
  ));

  if (selectedLink) {
    console.log('link selected: ', data.title, selectedLink);
  }

  let selectedLinkLabel = 'No link selected';
  const selectedLinkLabelClasses = ['text-lg', 'font-bold', 'opacity-0'];
  const selectedLinkTooltipClasses = ['opacity-0'];
  if (selectedLink) {
    selectedLinkLabel = selectedLinkLabels[selectedLink];
    selectedLinkLabelClasses.pop();
    selectedLinkTooltipClasses.pop();
  }

  const sllc = selectedLinkLabelClasses.join(' ');
  const sltc = selectedLinkTooltipClasses.join(' ');

  const links = Object.keys(data.links).map(link => {
    const projLink = link as keyof typeof data.links;
    if (!data.links[projLink]) return null;

    let btnClass = 'absolute left-0 top-0 z-10 size-full ';
    if (projLink == selectedLink) {
      btnClass += 'hidden';
    }

    return (
      <div key={link} className='relative flex size-[64px] items-center justify-center'>
        <div className='size-[40px]'>
          <Link
            href={data.links[projLink]}
            target='_blank'
            className='relative z-0'
            onClick={() => onLinkNavigate(projLink)}
          >
            <Image src={ProjectLinkToImageMap[projLink]} alt={data.title} className='size-full fill-white' />
          </Link>
        </div>
        <button className={btnClass} onClick={() => onLinkClick(projLink)}>
          &nbsp;
        </button>
      </div>
    );
  });

  return (
    <article className='mb-10 flex gap-20 rounded-[64px] bg-[#101217] px-32 py-20 even:flex-row-reverse'>
      <div>
        <div className='mb-4 w-[500px]'>
          <Image src={data.img} alt={data.title} className='rounded-2xl' />
        </div>
        <ul className='flex justify-center gap-4'>{techUsed}</ul>
      </div>
      <div className='flex w-[500px] max-w-[500px] flex-col items-center justify-center gap-2 text-center'>
        <h3 className='relative z-10 font-[family-name:--font-oswald] text-[30px] font-bold leading-none tracking-tight'>
          {data.title}
        </h3>
        <p>{data.description}</p>
        <label className={sllc}>{selectedLinkLabel}</label>
        <p className={sltc}>Click again to visit the page.</p>
        <div className='flex gap-4'>{links}</div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [state, dispatch] = useReducer(updateSelectedLink, undefined);
  console.log(state);

  const onLinkClick = (index: number, link: LinkType) => {
    console.log('click');
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
    <section id='projects' className='flex flex-col items-center px-32'>
      <Heading className='mb-10'>PROJECTS</Heading>
      <div className='flex flex-col items-center'>{cards}</div>
    </section>
  );
}
