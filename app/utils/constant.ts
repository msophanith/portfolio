const projects = [
    {
        index: '01',
        title: 'Where Did I Park?',
        category: 'Web App · Next.js',
        year: '2026',
        description:
            'A user-friendly web application designed to help users locate their parked vehicles effortlessly. Built with Next.js, TypeScript, and Tailwind CSS for a seamless and responsive experience.',
        tags: ['Next.js', 'TypeScript', 'Tailwind'],
        link: 'https://wheredidipark-alpha.vercel.app/',
        featured: false,
    },
    {
        index: '02',
        title: 'Holiday Buddy',
        category: 'Web App · Next.js',
        year: '2026',
        description:
            'Real-time data visualization platform processing 2M+ events per day. Custom chart engine, WebSocket integration, and adaptive theming.',
        tags: ['Next.js', 'Tailwind', 'FullCalendar'],
        link: 'https://holidaybuddy.vercel.app/',
        featured: false,
    },
    {
        index: '03',
        title: 'Police Alert',
        category: 'Full-Stack · Next.js',
        year: '2026',
        description:
            'Headless CMS with a visual block editor, multi-tenant architecture, and a sub-100ms TTFB through edge caching.',
        tags: ['Next.js', 'Firebase', 'React Query', 'Tailwind'],
        link: 'https://alertmenow.vercel.app/map',
        featured: false,
    },
];

const skillGroups = [
  {
    category: 'Core',
    skills: ['TypeScript', 'React', 'React Native', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'State Management',
    skills: ['Redux', 'Zustand', 'React Query'],
  },
  {
    category: 'Styling',
    skills: [
      'Tailwind CSS',
      'Shadcn',
      'CSS Modules',
      'Framer Motion',
      'Ant Design',
      'Material UI',
      'Chakra UI',
    ],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    category: 'Platform',
    skills: ['Vercel', 'Netlify', 'Firebase'],
  },
  {
    category: 'Testing',
    skills: ['Cypress', 'Playwright'],
  },
  {
    category: 'Tooling',
    skills: ['Vite', 'git', 'yarn', 'npm', 'ESLint', 'Prettier'],
  },
];

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const stats = [
  { value: '4+', label: 'Years experience' },
  { value: '20+', label: 'Projects shipped' },
];

const Resume = {
  label: 'Resume',
  href: 'https://www.canva.com/design/DAFgpOc4Hxw/lVOPtuBWjtdYgVFAPz_itg/edit?utm_content=DAFgpOc4Hxw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
};
export { projects, skillGroups, links, stats, Resume };
