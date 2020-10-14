
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Yannis Aitkhelifa",
  subTitle: emoji("Développeur Full Stack auto-entrepreneur, je maitrise à la fois le design et la programmation web."),
  resumeLink: "#"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/YansYansYans",
  linkedin: "https://www.linkedin.com/in/yannis-ait-khelifa-1648331ab/",
  gmail: "yannis.aitkhelifa@gmail.com",
  instagram: "https://www.instagram.com/_yans_yans/?hl=fr",
};

// Your Skills Section

const skillsSection = {
  title: "Ce que je sais faire",
  subTitle: "Développeur Web / Web Designer",
  skills: [
    emoji("⚡ Développement de Front end interactif et épuré"),
    emoji("⚡ Design de site réfléchi et cohérant"),
    emoji("⚡ Intégration et création d'API avec React")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML 5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS 3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend/Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "BDD/CMS",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Full Stack Freelance",  
      company: "Freelance",
      companylogo: require("./assets/images/me.png"),
      date: "Juillet 2020 - Aujourd'hui",
      desc: "Je me suis lancer en tant que développeur auto-entrepreneur et j'ai pu réaliser des projets pour des clients.",
      descBullets: [
        "Création de site de réservation de billet",
        "Utilisation de REACT JS"
      ]
    },
    {
      role: "Web Designer",  
      company: "Ringover",
      companylogo: require("./assets/images/ringover.png"),
      date: "Juin 2020",
      desc: "La StartUp RINGOVER m'a demandé (sous forme de test) de faire une refonte de leur page d'accueil.",
      descBullets: [
        "Utilisation de SASS",
        "Cohérance et Epuration des contenus"
      ]
    },
    {
      role: "Régulateur de Flux",   
      company: "Itiremia",
      companylogo: require("./assets/images/itiremia.png"),
      date: "Octobre 2019 – Mars 2020",
      desc: "Durant 5 mois, j'ai exercé le métier de Régulateur de Flux dans une gare SNCF par le prestataire ITIREMIA. Ce CDD m'a permis d'acquérir certaines compétences comme la gestion ou la communication directe."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "yansyansyans", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Mes Gros Projets",
  subtitle: "Projets impliquants React et Sql",
  projects: [
    {
      image: require("./assets/images/alter.png"),
      link: "#"
    },
    {
      image: require("./assets/images/event.png"),
      link: "#"
    }
  ]
};

const bigProjects2 = {
  title: "Mes autres projets",
  subtitle: "Projets pour client ou personnels développés lors de formation.",
  projects: [
    {
      image: require("./assets/images/deviceoh.png"),
      link: "https://yansyansyans.github.io/ProjetFood/"
    },
    {
      image: require("./assets/images/deviceri.png"),
      link: "https://yansyansyans.github.io/ProjetRingover/"
    },
    {
      image: require("./assets/images/deviceya.png"),
      link: "https://yansyansyans.github.io/ProjetYaProd/"
    },
    {
      image: require("./assets/images/devicegro.png"),
      link: "https://github.com/YansYansYans/ProjetGroupomania"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Diplomes et Formations 🏆 "),
  subtitle: "Du Bac à la formation certifiante, voici mon parcours !",

  achivementsCards: [
    {
      title: "Développeur Web +2",
      subtitle: "En juin 2020 j'ai été diplomé de la formation certifiante OpenClassrooms Développeur Web Bac+2",
      image: require("./assets/images/open.png"),
      footerLink: [
        { name: "Diplome", url: "" },
        { name: "Qu'est-ce que c'est ?", url: "https://openclassrooms.com/fr/paths/185-developpeur-web?version=new&utm_expid=.8UMBYRLCTvuhc9bB2WKF2Q.1&utm_referrer=https%3A%2F%2Fopenclassrooms.com%2Ffr%2Fpaths" }
      ]
    },
    {
      title: "Bac Littéraire",
      subtitle: "En juin 2019, j'ai obtenu mon Bac L avec mention AB. Ces 2 années à préparer ce diplome m'ont permis de développer mon savoir et ma façon d'écrire.",
      image: require("./assets/images/men.png"),
      footerLink: [{ name: "Qu'est ce que c'est ?", url: "https://www.cidj.com/etudes-formations-alternance/les-diplomes/bac-l-litteraire" }]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle: "Vous êtes intéréssé par mes services; vous voulez un site internet, contactez moi !",
  number: "0770453527",
  email_address: "yannis.aitkhelifa@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, bigProjects2, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
