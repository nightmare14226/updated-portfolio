import { TCategory } from './../types/index.d';
import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  nationwide,
  django,
  spring,
  aws,
  go,
  postgre,
  globe,
  springboot,
  nest,
  golang
} from "../assets";

export const navLinks: TNavLink[] = [
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
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "3D Website Developer",
    icon: backend,
  },
  {
    title: "Gen AI Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
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
    name: "PostgreSQL",
    icon: postgre
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "spring",
    icon: spring
  },
  {
    name: "django",
    icon: django
  },
  {
    name: "aws",
    icon: aws
  },
  {
    name: "go",
    icon: go
  }
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Nationwide",
    icon: nationwide,
    iconBg: "#E6DEDD",
    date: "July 2018 - April 2020",
    points: [
      {
        title: "Started as a Frontend Developer, building performant and user-friendly web applications with React, Next.js, and TailwindCSS.",
        content: []
      },
      {
        title: "Challenges & Achievements",
        content: [
          {
            challenge: "Delivering responsive dashboards that handled large datasets.",
            solution: "Applied virtualized rendering and dynamic import in Next.js, reducing bundle size by 35%."
          },
          {
            challenge: "Ensuring accessibility and SEO compliance in a SPA environment.",
            solution: "Leveraged SSR with Next.js, implemented semantic ARIA roles, raising Lighthouse Accessibility score to 95+."
          },
          {
            impact: "Enhanced user retention and reduced bounce rate by 15%."
          }
        ]
      }
    ],
  },
  {
    title: "Backend Developer",
    companyName: "Nationwide",
    icon: nationwide,
    iconBg: "#E6DEDD",
    date: "April 2020 - Jan 2022",
    points: [
      {
        title: "Promoted to Backend Developer to strengthen system reliability and data flow. Expanded skillset with Node.js, Express, PostgreSQL, and Redis.",
        content: []
      },
      {
        title: "Challenges & Achievements",
        content: [
          {
            challenge: "Traffic spikes during nationwide campaigns (50k+ concurrent users).",
            solution: "Introduced Redis caching and horizontal scaling with Kubernetes, reducing API latency from 800ms → 120ms."
          },
          {
            challenge: "Database performance bottlenecks.",
            solution: "Optimized queries with indexing, introduced CQRS pattern, cutting write times by 60%."
          },
          {
            impact: "Supported scale-up to 2M+ requests/day while maintaining 99.95% uptime SLA."
          }
        ]
      }
    ]
  },
  {
    title: "Senior Backend Developer",
    companyName: "Nationwide",
    icon: nationwide,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2025",
    points: [
      {
        title: "Advanced to Senior Backend Developer, leading architecture design, mentoring engineers, and ensuring nationwide system resilience.",
        content: []
      },
      {
        title: "Challenges & Achievements",
        content: [
          {
            challenge: "Migrating monolithic core system to microservices without user downtime.",
            solution: "Designed migration roadmap, implemented gRPC inter-service communication, established CI/CD pipelines with GitHub Actions + Kubernetes."
          },
          {
            challenge: "Strengthening security and compliance.",
            solution: "Enforced JWT authentication, RBAC, and compliance with GDPR & SOC2."
          },
          {
            challenge: "Team scaling and knowledge transfer.",
            solution: "Set up internal documentation standards (ADRs) and mentorship programs for junior engineers."
          },
          {
            impact: [
              "Cut deployment cycle from weekly → daily.",
              "Reduced infrastructure cost by 30%.",
              "Enabled platform to grow to 10M+ monthly active users nationwide."
            ]
          }
        ]
      },
    ],
  }
];

const testimonials: TTestimonial[] = [
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

const projects: TCategory[] = [
  {
    title: "3D Websites",
    projects: [
      {
        name: "E-Commerce",
        description:
          "Web-based platform that allows users to search, book, and manage food rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "mongodb",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: carrent,
        sourceCodeLink: "https://e-commerce-free.vercel.app/",
      },
      {
        name: "r3f-third-person",
        description:
          "Helper library built for React Three Fiber (R3F) that makes it easier to create third-person camera controls for 3D applications and games.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "three.js",
            color: "green-text-gradient",
          },
          {
            name: "gsap",
            color: "pink-text-gradient",
          },
        ],
        image: tripguide,
        sourceCodeLink: "https://codesandbox.io/p/github/nightmare14226/r3f-third-person/",
      },
      {
        name: "3D Globe",
        description:
          "This is the project of the motion and view of the globe. You can have a look at the globe upon sky throughout 8 conditions.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "three.js",
            color: "green-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: globe,
        sourceCodeLink: "https://threeglobe.netlify.app/",
      },
      {
        name: "Fizzy Drink",
        description:
          "Web application that enables users to experience the scrollable effect and it is the landing page of Fizzy Drink",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "three.js",
            color: "green-text-gradient",
          },
          {
            name: "gsap",
            color: "pink-text-gradient",
          },
        ],
        image: jobit,
        sourceCodeLink: "https://e-commerce-fizzy.vercel.app/",
      },
    ]
  },
  {
    title: "Backend Projects",
    projects: [
      {
        name: "E-commerce with Spring",
        description:
          "Ecommerce platform Spring boot 3, Angular 18, Tailwind CSS, PostgreSQL, Kinde",
        tags: [
          {
            name: "Spring",
            color: "blue-text-gradient",
          },
          {
            name: "Java",
            color: "green-text-gradient",
          },
          {
            name: "React,",
            color: "pink-text-gradient",
          },
        ],
        image: springboot,
        sourceCodeLink: "https://github.com/nightmare14226/springboot-book",
      },
      {
        name: "Spring Boot microservices",
        description:
          "Spring Boot microservices app with Spring Cloud, Robust and resilient backend managing e-Commerce app",
        tags: [
          {
            name: "Spring",
            color: "blue-text-gradient",
          },
          {
            name: "Java",
            color: "green-text-gradient",
          },
          {
            name: "Spring Cloud",
            color: "pink-text-gradient",
          },
        ],
        image: springboot,
        sourceCodeLink: "https://github.com/nightmare14226/springboot-book",
      },
      {
        name: "E-commerce with Nest",
        description:
          "The idea of this project was to build fully functional Ecommerce platform.",
        tags: [
          {
            name: "Nest",
            color: "blue-text-gradient",
          },
          {
            name: "TypeScript",
            color: "green-text-gradient",
          },
          {
            name: "MongoDB",
            color: "pink-text-gradient",
          },
        ],
        image: nest,
        sourceCodeLink: "https://github.com/nightmare14226/Nest-Ecommerce-boilerplate",
      },
      {
        name: "E-commerce with Go",
        description:
          "E-Commerce Microservices with Golang",
        tags: [
          {
            name: "Golang",
            color: "blue-text-gradient",
          },
          {
            name: "PostgreSQL",
            color: "green-text-gradient",
          },
        ],
        image: golang,
        sourceCodeLink: "https://github.com/nightmare14226/e-commerce-golang",
      },
    ]
  }
];

export { services, technologies, experiences, testimonials, projects };
