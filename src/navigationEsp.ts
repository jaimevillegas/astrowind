import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/es'),
    },
    {
      text: 'Proyectos',
      href: '/es/projects'
    },
            { text: 'Cursos', href: '/es/courses' },
    {
      text: 'Blog',
      href: '/es/blog',
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
        { text: 'Inicio', href: '/es' },
        { text: 'Proyectos', href: '/es/projects' },
        { text: 'Cursos', href: '/es/courses' },
        { text: 'Blog', href: '/es/blog' },
        { text: 'Contact', href: '/es/contact' },
      ],
    },
    {
      title: 'Últimas Publicaciones',
      links: [
        { text: 'esp - How to Fetch API Data Using Axios in React - A Step-by-Step Guide (Part 1 - GET Requests)', href: '/how-to-get-api-data-using-axios-on-react' },
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
