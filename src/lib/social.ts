export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
  enabled: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61591909924608',
    ariaLabel: 'Visit Web It Up 24 on Facebook',
    enabled: true,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/webitup24/',
    ariaLabel: 'Visit Web It Up 24 on Instagram',
    enabled: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/webitupofficial/Web-It-Up24',
    ariaLabel: 'View Web It Up 24 on GitHub',
    enabled: true,
  },
];
