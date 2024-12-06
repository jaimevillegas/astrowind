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
        { text: 'React App Optimization', href: '/blog/react-app-optimization-better-content-loading' },
        { text: 'Using Vim in VSCode', href: '/blog/using-vim-in-vscode-improve-coding' },
        { text: 'TailwindCSS Animated Loader', href: '/blog/using-tailwindcss-to-create-animated-loader' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
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
