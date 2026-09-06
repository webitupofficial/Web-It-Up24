export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  whatItIncludes: string[];
  whoItIsFor: string;
  whatClientReceives: string[];
  nextStep: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'Website design',
    shortDesc: 'User-centered interface design structured for clarity, brand credibility, and visitor engagement.',
    whatItIncludes: [
      'UX research and user journey mapping',
      'Information architecture and wireframing',
      'High-fidelity responsive UI design (mobile, tablet, desktop)',
      'Design systems, typography scale, and color tokens',
      'Interactive prototypes for stakeholder feedback'
    ],
    whoItIsFor: 'Startups, SaaS companies, and growth businesses that need an authoritative digital storefront that outshines competitors.',
    whatClientReceives: [
      'Organized Figma files with comprehensive components',
      'Responsive screen specifications and prototypes',
      'Design token library for development handoff',
      'Exportable vector and media assets'
    ],
    nextStep: 'Initial discovery call to align on target audience, branding references, and page scope.'
  },
  {
    id: 'code-development',
    number: '02',
    title: 'Code development',
    shortDesc: 'Production-grade frontend and full-stack engineering using modern Next.js, React, and TypeScript.',
    whatItIncludes: [
      'Next.js (App Router), React, and TypeScript engineering',
      'Responsive, accessible, and cross-browser verified UI',
      'Headless CMS integration (e.g. Sanity) for self-serve content',
      'API integrations, form handling, and webhook configurations',
      'Clean modular code architecture and version control'
    ],
    whoItIsFor: 'Businesses that require fast, maintainable, and scalable web solutions without legacy code or fragile templates.',
    whatClientReceives: [
      'Full ownership of the clean Git repository',
      'Automated deployment setup on Vercel or your hosting platform',
      'Intuitive CMS editing dashboard with custom schema',
      'Technical handover documentation'
    ],
    nextStep: 'Technical review to confirm architecture, CMS requirements, and integration touchpoints.'
  },
  {
    id: 'seo-foundations',
    number: '03',
    title: 'SEO foundations',
    shortDesc: 'Technical SEO setup, semantic hierarchy, and metadata configurations so search engines index your offerings accurately.',
    whatItIncludes: [
      'Semantic HTML5 structure and clean heading hierarchy',
      'Dynamic OpenGraph and Twitter card metadata',
      'Automated XML sitemaps and robots.txt generation',
      'JSON-LD structured data (Organization, Article, WebSite)',
      'Canonical URL routing and 301 redirect architecture'
    ],
    whoItIsFor: 'Companies seeking compounding organic visibility and wanting to ensure their core landing pages are discovered cleanly.',
    whatClientReceives: [
      'Search engine indexing checklist and audit report',
      'Configured Google Search Console verification',
      'Clean meta tag templates for future blog posts and pages',
      'Technical site architecture guidance'
    ],
    nextStep: 'Baseline technical audit and keyword structure review across priority pages.'
  },
  {
    id: 'brand-identity',
    number: '04',
    title: 'Brand identity',
    shortDesc: 'Cohesive visual identity systems, typography guidelines, and brand assets that communicate credibility across channels.',
    whatItIncludes: [
      'Brand positioning and visual direction moodboarding',
      'Primary, secondary, and mark logo designs',
      'Curated typography hierarchy for digital and print',
      'Accessible color palette with semantic usage rules',
      'Brand guideline document and asset exports'
    ],
    whoItIsFor: 'Founders launching new products or established companies executing a strategic visual refresh.',
    whatClientReceives: [
      'Vector logo packages (SVG, PNG, PDF in dark and light modes)',
      'Digital brand guidelines deck (PDF/Figma)',
      'Favicons, social media banner templates, and app icons',
      'Typography pairing specifications'
    ],
    nextStep: 'Brand discovery survey and visual positioning exploration.'
  },
  {
    id: 'performance-optimization',
    number: '05',
    title: 'Performance optimization',
    shortDesc: 'Targeted Core Web Vitals audits, asset delivery tuning, and code minification to maximize speed and retention.',
    whatItIncludes: [
      'Core Web Vitals diagnostic (LCP, FID/INP, CLS)',
      'Next.js image pipeline optimization and modern format delivery (WebP/AVIF)',
      'Bundle size analysis and unused JavaScript deferral',
      'Font preloading and layout shift elimination',
      'Caching headers and CDN edge configuration'
    ],
    whoItIsFor: 'Existing websites experiencing high bounce rates, slow mobile performance, or sluggish customer experiences.',
    whatClientReceives: [
      'Before-and-after Core Web Vitals audit benchmark',
      'Optimized asset delivery pipeline',
      'Cleaned script execution and bundle minification',
      'Long-term maintenance best-practices checklist'
    ],
    nextStep: 'Comprehensive performance audit of your current site and priority page benchmarks.'
  },
  {
    id: 'ai-whatsapp-automation',
    number: '06',
    title: 'AI and WhatsApp automation',
    shortDesc: 'Practical customer routing, WhatsApp inquiry capture, and automated reply workflows that remove manual friction.',
    whatItIncludes: [
      'WhatsApp Business API webhook setup and message routing',
      'Automated lead qualification and enquiry intake flows',
      'Direct notifications to internal team channels (Slack, Email, CRM)',
      'FAQ and common customer question triage workflows',
      'Custom conversational agents for product recommendations'
    ],
    whoItIsFor: 'Businesses handling high inquiry volumes that want prompt, structured qualification without manual bottlenecks.',
    whatClientReceives: [
      'Configured and tested webhook automation workflows',
      'Message routing rules and conversational prompt trees',
      'Integration with your customer database or CRM',
      'Operator instructions and handover training'
    ],
    nextStep: 'Workflow mapping session to identify key customer inquiries and qualification criteria.'
  }
];
