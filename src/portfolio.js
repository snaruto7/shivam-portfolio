/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "ShivamNarula",
  title: "Hi all, I'm Shivam",
  subTitle: emoji(
    "A passionate DevOps Engineer 🚀 having an experience of building and deploying Web applications with JavaScript / Reactjs / Nodejs / GoLang / Java to Kubernetes."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/snaruto7",
  linkedin: "https://www.linkedin.com/in/shivam-narula/",
  gmail: "shivam.narula7@gmail.com",
  instagram: "https://www.instagram.com/snaruto7/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DEVOPS ENGINEER WHO WANTS TO AUTOMATE & EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing CI/CD practice for migrating workloads to Kubernetes."
    ),
    emoji("⚡ Developing highly efficient automation scripts in Bash and Golang."),
    emoji(
      "⚡ Developing highly available Cloud Native applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-anchor"
    },
    {
      skillName: "linkerd",
      fontAwesomeClassname: "fas fa-layer-group"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-gofore"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "openshift",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University",
      logo: require("./assets/images/vitlogo.png"),
      subHeader: "B.Tech in Computer Science Engineering",
      duration: "July 2015 - April 2019",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ..."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Kubernetes", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud Native",
      progressPercentage: "70%"
    },
    {
      Stack: "Problem Solving",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "Sharechat",
      companylogo: require("./assets/images/sharechatLogo.png"),
      date: "Dec 2021 – Present",
      desc: "Joined as DevOps Engineer-1 and worked directly for the Release Engineering Pod in Core DevOps team.",
      descBullets: [
        "Migrated 1000+ microservices to new standards which includes creating abstraction on Jenkins stages and templatizing via helm using Spinnaker",
        "Introduced LinkerD as Service Mesh to enable Authorized Service to Service communication",
        "Wrote a utility in Golang which interacts with Spinnaker, Kubernetes, Gcloud, etc."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "PwC India",
      companylogo: require("./assets/images/pwclogo.jfif"),
      date: "Dec 2019 – Dec 2021",
      desc: "Joined as DevOps Engineer and worked in internal project as the core member.",
      descBullets: [
        "Designed and maintained Jenkins DSL Pipelines from Dev to Prod environment which automates whole CI/CD application deployment.",
        "Managing infrastructure of projects in Azure Devops and creating build pipelines.",
        "Wrote Terraform and Ansible scripts to configure resources in Azure Cloud.",
        "Wrote automation scripts using groovy and shell to make api calls which got executed in a pod."
      ]
    },
    {
      role: "UI Developer",
      company: "Mech Mocha",
      companylogo: require("./assets/images/mechmochalogo.png"),
      date: "May 2019 – Dec 2019",
      desc: "Joined as UI Developer and worked directly in creating 2D board games.",
      descBullets: [
        "Bootstarped Snakes & Ladders Game on Andorid Devices.",
        "Physics Tuning to introduce realism in various games like Carrom, Ludo, Fruit Ninja, etc.",
        "Optimized UI to support seamless flow of games on low-end devices.",
        "Followed Standard UI practices while designing the screens of gameplay and application internals."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://xyz.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-0000000000",
  email_address: "shivam.narula7@gmail.com"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
};
