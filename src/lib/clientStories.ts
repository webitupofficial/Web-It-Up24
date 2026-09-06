export interface ClientStory {
  id: string;
  projectName: string;
  clientName: string;
  clientRole: string;
  industry: string;
  websiteUrl: string;
  image: string | null;
  services: string[];
  description: string;
  testimonial: string;
}

export const clientStories: ClientStory[] = [
  {
    id: 'client-story-01',
    projectName: 'Fintech Capital Portal',
    clientName: 'Client name',
    clientRole: 'Founder / Executive',
    industry: 'Financial Technology',
    websiteUrl: '',
    image: null,
    services: ['Website Design', 'Code Development'],
    description: 'Modern marketing platform and investor portal engineered for high-trust institutional communication and clear fund navigation.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
  {
    id: 'client-story-02',
    projectName: 'Cloud Infrastructure Platform',
    clientName: 'Client name',
    clientRole: 'VP of Product',
    industry: 'Developer Tools & SaaS',
    websiteUrl: '',
    image: null,
    services: ['Brand Identity', 'Code Development'],
    description: 'Developer-first product marketing website with interactive feature tours, clean documentation architecture, and rapid load times.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
  {
    id: 'client-story-03',
    projectName: 'Digital Health Practice',
    clientName: 'Client name',
    clientRole: 'Managing Director',
    industry: 'Healthcare & Clinical Services',
    websiteUrl: '',
    image: null,
    services: ['Website Design', 'SEO Foundations'],
    description: 'Patient-first web experience with streamlined appointment inquiries, clear service directories, and high-contrast accessible typography.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
  {
    id: 'client-story-04',
    projectName: 'Modern Logistics Network',
    clientName: 'Client name',
    clientRole: 'Head of Growth',
    industry: 'Global Logistics & Supply Chain',
    websiteUrl: '',
    image: null,
    services: ['Performance Optimization', 'SEO Foundations'],
    description: 'International corporate site optimized for cross-border traffic, localized search indexing, and instant route query handling.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
  {
    id: 'client-story-05',
    projectName: 'AI Support Operations',
    clientName: 'Client name',
    clientRole: 'Operations Director',
    industry: 'Enterprise Automation',
    websiteUrl: '',
    image: null,
    services: ['AI and WhatsApp Automation'],
    description: 'Automated WhatsApp customer intake and triage system routing high-intent inquiries directly to regional account managers.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
  {
    id: 'client-story-06',
    projectName: 'Direct Commerce Platform',
    clientName: 'Client name',
    clientRole: 'Founder & CEO',
    industry: 'E-Commerce & Consumer Tech',
    websiteUrl: '',
    image: null,
    services: ['Website Design', 'Brand Identity'],
    description: 'Fast, conversion-focused digital storefront built with minimal aesthetics, mobile-first navigation, and real-time inventory preview.',
    testimonial: 'Client testimonial will be added here upon final case study approval.',
  },
];
