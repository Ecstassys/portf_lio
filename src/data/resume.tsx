import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohan Vudavagandla",
  initials: "DV",
  url: "https://rohtech.in",
  location: "Hyderabad, IND",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Backend Engineer. I love building things. ",
  summary:
    "Results-driven Computer Science student with hands-on experience in Backend development and a strong foundation in software engineering principles, [Currently pursuing a B.Tech at JNTU Hyderabad (MLRIT)](/#education), [Guided over 240 students in project development, fostering innovation and collaboration through technical mentorship and hands-on learning experiences.](/#WorkExperience), and [competed in over 2 hackathons for fun](/#hackathons) and won both. ",
  avatarUrl: "/goust.jpeg",
  skills: [
    "Java",
    "Node.js",
    "Typescript",
    "React",
    "Express",
    "Postgres",
    "Mongodb",
    "MYSQL",
    "Docker",
    "Kubernetes",
    "AWS"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohanvud@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ecstassys",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohan-vudavagandla-b97588249/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Centre of Innovation and entrepreneurship",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Technical Member",
      logoUrl: "/",
      start: "September 2023",
      end: "August 2024",
      description:
        "As a Developer in the university's official entrepreneurship club, I was responsible for creating and maintaining the club's website and infrastructure for student-community activities and festivals. Additionally, I developed a proximity server to efficiently manage college users during events, enhancing user engagement and overall experience.",
    },
    {
      company: "Centre of Innovation and entrepreneurship",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Technical Mentor",
      logoUrl: "/",
      start: "September 2023",
      end: "July 2024",
      description:
        "Mentored over 240 students in developing micro-projects and potential products, fostering a culture of innovation and encouraging active participation in research. Conducted technical classes for over 120 students on back-end development, enhancing their skills and understanding of modern technologies.",
    },
  ],
  education: [
    {
      school: "JNTU (MLRIT)",
      href: "https://mlrit.ac.in/",
      degree: "BTech-Computer Science",
      logoUrl: "/JNTU_Hyderabad_logo.png",
      start: "2022",
      end: "Present",
    },
    {
      school: "Jain Heritage ",
      href: "https://www.jgischools.in/kondapur.php",
      degree: "MPC ",
      logoUrl: "/JGI.jpeg",
      start: "2020",
      end: "2022",
    },
    
 ],
  projects: [
    {
      title: "Agro Wool",
      href: " ",
      dates: "Hackathon Project",
      active: true,
      description:
        "Built an application for wool farmers, allowing them to analyze wool status and track it using real-time images. Wrote and Deployed the application using node that enables wool farmers to connect and engage with other farms in the industry.",
      technologies: [
        "Flutter",
        "Javascript",
        "Mongodb",
        "AWS",
        "Firebase",
        "Node.js",
        "Express",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: " ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        " ", // Need a Video or Image for using this component
    },
    {
      title: "Root",
      href: " ",
      dates: "Mini-Project",
      active: true,
      description:
        "It is an innovative platform designed to foster collaboration among students by connecting them based on their academic interests.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: " ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Farm commodity",
      href: " ",
      dates: "Mini Poject",
      active: true,
      description:
        "Developed an web applicaiton where farmers can directly sell their stock to customers, without third-party consumers.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Prisma",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: " ",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: " ",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    // {
    //   title: "Automatic Chat",
    //   href: "https://automatic.chat",
    //   dates: "April 2023 - March 2024",
    //   active: true,
    //   description:
    //     "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //     "Magic UI",
    //     "Stripe",
    //     "Cloudflare Workers",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://automatic.chat",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    // },
  ],
  hackathons: [
    {
      title: "G-Hack",
      dates: "October 25rd - 26th, 2023",
      location: "Hyderabad, India",
      description:
        "Developed Mobile app for wool farmers to upload real-time wool processing data and process the wool delivery",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Epitome",
      dates: "March 2nd - 3rd, 2024",
      location: "Hyderabad, India",
      description:
        "Developed an application where farmers can sell thier stock directly to customers rather than involing third-party consumers",
      image:
        "/Epitome_logo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;
