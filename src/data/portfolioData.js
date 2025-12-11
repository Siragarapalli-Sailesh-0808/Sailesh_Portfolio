/**
 * Portfolio Data
 * Contains all projects, skills, experience, and achievements
 */

// Projects from the portfolio images
export const projects = [
  {
    id: 1,
    title: 'OpenDoor',
    category: 'Real Estate Platform',
    description: 'A cutting-edge web application that simplifies the real estate experience for buyers, sellers, and renters across India. Features an effortless interface for property discovery with advanced search capabilities.',
    tech: ['Python', 'Tailwind CSS', 'MongoDB', 'NoSQL'],
    features: [
      'User-friendly property listings',
      'Streamlined buyer-seller connection',
      'Advanced search and filters'
    ],
    icon: '🏠',
    githubUrl: 'https://github.com/Siragarapalli-Sailesh-0808'
  },
  {
    id: 2,
    title: 'Knee Osteoarthritis Prediction',
    category: 'Medical AI System',
    description: 'Novel machine learning method for early detection and prediction of Knee Osteoarthritis, helping healthcare professionals make better, more accurate diagnoses using advanced imaging analysis.',
    tech: ['Python', 'TensorFlow', 'Medical Imaging', 'ML'],
    features: [
      'Early detection capabilities',
      'Healthcare decision support',
      'Automated screening system'
    ],
    icon: '🏥',
    githubUrl: 'https://github.com/Siragarapalli-Sailesh-0808'
  },
  {
    id: 3,
    title: 'GAN-Driven Diabetic Retinopathy Detection',
    category: 'Healthcare Solution',
    description: 'Advanced GAN-based system for detecting Diabetic Retinopathy from retinal images, enabling healthcare professionals to identify and prevent vision loss through automated image analysis.',
    tech: ['Python', 'GANs', 'Deep Learning', 'TensorFlow'],
    features: [
      'GAN-powered image analysis',
      'Augmented screening system',
      'High accuracy detection'
    ],
    icon: '👁️',
    githubUrl: 'https://github.com/Siragarapalli-Sailesh-0808'
  },
  {
    id: 4,
    title: 'AgriHub',
    category: 'Agricultural Platform',
    description: 'Comprehensive agricultural management platform connecting farmers with resources, market insights, and modern farming techniques. Integrates sustainable farming support with farmer resource connectivity.',
    tech: ['ReactJS', 'NodeJS', 'MongoDB', 'APIs'],
    features: [
      'Farmer resource connectivity',
      'Market insights integration',
      'Sustainable farming support'
    ],
    icon: '🌾',
    githubUrl: 'https://github.com/Siragarapalli-Sailesh-0808'
  },
  {
    id: 5,
    title: 'Smart Plant Care',
    category: 'IoT & Web App',
    description: 'Intelligent plant care management system providing personalized care schedules, AR-integrated plant database, and API-integrated resources for indoor plant enthusiasts.',
    tech: ['ReactJS', 'APIs', 'NodeJS', 'MongoDB'],
    features: [
      'Personalized care schedules',
      'AR-integrated plant database',
      'Real-time plant monitoring'
    ],
    icon: '🪴',
    githubUrl: 'https://github.com/Siragarapalli-Sailesh-0808'
  }
];

// Skills data from the resume image
export const skills = {
  languages: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'SQL', level: 88 },
    { name: 'Java', level: 75 },
    { name: 'Kotlin', level: 70 }
  ],
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Redux', level: 80 },
    { name: 'Context API', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 93 },
    { name: 'Bootstrap', level: 88 },
    { name: 'AngularJS', level: 75 },
    { name: 'Angular 7.0', level: 75 },
    { name: 'UI/UX Design', level: 82 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'Flask', level: 82 },
    { name: 'Ruby on Rails', level: 70 },
    { name: 'PHP', level: 65 },
    { name: 'RESTful APIs', level: 88 }
  ],
  databases: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 87 },
    { name: 'Oracle', level: 75 },
    { name: 'MS SQL Server', level: 80 },
    { name: 'SQLite', level: 82 }
  ],
  other: [
    { name: 'ChatGPT', level: 95 },
    { name: 'AI Image Gen', level: 91 },
    { name: 'Git', level: 92 },
    { name: 'Communication', level: 90 },
    { name: 'Team Leadership', level: 85 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Adaptability', level: 92 },
    { name: 'Analytical Thinking', level: 90 },
    { name: 'Prompt Engineering', level: 92 }
  ]
};

// Experience timeline from resume
export const experience = [
  {
    title: 'Software Developer Intern',
    subtitle: 'Idriyas',
    date: 'June 2025 – Present',
    description: 'Developing robust data and management reporting for regulatory operations using SQL and Python.',
    points: [
      'Assisted with development of data extraction and analysis',
      'Defined, monitored, and reported on key management metrics',
      'Translated complex data into actionable insights using Qlik Sense or Tableau'
    ]
  },
  {
    title: 'Front-End Developer Intern',
    subtitle: 'Techally Labs',
    date: 'May 2024 – June 2024',
    description: 'Immersed in a dynamic and innovative environment, emphasizing both personal and professional growth.',
    points: [
      'Built responsive user interfaces using React.js and Redux',
      'Optimized application state management using Context API',
      "Supported over 10,000 active users, ensuring data consistency"
    ]
  }
];

// Education from resume
export const education = [
  {
    title: "Vignan's Institute Of Information Technology",
    subtitle: 'BTech in Information Technology',
    date: 'Nov 2022 – May 2026',
    description: 'Comprehensive technology education with focus on software development, data analysis, and modern web technologies.',
    points: [
      'GPA: 9.0',
      'Relevant Coursework: Data Structures, Algorithms, Database Systems, Machine Learning'
    ]
  }
];

// Achievements from resume
export const achievements = [
  {
    title: 'Responsive UI Engineering',
    description: 'Engineered responsive user interfaces for core applications using React.js and Redux, resulting in 20% improvement in user engagement',
    icon: '🎨'
  },
  {
    title: 'State Management Optimization',
    description: 'Optimized application state management using Context API, supporting over 10,000 active users',
    icon: '⚡'
  },
  {
    title: 'National Coding Competition',
    description: 'Achieved Top 5% rank in national-level coding competition, demonstrating advanced Data Structures and Algorithms proficiency',
    icon: '🏆'
  }
];

// Social links
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Siragarapalli-Sailesh-0808',
    icon: '💻'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sailesh-siragarapalli/',
    icon: '💼'
  },
  {
    name: 'Email',
    url: 'mailto:siragarapallisailesh@gmail.com',
    icon: '📧'
  }
];

// Personal info
export const personalInfo = {
  name: 'Sailesh Siragerapalli',
  title: 'Data Analyst & Full Stack Developer',
  location: 'Visakhapatnam',
  email: 'siragarapallisailesh@gmail.com',
  phone: '+91 9959401213',
  github: 'https://github.com/Siragarapalli-Sailesh-0808',
  linkedin: 'https://www.linkedin.com/in/sailesh-siragarapalli/',
  bio: "A strategy-driven Data Analyst with hands-on experience in SQL and Python for data extraction, modeling, and analysis. Proven ability to leverage data visualization tools like Qlik Sense or Tableau to define and report on key management metrics and deliver high-impact dashboards. Adept at translating complex business challenges into scalable, data-driven solutions that improve operational efficiency and profitability."
};
