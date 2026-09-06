export interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  deliverables: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    desc: 'We start by understanding your business model, target market, audience psychology, and commercial objectives to identify what your website must accomplish.',
    deliverables: 'Project brief, competitive benchmarks, and scope alignment.'
  },
  {
    number: '02',
    title: 'Define',
    desc: 'We establish the information architecture, conversion pathways, content requirements, and technical specifications before writing code or designing screens.',
    deliverables: 'Sitemap hierarchy, wireframe flows, and technical stack specification.'
  },
  {
    number: '03',
    title: 'Design',
    desc: 'We craft high-fidelity responsive interface layouts, typography systems, and interaction patterns in Figma, sharing interactive prototypes for clear review.',
    deliverables: 'Complete desktop and mobile Figma designs, component library, and asset kit.'
  },
  {
    number: '04',
    title: 'Develop',
    desc: 'We engineer your site with Next.js, React, and TypeScript. We build clean, semantic code, integrate your headless CMS, and connect required third-party APIs.',
    deliverables: 'Production code repository, headless CMS configuration, and API webhooks.'
  },
  {
    number: '05',
    title: 'Launch and improve',
    desc: 'We conduct cross-device QA, verify SEO markup and form submissions, manage production deployment, and provide post-launch optimization support.',
    deliverables: 'Live production release, search console verification, and technical handover.'
  }
];
