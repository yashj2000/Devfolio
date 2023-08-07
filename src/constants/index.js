import { q } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
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
  scienceutsav,
  decurtis,
  quantiphi,
  freelance,
  shopify,
  carrent,
  newsapp,
  keeper,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies = [
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Intern",
    company_name: "ScienceUtsav",
    icon: scienceutsav,
    iconBg: "#E6DEDD",
    date: "January 2021 - May 2021",
    points: [
      "Worked as a Python instructor to teach Python.",
      "Enhanced the ScienceUtsav website as a web developer, technical content writer and SEO.",
      "Managed CRM and interacted with leads, clients, and potential customers.",
      "Participated in code reviews, documentation of code, and provided knowledge transfer and hands-on-training to new interns.",
    ],
  },
  {
    title: "Site Reliability Engineer Intern",
    company_name: "Decurtis International Pvt Ltd",
    icon: decurtis,
    iconBg: "#E6DEDD",
    date: "July 2022 - August 2022",
    points: [
      "Trained and worked as a Site Reliability Engineer.",
      "Developed a website for Embarkation Monitoring and Data Analytics for passengers onboarding on a cruise using React.js, FastAPI, PostgreSQL, and Python to track cruise passengers and their activity.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "mplemented real-time data visualization using ’ant-design’ to display live updates of passenger activity and statistics on the Embarkation Monitoring and Data Analytics website.",
      ],
  },
  {
    title: "Web Developer & Content Writer",
    company_name: "Freelance Work",
    icon: freelance,
    iconBg: "#383E56",
    date: "April 2023 - July 2023",
    points: [
      "Collaborated with various clients to understand their specific business needs and requirements for their websites.",
      "Implemented front-end frameworks like Bootstrap & Tailwind CSS for visually appealing interfaces.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Delivered user-friendly and visually appealing web solutions.",
    ],
  },
  {
    title: "Framework Engineer Intern",
    company_name: "Quantiphi Analytics Solution",
    icon: quantiphi,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Completed training: Web development, Linux shell, Java, Python, database designing and modeling, Hadoop, GSuite applications",
      "Gained practical experience in creating responsive and interactive web applications using modern web technologies and frameworks.",
      "Acquired fundamental knowledge of Java, Python and Linux shell commands and operations, enhancing proficiency in working with the command-line interface.",
      "Learned the principles and best practices of database designing and modeling, with hands-on experience in creating and managing databases.",
      "Explored the concepts of Hadoop and its ecosystem, understanding the fundamentals of big data processing and analysis.",
      "Actively participated in daily meetings, utilizing the opportunity to ask questions, seek clarification, and report progress on assigned tasks. Demonstrated effective communication and teamwork skills in a collaborative and supportive learning environment.",
    ],
  },
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
    name: "Expense Managament System",
    description:
      "• Developed a user-friendly interface with Ant-Design to visualize expenses into different categories and Tracked income and expenses to help users manage their finances. • Used MongoDB Atlas for implementing login and registration pages for user authentication and storing data, and implemented CRUD operations for expenses.",
      
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/yashj2000/Expense-Manager",
  },
  {
    name: "News App",
    description:
      "• Created a React-based News App for real-time access to the latest news articles. • Integrated the News API to fetch and display up-to-date articles based on selected categories. • Designed a responsive and user-friendly interface using HTML, CSS, and Bootstrap. • Enabled users to read full articles by clicking on the provided links.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restAPI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: newsapp,
    source_code_link: "https://github.com/yashj2000/News-App",
  },
  {
    name: "Google Keep Clone",
    description:
      "• Developed a Google Keep notes clone using React.js, CSS, and HTML, replicating the popular note-taking application's core features and design. • Utilized React components to create a dynamic and interactive user interface, enabling users to add, edit, and delete notes seamlessly. • Implemented a responsive layout, ensuring optimal user experience across various devices and screen sizes.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: keeper,
    source_code_link: "https://github.com/yashj2000/Google-Keep",
  },
];

export { services, technologies, experiences, testimonials, projects };
