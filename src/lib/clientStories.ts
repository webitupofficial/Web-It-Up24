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
  avatarInitials?: string;
  metrics?: string;
}

export const clientStories: ClientStory[] = [
  {
    id: 'client-story-basmi',
    projectName: 'BASMI India Pvt. Ltd.',
    clientName: 'Col Umeshwar Singh (Retd)',
    clientRole: 'Founder & CEO, BASMI India Pvt. Ltd.',
    industry: 'Defence & Aerospace',
    websiteUrl: 'https://www.basmi-india.com/',
    image: null,
    services: ['Strategic Web Architecture', 'Brand Positioning', 'Defence Sector UI/UX'],
    description: 'A modern, high-credibility digital portal engineered for an Indian strategic consulting enterprise in defence and aerospace, communicating domain capabilities to global partners and statutory institutions.',
    testimonial: 'Webitup24 transformed our vision into a powerful digital presence for BASMI India Pvt. Ltd. Their technical team gave us adequate time at the outset to understand our actual mandate including our Mission & Vision, our positioning in the defence and aerospace sector, and our global ambitions. The team demonstrated exceptional professionalism, creativity, responsiveness, and attention to detail throughout the project. The result is a modern, credible, and impactful website that represents BASMI’s capabilities and strengthens our brand with customers and partners worldwide. I would confidently & strongly recommend Webitup24 to any organisation looking for a reliable technology partner that combines business understanding with strong design and execution.',
    avatarInitials: 'US',
    metrics: 'Defence & Aerospace Advisory',
  },
  {
    id: 'client-story-lexminds',
    projectName: 'Lex Minds',
    clientName: 'Aditya Sharma',
    clientRole: 'Founder, Lex Minds',
    industry: 'Legal Education & Media',
    websiteUrl: 'https://www.lexminds.in/',
    image: null,
    services: ['Editorial Architecture', 'Next.js Web Engineering', 'UI/UX Design'],
    description: 'An independent, student-led legal education and research publication platform empowering law students with structured research, case analyses, and practical learning cohorts across India.',
    testimonial: 'Webitup24 brought exceptional technical precision and design maturity to Lex Minds. They understood our requirement for a clean, credible, and fast academic publishing ecosystem. The platform seamlessly handles student publications, internship cohorts, and editorial content with lightning speed and striking aesthetics. Their dedication, prompt turnaround, and proactive suggestions made all the difference. Webitup24 is our go-to partner for all things digital.',
    avatarInitials: 'AS',
    metrics: 'Active Student Publications',
  },
  {
    id: 'client-story-kaizen-quest',
    projectName: 'Kaizen Quest',
    clientName: 'Aarush Goswami',
    clientRole: 'Founder, Kaizen Quest',
    industry: 'Tech Innovation & Web Apps',
    websiteUrl: 'https://kaizen-quest.vercel.app/',
    image: null,
    services: ['Web App Development', 'Interactive Frontend', 'Performance Engineering'],
    description: 'A sleek, futuristic digital web application reflecting the philosophy of continuous improvement, built with immersive interactions, fluid transitions, and modern responsive engineering.',
    testimonial: 'Working with Webitup24 was an absolute breeze. They took our concept for Kaizen Quest and turned it into an immersive, visually captivating web experience that feels truly next-generation. From snappy performance to seamless responsiveness across all screen sizes, their execution exceeded our expectations. The team is innovative, agile, and fiercely committed to quality.',
    avatarInitials: 'AG',
    metrics: 'High-Performance Web App',
  },
  {
    id: 'client-story-persephone-tarot',
    projectName: 'Persephone - The Tarot Reader',
    clientName: 'Ishleen Kour',
    clientRole: 'Founder & Intuitive Tarot Reader',
    industry: 'Spiritual Wellness & Personal Brand',
    websiteUrl: 'https://persephone-tarot-reader.vercel.app/',
    image: null,
    services: ['Brand Identity', 'Audience Growth Platform', 'Inquiry & Booking Flow'],
    description: 'An enchanting, high-converting digital presence created for an intuitive tarot practitioner to expand audience reach, foster client trust, and streamline consultation bookings.',
    testimonial: 'Webitup24 designed the perfect digital home for Persephone. They captured the deep, mystical aesthetic I envisioned while keeping the user experience clean and intuitive. Since launching the website, my audience reach and client inquiries have grown noticeably. The team was warm, receptive to every nuance of my vision, and remarkably fast. I could not have asked for a better partner to establish my digital presence!',
    avatarInitials: 'IK',
    metrics: 'Audience & Booking Growth',
  },
];
