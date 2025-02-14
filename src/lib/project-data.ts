import stringplay from '@public/stringplay-og.png';
import qapup from '@public/qapup-og.png';
import crc from '@public/crc-og.png';

export type LinkType = 'live' | 'github' | 'newsletter' | 'documentation';

export interface ProjectCardData {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  description: string;
  techUsed: string[];
  links: Record<LinkType, string | undefined>;
}

export const Stringplay = {
  title: 'stringplay',
  img: stringplay,
  description:
    'A data collection service that aggregates attendee information from your online spreadsheets and surveys, allowing you to efficiently track unique respondents.',
  techUsed: ['MongoDB', 'Node.js', 'React.js', 'AWS'],
  links: {
    live: 'https://stringplay.cloudydaiyz.com',
    github: 'https://github.com/cloudydaiyz/stringplay',
    newsletter: undefined,
    documentation: 'https://docs.stringplay.cloudydaiyz.com',
  },
} satisfies ProjectCardData;

export const QAPup = {
  title: 'QA Pup',
  img: qapup,
  description:
    'A serverless QA testing application that scans HackerNews/newest to test web vitals, accessibility, and whether articles are correctly sorted.',
  techUsed: ['MongoDB', 'Node.js', 'React.js', 'Docker', 'AWS'],
  links: {
    live: 'https://qa-pup.pages.dev',
    github: 'https://github.com/cloudydaiyz/qa-pup',
    newsletter: undefined,
    documentation: undefined,
  },
} satisfies ProjectCardData;

export const CrcPortfolio = {
  title: 'Cloud Resume Challenge',
  img: crc,
  description:
    'My old portfolio, which was a submission to the cloud resume challenge. It uses AWS Lambda + DynamoDB to display the number of website visitors.',
  techUsed: ['HTML', 'CSS', 'JavaScript', 'DynamoDB', 'AWS'],
  links: {
    live: 'https://crc.cloudydaiyz.com',
    github: 'https://github.com/cloudydaiyz/crc-portfolio',
    newsletter:
      'https://cloudydaiyz.hashnode.dev/my-journey-to-building-an-aws-cloud-portfolio-insights-and-challenges',
    documentation: undefined,
  },
} satisfies ProjectCardData;

export const projects = [Stringplay, QAPup, CrcPortfolio] as const satisfies ProjectCardData[];
