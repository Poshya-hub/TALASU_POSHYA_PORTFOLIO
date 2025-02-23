import {
  rpa,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kroll,
  webdev,
  uipath,
  powerautomate,
  python,
  mui,
  framermotion,
  bootstrap,
  vercel,
  antdesign,
  sql,
  brainwave,
  dashboard,
  productivitylog,
  portfolio,
  aavishkaar,
  c,
  cpp,
  java,
  firebase
} from "../assets";


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "RPA Developer",
    icon: rpa,
  },
  {
    title: "Front End Developer",
    icon: webdev,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "CPP",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Power Automate",
    icon: powerautomate,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "Framer Motion",
    icon: framermotion,
  },
  {
    name: "Ant Design",
    icon: antdesign,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
];

const experiences = [
  {
    title: "RPA Developer",
    company_name: "Kroll",
    icon: kroll,
    iconBg: "#383E56",
    date: "December 2023 - Present",
    points: [
      "Developed and maintained automation workflows using UiPath, Power Automate, and Python, reducing operational costs by 30% and streamlining business processes.",
      "Implemented a Python algorithm for data scraping from various PDF formats, enhancing data accuracy and meeting complex business requirements.",
      "Collaborated with stakeholders to automate tasks, ensuring security and compliance, and continuously improving solutions based on feedback."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Tech Mahindra",
    icon: webdev,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Developed a code-reuse system resulting in a 40% reduction in repetitive coding tasks.",
      "Optimized server response time for search requests by 15% through the implementation of a Flask.",
      "Achieved a 25% increase in code reuse across diverse projects by enabling cross-language support, resulting in substantial time and effort savings."
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Internshala",
    icon: webdev,
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Designed and developed the frontend of an e-commerce website, enhancing user experience and boosting conversions.",
      "Utilized HTML, CSS, and JavaScript to create a visually appealing and responsive website layout."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "𝗕𝗿𝗮𝗶𝗻𝘄𝗮𝘃𝗲",
    description:
    "Fully responsive web app showcases my front-end development skills, delivering a seamless and engaging user experience. With a responsive design optimized for all devices, dynamic components for easy updates, custom SVGs for unique visuals, and a modern UI/UX, Brainwave enhances user interaction.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: brainwave,
    live_site_link: "https://brainwave-eight-sepia.vercel.app/",
    source_code_link: "https://github.com/Poshya-hub/Brainwave",
  },
  {
    name: "Dashboard",
    description:
    "A seamless user experience with dynamic stats cards for key metrics (orders, revenue, inventory), real-time data tables via API integration, a color picker for customization, notification panels for updates, and footer links for easy access to important pages. All features are designed to enhance usability and performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "antd",
        color: "green-text-gradient",
      }
    ],
    image: dashboard,
    live_site_link: "https://dashboard-eta-flame.vercel.app/",
    source_code_link: "https://github.com/Poshya-hub/Dashboard",
  },
  {
    name: "Productivity Log",
    description:
    "A seamless and efficient way to manage tasks. It supports CRUD operations, allowing users to create, read, update, and delete tasks. The app includes dynamic task filtering options for viewing all tasks, active tasks, and completed tasks, making it easy to manage workload. Real-time status updates keep users informed about task progress.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: productivitylog,
    live_site_link: "https://productivity-log-one.vercel.app/",
    source_code_link: "https://github.com/Poshya-hub/ProductivityLog",
  },
  {
    name: "Portfolio",
    description:
    "Showcases my projects, skills, and professional journey, highlighting my technical abilities and creative approach. Each section is carefully crafted to tell a story, from detailed project descriptions to a timeline of my career milestones. On-scroll effects dynamically reveal elements, adding a smooth and visually appealing touch. This portfolio reflects my dedication to continuous learning and innovation in web development.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    live_site_link: "https://poshya-hub.github.io/stable-port/",
    source_code_link: "https://github.com/Poshya-hub/stable-port",
  },
  {
    name: "Aavishkaar",
    description:
    "For the CHAMPS OF COMPUTER SCIENCE project at UHackathon 4.0 Meta Edition, I developed a comprehensive website to facilitate student registration, provide detailed information on hackathon themes, display the event timeline, and offer contact details. The site also featured sections on chief guests and sponsors, enhancing user engagement and streamlining the hackathon experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: aavishkaar,
    live_site_link: "https://hackaton-jet.vercel.app/",
    source_code_link: "https://github.com/Poshya-hub/hackathon",
  },
];

export { services, technologies, experiences, testimonials, projects};
