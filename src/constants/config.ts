type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    skills: string[];
    coreSkill: string;
  };
  hero: {
    name: string;
    p: string[];
    core: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Arata Hoshino",
    fullName: "Arata Hoshino",
    email: "aratahoshi383@gmail.com",
    coreSkill: "Backend",
    skills: ["Gen AI", "3D Web Apps"],
  },
  hero: {
    name: "Arata Hishino",
    p: ["I develop ", "Generative AI and 3D Web Applications"],
    core: "Backends"
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I have worked as a Full Stack Developer over 7 years of experience building scalable webapplications and RESTful APIs. 
      I am Skilled in Java, Golang, Node.js, TypeScript, and SQL/NoSQLdatabases. I am passionate about clean code, performance optimization, 
      and delivering exceptional user experiences.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Through this career path, my projects evolved from pixel-perfect frontend experiences, 
      to scalable backend solutions, and finally to enterprise-grade architectures that power a nationwide company. 
      Each role brought unique challenges, which I approached with a strong focus on performance, scalability, 
      security, and reliability.`,
    }
  },
};
