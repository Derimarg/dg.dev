// Routes for navigation
const routes = [
  { path: "/" },
  { path: "/education" },
  // {path: "experience"},
  { path: "/projects" },
  { path: "/contact" },
];

const navBarHeader = {
  logo_name: "<dg.dev>",
  pages: [
    {
      path: "/",
      class: "homei",
      label: "Home",
    },
    {
      path: "/education",
      class: "ec",
      label: "Education and Certifications",
    },
    //   {
    //     path: "/experience",
    //     class: "xp",
    //     label: "Experience"
    // },
    {
      path: "/projects",
      class: "projects",
      label: "Projects",
    },
    {
      path: "/contact",
      class: "cr",
      label: "Contact and Resume",
    },
  ],
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Derimar",
  full_name: "Derimar Gray",
  subTitle:
    " Mechanical Engineer and Full Stack Developer, Genexus Practitioner, Open Source Enthusiast, I love sharing Knowledge and learn, my goal is to help other developer!.",
};

const socialMedia = [
  {
    category: "Social Media",
    action: "Open Github Profile",
    link: "https://github.com/Derimarg",
    class: "icon-button github",
    icon: "fab fa-github",
  },
  {
    category: "Social Media",
    action: "Open LinkedIn Profile",
    link: "https://www.linkedin.com/in/derimar-gray-676275132/",
    class: "icon-button linkedin",
    icon: "fab fa-linkedin-in",
  },
  {
    category: "Social Media",
    action: "Open Gmail to send an email",
    link: "mailto:derimargray@gmail.com",
    class: "icon-button google",
    icon: "fab fa-google",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website frontend using React",
        "⚡ Creating application backend in MongoDB, Express, React and Node. (MERN Stack)",
        "⚡ Integration of third party services such as Heroku/ ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        // {
        //   skillName: "AWS",
        //   fontAwesomeClassname: "simple-icons:amazonaws",
        //   style: {
        //     color: "#FF9900",
        //   },
        // },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Universidad Veracruzana",
      subtitle: "BS Degree in Mechanical Engineering",
      logo_path: "uv.svg.png",
      alt_name: "BSME",
      duration: "2012 - 2017",
      descriptions: [
        "In general terms, application in the following areas: production, design of mechanical systems and equipment, supervision of projects and facilities, manufacturing, quality, applied research and technological development, as well as the improvement of their competitiveness through mechanical and mechatronic engineering design.",
      ],
      website_link: "https://www.uv.mx/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Developer",
      subtitle: "The University of Kansas",
      logo_path: "ku_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1bp2Qcpeunx19x2IuGSxZXrOQ3fR4LN8z/view",
      alt_name: "University of Kansas",
      color_code: "#2AAFED",
    },
    {
      title: "Build a Website with HTML, CSS, and GitHub Pages",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/5cadfefe5f1de806e9704577",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "Responsive Desing",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/3a62023b0054dc793edc0adecd715fd7",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "HTML",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "CSS",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "SQL",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/042a4e5884e3eb6ea1f2a12be6abb851",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "Java",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/d3f89367b558583e361640f778191345",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "Java for Programmers",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/90966026f83232720c6d04c056fb3360",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "Command Line",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/c87ba0541f8be78bc2f4ba1128233f6f",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "Code Foundations Skill Path",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/5b55e668646caa552f8e4d1d",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    {
      title: "How to Code",
      subtitle: "Codecademy",
      logo_path: "cc_logo.png",
      certificate_link:
        "https://www.codecademy.com/profiles/Derimarg/certificates/11a686a7fd57b8c214f7f92749388d42",
      alt_name: "Codecademy Course",
      color_code: "#204156",
    },
    // {
    //   title: "React",
    //   subtitle: "Codecademy",
    //   logo_path: "cc_logo.png",
    //   certificate_link:
    //     "https://www.codecademy.com/profiles/Derimarg/certificates/",
    //   alt_name: "Codecademy Course",
    //   color_code: "#204156",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Technocolabs",
          company_url: "https://technocolabs.com/",
          logo_path: "Technocolabs.jfif",
          duration: "Sept 2020 - Oct 2020",
          location: "Remote",
          description: `Analysed the changes before and after people started using sanitizers using the covid-19 dataset. Built and analysed several predictive models for defaulting user’s credit card and deployed it on a full-stack website using Flask. Made a predictive model for Blood Donation for Future Expectancy and deployed it on a fully-fledged website. Increased productivity and problem-solving technics by 20%. 
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "The Sparks Foundation",
          company_url: "hhttps://thesparksfoundation.info/",
          logo_path: "TSF.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Remote",
          description: `Developed predictive models and deployed it on a full-stack website using Flask. Used Boxplot, Heatmap and Confusion Matrix for data visualization. Deep analysis on the superstore dataset using Bar Plots, Bar Charts, Pair Plots and Joint Plots for specific regions.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "R&D Member",
          company: "Webarch Club",
          company_url: "https://www.webarchsrm.com/",
          logo_path: "Webarch.jfif",
          duration: "Mar 2020 - Nov 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
          color: "#4285F4",
        },
        {
          title: "Campus Leader",
          company: "Code For Cause",
          company_url: "https://www.codecau.se/",
          logo_path: "CFC.jfif",
          duration: "Nov 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
          color: "#a60000",
        },
        {
          title: "Machine Learning - Research associate",
          company: "Next Tech Lab",
          company_url: "https://nextech.io/",
          logo_path: "NTL.jfif",
          duration: "Oct 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Associate responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects and intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
          color: "#62cff0",
        },
        {
          title: "Campus Ambassador",
          company: "Bagcampus",
          company_url: "https://bagcampus.in/",
          logo_path: "Bagcampus.jpg",
          duration: "Dec 2020 - May 2021",
          location: "Remote",
          description:
            "Spread Awareness of new Technologies and Companies and new Opportunities to Students and Grow Bagcampus Community.",
          color: "#0059c9",
        },
        {
          title: "Volunteer",
          company: "Google Crowdsource",
          company_url: "https://indiaenvironment.org/",
          logo_path: "GCS.jfif",
          duration: "Sept 2020 - Present",
          location: "Remote",
          description:
            "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
          color: "#ffffff",
        },
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://indiaenvironment.org/",
          logo_path: "NSS.jfif",
          duration: "Dec 2019 - May 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#282b6c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a variety of latest technologies. My best experience is to create NodeJS Backend Projects, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  InfoSection: {
    resume: [
      {
        category: "Resume",
        action: "See my Resume",
        url:
          "https://drive.google.com/file/d/12PhdFbCRmfhgsZeYwLbz-fj4A_4WkNqq/view?usp=sharing",
      },
      {
        category: "Resume",
        action: "Downlod Resume",
        url:
          "https://drive.google.com/uc?id=12PhdFbCRmfhgsZeYwLbz-fj4A_4WkNqq&export=download",
      },
    ],
  },
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@derimarg",
    avatar_image_path: "blogs_image.svg",
    category: "Social Media",
    action: "Open Medium Blogs",
  },
};

const projects = {
  data: [
    {
      id: "0",
      category: "View Project",
      action: "Go to Code Command website",
      name: "Code Command",
      url: "https://code-command-team.herokuapp.com/",
      description:
        "This is a website that offers Engineering courses online and How to learn how to code using incredibly useful languages.",
      languages: [
        {
          name: "NPM",
          iconifyClass: "logos:npm-icon",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Dotenv",
          iconifyClass: "file-icons:dotenv",
        },
        {
          name: "GraphQL",
          iconifyClass: "logos-graphql",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos:mongodb",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
        {
          name: "FontAwesome",
          iconifyClass: "simple-icons:fontawesome",
        },
      ],
    },
    {
      id: "1",
      category: "View Project",
      action: "Go to Forge website",
      name: "Forge",
      url: "https://forge-team.herokuapp.com/",
      description:
        "Social media for Bootcamp students so we can ask/answer coding questions and share experiences.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NPM",
          iconifyClass: "logos:npm-icon",
        },
        {
          name: "Node",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
        {
          name: "SQL",
          iconifyClass: "vscode-icons:file-type-sql",
        },
        {
          name: "Express",
          iconifyClass: "logos:express",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
        {
          name: "Dotenv",
          iconifyClass: "file-icons:dotenv",
        },
        {
          name: "FontAwesome",
          iconifyClass: "simple-icons:fontawesome",
        },
      ],
    },
    {
      id: "2",
      category: "View Project",
      action: "Go to Tech Blog website",
      name: "Tech Blog",
      url: "https://dg-tech-blog.herokuapp.com/",
      description:
        "This is CMS-style Blogging website where tech users publish articles, create a blog post, and create comments on them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NPM",
          iconifyClass: "logos:npm-icon",
        },
        {
          name: "MySql",
          iconifyClass: "vscode-icons:file-type-mysql",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
      ],
    },
    {
      id: "3",
      category: "View Project",
      action: "Go to Portfolio website",
      name: "Portfolio Website",
      url: "https://derimarg.github.io/react-portfolio/",
      description:
        "This is a Portfolio website that display the most relevant things as a Developer.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NPM",
          iconifyClass: "logos:npm-icon",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "FontAwesome",
          iconifyClass: "simple-icons:fontawesome",
        },
      ],
    },
    {
      id: "4",
      category: "View Project",
      action: "Go to Weather Dashboard website",
      name: "Weather Dashboard",
      url: "https://derimarg.github.io/weather-dashboard/",
      description:
        "Allow to search for a city to get the current weather and 5 day forecast. Cities that use users previously search will be displayed as history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JQuery",
          iconifyClass: "bxl:jquery",
        },
        {
          name: "APIs",
          iconifyClass: "icon-park-outline:api-app",
        },
        {
          name: "BootStrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "5",
      category: "View Project",
      action: "Go to Password Generator website",
      name: "Password Generator",
      url: "https://derimarg.github.io/password-generator/",
      description:
        "This program give you the ability of generate a random secure password based on your needs.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "6",
      category: "View Project",
      action: "Go to Note Taker website",
      name: "Note Taker",
      url: "https://my-notes-taker.herokuapp.com/",
      description:
        "Used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node",
          iconifyClass: "vscode-icons:file-type-node",
        },
        {
          name: "JQuery",
          iconifyClass: "bxl:jquery",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
        {
          name: "FontAwesome",
          iconifyClass: "simple-icons:fontawesome",
        },
      ],
    },
    {
      id: "7",
      category: "View Project",
      action: "Go to Taskmaster Pro website",
      name: "Taskmaster Pro",
      url: "https://derimarg.github.io/taskmaster-pro/",
      description: "To Do app that allows to organized tasks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "8",
      category: "View Project",
      action: "Go to Work Day Scheduler website",
      name: "Work Day Scheduler",
      url: "https://derimarg.github.io/work-day-scheduler/",
      description:
        "A day scheluder application that allows a user to save events and organize their day.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "JQuery",
          iconifyClass: "bxl:jquery",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos-bootstrap",
        },
      ],
    },
    {
      id: "9",
      category: "View Project",
      action: "Go to Run Buddy website",
      name: "Run Buddy",
      url: "https://derimarg.github.io/run-buddy/",
      description:
        "Fitness center where recreational and professional athletes can work out.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  routes,
  greeting,
  navBarHeader,
  socialMedia,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
