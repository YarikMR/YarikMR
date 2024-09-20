export const bio = [
"I'm a Ph.D. candidate in Computational Linguistics, specializing in Natural Language Processing (NLP), Large Language Models (LLMs), and Artificial Intelligence (AI). With experience in both academic and industry research, I focus on developing AI/ML methods, prompt optimization for LLMs, and deploying NLP applications. I’ve also taught and mentored students, and I enjoy applying my skills to solve real-world problems, whether it's through research or implementing AI-driven solutions.",
];

const publications = [
  {
    authors: "Amelie Wuehrl, Lynn Greschner, Yarik Menchaca Resendiz, and Roman Klinger",
    title: "IMS_medicALY at #SMM4H 2024: Detecting impacts of outdoor spaces on social anxiety with data augmented ensembling",
    conference: " Proceedings of The 9th Social Media Mining for Health Research and Applications (SMM4H 2024) Workshop and Shared Tasks",
    organization: "Association for Computational Linguistics",
    year: 2024,
    httpLink: "https://aclanthology.org/2024.smm4h-1.19/",
    pdfLink: "https://aclanthology.org/2024.smm4h-1.19.pdf"
  },
  {
    authors: "Amelie Wührl, Yarik Menchaca Resendiz, Lara Grimminger, and Roman Klinger",
    title: "What makes medical claims (un)verifiable? analyzing entity and relation properties for fact verification",
    editors: "Yvette Graham and Matthew Purver, editors",
    conference: "Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)",
    location: "St. Julian's, Malta",
    pages: "2046--2058",
    month: "March",
    year: 2024,
    organization: "Association for Computational Linguistics",
    arxivLink: "https://arxiv.org/abs/2402.01360",
    httpLink: "https://aclanthology.org/2024.eacl-long.124/",
    pdfLink: "https://aclanthology.org/2024.eacl-long.124.pdf"
  },
  {
    authors: "Yarik Menchaca Resendiz and Roman Klinger",
    title: "Affective natural language generation of event descriptions through fine-grained appraisal conditions",
    conference: "Proceedings of the 16th International Conference on Natural Language Generation",
    location: "Prague, Czech Republic",
    month: "September",
    year: 2023,
    organization: "Association for Computational Linguistics",
    arxivLink: "https://arxiv.org/abs/2307.14004",
    httpLink: "https://aclanthology.org/2023.inlg-main.26/",
    pdfLink: "https://aclanthology.org/2023.inlg-main.26.pdf"
  },
  {
    authors: "Yarik Menchaca Resendiz and Roman Klinger",
    title: "Emotion-conditioned text generation through automatic prompt optimization.",
    conference: "Proceedings of the 1st Workshop on Taming Large Language Models: Controllability in the era of Interactive Assistants!",
    location: "Prague, Czech Republic",
    pages: "24–30",
    month: "September",
    year: 2023,
    organization: "Association for Computational Linguistics",
    arxivLink: "https://arxiv.org/abs/2308.04857",
    httpLink: "https://aclanthology.org/2023.tllm-1.3/",
    pdfLink: "https://aclanthology.org/2023.tllm-1.3.pdf"
  },
  // Add more publications here (template bellow)
//      {
//    authors: "Amelie Wührl, Yarik Menchaca Resendiz, Lara Grimminger, and Roman Klinger",
//    title: "What makes medical claims (un)verifiable? analyzing entity and relation properties for fact verification",
//    editors: "Yvette Graham and Matthew Purver, editors",
//    conference: "Proceedings of the 18th Conference of the European Chapter of the Association for Computational Linguistics (Volume 1: Long Papers)",
//    location: "St. Julian's, Malta",
//    pages: "2046--2058",
//    month: "March",
//    year: 2024,
//    organization: "Association for Computational Linguistics",
//    arxivLink: "https://arxiv.org/abs/2402.01360",
//    httpLink: "https://aclanthology.org/2024.eacl-long.124/",
//    pdfLink: "https://aclanthology.org/2024.eacl-long.124.pdf"
//  },
];

// Populate the publications section
const publicationsList = document.getElementById('publications-list');

publications.forEach(pub => {
  const listItem = document.createElement('li');

  // Dynamically build the publication content based on available fields
  let content = '';

  if (pub.authors) content += `${pub.authors}. `;
  if (pub.title) content += `<strong>${pub.title}</strong>.`;
  if (pub.editors) content += `${pub.editors}. `;
  if (pub.conference) content += `<i>${pub.conference}</i>, `;
  if (pub.pages) content += `pages ${pub.pages}, `;
  if (pub.location) content += `${pub.location}, `;
  if (pub.month) content += `${pub.month} `;
  if (pub.year) content += `${pub.year}. `;
  if (pub.organization) content += `${pub.organization}. `;

  // Build the links section only if the links exist
  let links = '';
  if (pub.bibLink) links += `<a href="${pub.bibLink}" target="_blank">[bib]</a> `;
  if (pub.arxivLink) links += `<a href="${pub.arxivLink}" target="_blank">[arXiv]</a> `;
  if (pub.httpLink) links += `<a href="${pub.httpLink}" target="_blank">[http]</a> `;
  if (pub.pdfLink) links += `<a href="${pub.pdfLink}" target="_blank">[pdf]</a> `;

  // Combine the content and the links
  listItem.innerHTML = `${content} ${links.trim()}<br><br>`;
  publicationsList.appendChild(listItem);
});

export const skills = [
    {
    title: "Natural Language Processing",
    skillName: "NLP, LLMs, Text Generation",
    color: "5",
    percentage: "95",
  },
  {
    title: "Machine Learning & Deep Learning",
    skillName: "AI/ML Methodologies, Model Optimization, Network Architecture",
    color: "5",
    percentage: "95",
  },
    {
    title: "Research & Problem-Solving",
    skillName: "Research & Problem-Solving:",
    color: "5",
    percentage: "80",
  },
    {
    title: "Cloud & DevOps",
    skillName: "Docker, Azure, AWS",
    color: "8",
    percentage: "60",
  },
  {
    title: "Programming Languages",
    skillName: "Python, C++, SQL, Java",
    color: "4",
    percentage: "90",
  },
    {
    title: "Version Control",
    skillName: "GitHub, JIRA, Bitbucket",
    color: "4",
    percentage: "80",
  },
    {
    title: "Libraries",
    skillName: "TensorFlow, PyTorch, Keras",
    color: "2",
    percentage: "80",
  },
      {
    title: "Libraries",
    skillName: "Spacy, NLTK, Transformers",
    color: "2",
    percentage: "95",
  },

];

export const projects = {
  webProjects: [
    {
      projectName: "Programming Diaries",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
      preview: "https://programmingdiaries.herokuapp.com/",
      techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
    },
    {
      projectName: "Find Your Bank",
      image: "images/findyourbank.png",
      summary:
        "Developed a React application to render a list of banks fetched from API. Filtered the banks based on queries from localstorage, marked favorites banks.",
      preview: "https://clever-fermi-0d5d76.netlify.app",
      techStack: ["Reactjs", "Bootstrap", "JavaScript", "Netlify"],
    },
    {
      projectName: "Web Portfolio",
      image: "images/portfolio.png",
      summary:
        "Web Portfolio to showcase acadmics, skills, projects and contact details in better manner.",
      preview: "https://github.com/vinaysomawat/Travographer-Portal",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
    {
      projectName: "Resume Builder",
      image: "images/resume-builder.png",
      summary:
        "Browser based editor to build and download Resumes in a customizable templates.",
      preview: "https://vinaysomawat.github.io/Resume-Builder",
      techStack: ["HTML", "Bootstrap", "JavaScript"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Pizza Ordering ChatBot",
      image: "images/pizzaorderchatbot.png",
      summary:
        "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
      preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
      techStack: ["Dailogflow", "Firebase"],
    },
    {
      projectName: "WhatsApp-Bot",
      image: "images/whatsappbot.jpg",
      summary:
        "Python script which helps to send messages to WhatsApp contacts automatically using selenium and web automation.",
      preview: "https://github.com/vinaysomawat/WhatsApp-Bot",
      techStack: ["Selenium", "Chrome Webdriver", "Python"],
    },
    {
      projectName: "Bill Generator",
      image: "images/billgenerator.png",
      summary:
        "GUI to transfer data to excel sheets and generate bills on the local shops.",
      preview: "https://github.com/vinaysomawat/Bill-Generator",
      techStack: ["Tkinter", "Openxlpy", "Python"],
    },
  ],
  androidProjects: [
    {
      projectName: "NITW-CSE",
      image: "images/nitwcse.jpg",
      summary:
        "The Application display details of Department courses, reference books, research, publication and faculty profile.",
      preview: "https://github.com/vinaysomawat/NITW-CSE",
      techStack: ["JAVA", "XML", "Android"],
    },
    {
      projectName: "CareerHigh-App",
      image: "images/carrerhigh.png",
      summary:
        "The Application display the webpages of website careerhigh.in in android devices.",
      preview: "https://github.com/vinaysomawat/CareerHigh-Android",
      techStack: ["JAVA", "XML", "Android"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "SnylloAir.com",
      image: "images/snylloair.png",
      summary:
        "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
      preview: "https://www.snylloair.com/",
      techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
    },
    {
      projectName: "Delivery+",
      image: "images/AM-Logo-.png",
      summary: "Android Application to display website in android devices.",
      preview:
        "https://play.google.com/store/apps/details?id=com.americanmarket.americanmarketandroid",
      techStack: ["Android", "JAVA", "Play Store"],
    },
  ],
};

export const experience = [
  {
    title: "Graduate Research Assistant",
    duration: "Apr 2024 - Dec 2024",
    subtitle: "Otto-Friedrich-Universität Bamberg, Germany",
    details: ["Conducted research on prompt optimization methods for language models and managed cloud GPU server environments for large-scale language model deployment."],
    tags: ["Python", "Git", "Cloud Services", "LLMs", "Pytorch", "TensorFlow"],
    icon: "language",
  },
    {
    title: "Graduate Teaching Assistant",
    duration: "Apr 2022 - Mar 2024",
    subtitle: "University of Stuttgart, Germany",
    details: ["Taught, evaluated, and supervised bachelor's and master's students in Natural Language Processing courses, including Information Retrieval and Teamlab, focusing on practical applications and research mentorship."],
    tags: ["Python", "Git", "NLP", "Algorithms", "LLMs", "TensorFlow"],
    icon: "book",
  },
  {
    title: "Data Scientist",
    duration: "Jun 2018 - Oct 2021",
    subtitle: "Kantar, México",
    details: ["Researched and developed AI/ML methodologies for large language models, chatbots, text mining, basket analysis, and prediction.",
    "Created a natural language processing application for 10 languages.",
    "Implemented machine learning techniques such as deep neural networks, regression, and decision trees."],
    tags: ["Azure", "Docker", "NLP", "Recommender Systems", "Market Research", "TensorFlow", "Python"],
    icon: "globe",
  },
    {
    title: "Research Intern",
    duration: "Feb 2017 - Aug 2017",
    subtitle: "University of Wolverhampton, United Kingdom",
    details: ["Developed a sentiment analysis application for Spanish texts."],
    tags: ["Sentiment Analysis", "Python", "NLP", "Recommender Systems", "Social Media"],
    icon: "language",
  },

];

export const education = [
//  {
//    title: "Ph.D. in Computational Linguistics.",
//    duration: "Jul 2021 - Dec 2024",
//    subtitle: "University of Stuttgart, Germany",
//    details: [],
//    tags: [
//      "Natural Language Processing (NLP) & Large Language Models (LLMs)",
//      "Prompt Optimization & Text Generation",
//      "Model Optimization"
//      "Deep Learning & Machine Learning",
//      "Python Pytorch & TensorFlow",
//      "Cloud Services",
//      "GPT-API LangChain Gemini",
//    ],
//    icon: "graduation-cap",
//  },
  {
    title: "Ph.D. in Computational Linguistics.",
    duration: "Jul 2021 - Dec 2024",
    subtitle: "University of Stuttgart, Germany",
    details: [],
    tags: [
      "Natural Language Processing (NLP) & Large Language Models (LLMs)",
      "Prompt Optimization & Text Generation",
      "Model Optimization",
      "Deep Learning & Machine Learning",
      "Python, Pytorch & TensorFlow",
      "Cloud Services",
      "GPT-API, Gemini & LangChain",
    ],
    icon: "graduation-cap",
  },
    {
    title: "M.Sc. in Computer Science.",
    duration: "2015 - 2017",
    subtitle: "Instituto Politécnico Nacional, México",
    details: [],
    tags: [
      "Natural Language Processing (NLP) & Recommender Systems",
      "Sentiment Analysis",
      "Deep Learning & Machine Learning",
      "Python & TensorFlow",
      "Java, C++, C# & Matlab",
      "SQL",
      "GIT",
    ],
    icon: "graduation-cap",
  },

      {
    title: "B.E. Computer Engineering.",
    duration: "2011 - 2015",
    subtitle: "Instituto Politécnico Nacional, México",
    details: [],
    tags: [
      "Algorithms",
      "Python",
      "Java, C++, C# & Matlab",
      "SQL",
    ],
    icon: "graduation-cap",
  },

  {
    title: "Computer Technician",
    duration: "2008 - 2011",
    subtitle: "CBtis 03, México",
    details: [],
    tags: ["C++", "Matlab", "Java"],
    icon: "graduation-cap",
//    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Links",
    data: [
      {
        text: "Buy me a coffee",
        link: "https://www.buymeacoffee.com/r194dME8y",
      },
      {
        text: "Github/vinaysomawat.github.io",
        link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Vinay Somawat.",
      "&copy; No Copyrights. Feel free to use this template.",
    ],
  },
];

export const blogs = [
{
  title: "A GPT-3 Text Classifier for Everyone",
  platform: "Medium",
  link: "https://medium.com/@yarikmenchacar/a-gpt-3-text-classifier-for-everyone-51861c43ccf9",
  description: "A practical guide on building a versatile text classifier using GPT-3, showcasing how even non-experts can leverage GPT-3's capabilities for various text classification tasks."
},
  {
    title: "Multi-Language Sentiment Classifier",
    platform: "Medium",
    link: "https://medium.com/@yarikmenchacar/multi-language-sentiment-classifier-d5307966b002",
  description: "A guide to building a multi-language sentiment classifier using training data in a single language, demonstrating how to extend sentiment analysis across languages without needing multilingual training datasets."
  },
  {
    title: "A Simple Multi-Class Text Classification with Transformers",
    platform: "LinkedIn",
    link: "https://www.linkedin.com/pulse/simple-multi-class-text-classification-transformers-yarik/?trackingId=GIapnVUdQzC4jGJkHXirzA%3D%3D",
  description: "A practical introduction to building (with code) a simple multi-class text classifier using transformer models, explaining the implementation process for text classification tasks."
  },
];

// Populate the blogs section
const blogsList = document.getElementById('blogs');

blogs.forEach(blog => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h3>${blog.title}</h3>
    <p><strong>${blog.platform}</strong></p>
    <p>${blog.description}</p>
    <a href="${blog.link}" target="_blank">Read more &RightArrow;</a>
    <br><br>
  `;
  blogsList.appendChild(listItem);
});

