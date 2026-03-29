const projects = [
  {
    index: "01",
    title: "Where Did I Park?",
    category: "Web App · Next.js",
    year: "2026",
    description:
      "A user-friendly web application designed to help users locate their parked vehicles effortlessly. Built with Next.js, TypeScript, and Tailwind CSS for a seamless and responsive experience.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://wheredidipark-alpha.vercel.app/",
    featured: false,
  },
  {
    index: "02",
    title: "Holiday Buddy",
    category: "Web App · Next.js",
    year: "2026",
    description:
      "A holiday and leave planning companion that displays public holidays on an interactive calendar, sends holiday notices, and helps users plan their leave strategically.",
    tags: ["Next.js", "Tailwind", "FullCalendar"],
    link: "https://holidaybuddy.vercel.app/",
    featured: false,
  },
  {
    index: "03",
    title: "Car Stock Controller",
    category: "Full-Stack · Next.js · Supabase",
    year: "2026",
    description:
      "A comprehensive stock control system for managing car inventory. Built with Next.js and Supabase, it provides real-time updates and efficient inventory tracking.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    link: "https://meanleapstock.vercel.app/",
    featured: false,
  },
  {
    index: "04",
    title: "Bakong Transaction Verifier",
    category: "Web App · Next.js",
    year: "2026",
    description:
      "A web application that verifies Bakong transactions. Built with Next.js and Tailwind CSS for a seamless and responsive experience.",
    tags: ["Next.js", "Tailwind"],
    link: "https://verifybakongtrx.vercel.app/",
    featured: true,
  },
  {
    index: "05",
    title: "Police Alert",
    category: "Full-Stack · Next.js",
    year: "2026",
    description:
      "An interactive map application that alerts users to nearby police presence in real time, helping drivers and commuters stay informed on the road.",
    tags: ["Next.js", "Firebase", "React Query", "Tailwind"],
    link: "https://alertmenow.vercel.app/map",
    featured: false,
  },
  {
    index: "06",
    title: "Air Quality Monitor",
    category: "Web App · Next.js",
    year: "2026",
    description:
      "An interactive map application that monitors air quality in real time, helping people stay informed about the air quality in their area.",
    tags: ["Next.js", "Tailwind", "Leaflet"],
    link: "https://alertmenow.vercel.app/air-quality",
    featured: false,
  },
  {
    index: "07",
    title: "Water Seller",
    category: "Web App · Next.js",
    year: "2026",
    description:
      "An ecommerce web application that sells water in Cambodia. You can order water and get it delivered to your doorstep.",
    tags: ["Next.js", "Tailwind"],
    link: "https://alertmenow.vercel.app/water",
    featured: false,
  },
  {
    index: "08",
    title: "Product Scanner",
    category: "Full-Stack · Next.js · Firebase",
    year: "2026",
    description:
      "An Scanner web application that scans products and provides information about the product. You can also add products price to the database.",
    tags: ["Next.js", "Tailwind", "Firebase"],
    link: "https://alertmenow.vercel.app/scanner",
    featured: true,
  },
];

const skillGroups = [
  {
    category: "Core",
    skills: ["TypeScript", "React", "React Native", "Next.js", "HTML5", "CSS3"],
  },
  {
    category: "State Management",
    skills: ["Redux", "Zustand", "React Query"],
  },
  {
    category: "Styling",
    skills: [
      "Tailwind CSS",
      "Shadcn",
      "CSS Modules",
      "Framer Motion",
      "Ant Design",
      "Material UI",
      "Chakra UI",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
  },
  {
    category: "Platform",
    skills: ["Vercel", "Netlify", "Firebase"],
  },
  {
    category: "Testing",
    skills: ["Cypress", "Playwright"],
  },
  {
    category: "Tooling",
    skills: ["Vite", "git", "yarn", "npm", "ESLint", "Prettier"],
  },
];

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Rewards", href: "#rewards" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "20+", label: "Projects shipped" },
];

const Resume = {
  label: "Resume",
  href: "https://www.canva.com/design/DAFgpOc4Hxw/lVOPtuBWjtdYgVFAPz_itg/edit?utm_content=DAFgpOc4Hxw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
};

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Rangsit University",
    location: "Bangkok, Thailand",
    period: "2018 — 2021",
    description:
      "Focused on web development fundamentals, data structures, algorithms, and web technologies. Graduated with distinction.",
    highlights: ["Web Development", "Data Structures", "Algorithms"],
  },
  {
    degree: "Thai Language",
    institution: "Rajamangala University of Technology, Isan",
    location: "Surin, Thailand",
    period: "2018",
    description:
      "Focused on Thai language fundamentals, grammar, and conversation skills. Graduated with distinction.",
    highlights: ["Thai Language", "Grammar", "Conversation"],
  },
  {
    degree: "Foundation of Engineering",
    institution: "Institute of Technology of Cambodia",
    location: "Phnom Penh, Cambodia",
    period: "2017 - 2018",
    description:
      "Focused on Engineering fundamental, physics, chemistry, and mathematics.",
    highlights: ["Foundation of Engineering"],
  },
];

const certifications = [
  {
    title: "Node with React: Fullstack Web Development",
    issuer: "Stephen Grider",
    year: "11/20/2022",
    href: "https://www.udemy.com/certificate/UC-d484c9dc-4595-4a31-8ea4-64f5d1754116/",
  },
  {
    title: "Ethereum and Solidity: The Complete Developer's Guide",
    issuer: "Stephen Grider",
    year: "11/09/2022",
    href: "https://www.udemy.com/certificate/UC-507c5a9e-7e74-4be9-b11e-a131107f6357/",
  },
  {
    title: "Next.js & React - The Complete Guide",
    issuer: "Maximilian Schwarzmüller",
    year: "06/13/2022",
    href: "https://www.udemy.com/certificate/UC-b9d8f63b-e3df-4304-ba59-fde68e94b3b8/",
  },
  {
    title: "React & TypeScript Chrome Extension Development",
    issuer: "Jason Xian",
    year: "03/09/2023",
    href: "https://www.udemy.com/certificate/UC-e9f8942d-e6f1-47ac-b70b-61993378dcc7/",
  },
];

const rewards = [
  {
    title: "First Class Honours",
    issuer: "Rangsit University",
    year: "2021",
    description:
      "Received a First Class Honours for outstanding academic performance.",
    type: "Academic",
  },
  {
    title: "Her Royal Highness Princess Maha Chakri Sirindhorn Scholarship",
    issuer: "Ministry of Education, Youth and Sport & Rangsit University",
    year: "2018",
    description:
      "Received a scholarship to study at Rangsit University for outstanding academic performance.",
    type: "Scholarship",
  },
  {
    title: "Institute of Technology of Cambodia",
    issuer:
      "Ministry of Education, Youth and Sport & Institute of Technology of Cambodia",
    year: "2017",
    description:
      "Received a scholarship to study at Institute of Technology of Cambodia for outstanding academic performance.",
    type: "Scholarship",
  },
  {
    title: "Royal University of Phnom Penh",
    issuer:
      "Ministry of Education, Youth and Sport & Royal University of Phnom Penh",
    year: "2017",
    description:
      "Received a scholarship to study at Royal University of Phnom Penh for outstanding academic performance.",
    type: "Scholarship",
  },
  {
    title: "Cambodia Academy of Digital Technology",
    issuer: "Cambodia Academy of Digital Technology",
    year: "2017",
    description:
      "Received a scholarship to study at Cambodia Academy of Digital Technology for outstanding academic performance.",
    type: "Scholarship",
  },
];

export {
  projects,
  skillGroups,
  links,
  stats,
  Resume,
  educationData,
  certifications,
  rewards,
};
