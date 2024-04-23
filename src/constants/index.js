import {
  mobile,
  backend,
  web,
  iste,
  instam,
  globalspk,
  getpan,
  avatar
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
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonial",
    title: "Testimonial",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: '/tech/html.png',
  },
  {
    name: "CSS 3",
    icon: '/tech/css.png',
  },
  {
    name: "JavaScript",
    icon: '/tech/javascript.png',
  },
  {
    name: "TypeScript",
    icon: '/tech/typescript.png',
  },
  {
    name: "C++",
    icon: '/tech/c.png',
  },
  {
    name: "Python",
    icon: '/tech/python.png',
  },
  {
    name: "Node JS",
    icon: '/tech/nodejs.png',
  },
  {
    name: "Next JS",
    icon: '/tech/next.png',
  },
  {
    name: "React JS",
    icon: '/tech/reactjs.png',
  },
  {
    name: "React Native",
    icon: '/tech/reactnative.png',
  },
  {
    name: "Firebase",
    icon: '/tech/firebase.png',
  },
  {
    name: "MongoDB",
    icon: '/tech/mongodb.png',
  },
  {
    name: "Azure",
    icon: '/tech/azure.png',
  },
  {
    name: "AWS",
    icon: '/tech/aws.png',
  },
  {
    name: "Prisma",
    icon: '/tech/prisma1.png',
  },
  {
    name: "Git",
    icon: '/tech/git.png',
  },
  {
    name: "Tailwind CSS",
    icon: '/tech/tailwind.png',
  },
  {
    name: "Figma",
    icon: '/tech/figma.png',
  },
  // {
  //   name: "Material UI",
  //   icon: '/tech/mui.png',
  // },
  
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "ISTE SC MANIT",
    icon: iste,
    iconBg: "#383E56",
    date: "June 2022 - Oct 2022",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, content writers, and other developers to create high-quality website.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Conducting Workshops related DSA, Machine Learning.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our services, but Ravikant proved me wrong.",
    name: "Kaptan Singh",
    designation: "Co-Owner",
    company: "VRDTechnosoft",
    image: avatar,
  },
  {
    testimonial:
    "After Ravikant optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rishabh Kumar",
    designation: "CMO",
    company: "RK World",
    image: avatar,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ravikant does.",
    name: "Kapil Chandel",
    designation: "Owner",
    company: "GetPan",
    image: avatar,
  },
];

const projects = [
  {
    name: "Insta Memo",
    description:
      "InstaMemo is a powerful yet intuitive note-taking web application designed to help you organize your thoughts, tasks, and ideas effortlessly. Built with cutting-edge technologies like Next.js, Supabase, Tailwind CSS, Shadcn UI, and Prisma, InstaMemo offers a seamless and efficient note-taking experience.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: instam,
    website_link: "https://insta-memo.vercel.app",
    source_code_link: "https://github.com/rk1703/InstaMemo",
  },
  {
    name: "GlobalSpeak",
    description:
      "GlobalSpeak is a versatile and efficient text translation web application, designed to break down language barriers and connect people from around the world. Powered by cutting-edge technologies such as Next.js, Azure Cosmos DB, Tailwind CSS, Shadcn UI, and OpenAI.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Azure Cosmos DB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: globalspk,
    website_link: "https://globalspeak.vercel.app/",
    source_code_link: "https://github.com/rk1703/GlobalSpeak",
  },
  {
    name: "GetPan",
    description:
      "GetPan is your one-stop solution for hassle-free PAN card services, designed to make the process of obtaining a PAN card quick and efficient. Built with Next.js, Firebase, Tailwind CSS, and Material UI, GetPan offers a user-friendly platform to apply for, track, and manage your PAN card application with ease.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: getpan,
    website_link: "https://www.getpan.tech",
    source_code_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
