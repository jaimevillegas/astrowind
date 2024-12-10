import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Projects',
      href: '/projects'
    },
    {
      text: 'Blog',
      href: '/blog',
    },
    {
      text: 'Github',
      href: 'https://github.com/jaimevillegas',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        { text: 'Blog', href: '/blog' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Latest Posts',
      links: [
        { text: 'How to Fetch API Data Using Axios in React - A Step-by-Step Guide (Part 1 - GET Requests)', href: '/how-to-get-api-data-using-axios-on-react' },
      ],
    },
  ],
  secondaryLinks: [
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/jaimevillegas/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/jaimevillegas' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:jaimevillegas296@gmail.com' },
  ],
  footNote: `
    Copyright ${new Date().getFullYear()} Jaime Villegas. All rights reserved.
  `,
};
