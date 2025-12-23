import frontend from "../images/Frontend-Development-(1).webp";
import backend from "../images/Backend-Development.webp";
import fullStack from "../images/full-stack-web-development.jpg";
import aiMl from "../images/ai-ml.jpg";
import cloudComputing from "../images/cloud-computing.avif";
import dataScience from "../images/data-science.webp";
const courses = [
  {
    name: "Frontend Development",
    img: frontend,
    duration: "6 months",
    desc: "Master modern frontend development with HTML5, CSS3, and JavaScript (ES6+). Build responsive, interactive web applications using React, Next.js, and modern frameworks.",
    availability: "ON CAMPUS & ONLINE",
    price: "₦350,000",
    courseDetails: {
      instructor: "Sarah Johnson",
      lectures: 48,
      level: "Beginner to Advanced",
      language: "English",
      certificate: "Yes (Industry-recognized)",
      enrolledStudents: 275,
      rating: 4.9,
      totalRatings: 198,
      startDate: "February 1, 2025",
      requirements: [
        "Basic computer literacy",
        "No prior programming experience required",
        "Laptop with minimum 8GB RAM",
        "Stable internet connection"
      ],
      whatYoullLearn: [
        "Modern JavaScript (ES6+), React, and Next.js",
        "Responsive design with CSS Grid, Flexbox, and Tailwind CSS",
        "State management with Redux and Context API",
        "RESTful APIs and GraphQL integration",
        "Testing with Jest and React Testing Library",
        "Performance optimization techniques",
        "Web accessibility (a11y) standards",
        "Deployment with Vercel and Netlify"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "Redux", "Git", "Jest", "TypeScript"]
    },
  },
  {
    name: "Backend Development",
    img: backend,
    duration: "6 months",
    desc: "Master backend development with Node.js, Express, and databases. Build robust APIs, handle authentication, and deploy scalable backend applications.",
    availability: "ON CAMPUS & ONLINE",
    price: "₦450,000",
    courseDetails: {
      instructor: "Michael Chen",
      lectures: 42,
      level: "Intermediate to Advanced",
      language: "English",
      certificate: "Yes (Industry-recognized)",
      enrolledStudents: 185,
      rating: 4.8,
      totalRatings: 142,
      startDate: "February 1, 2025",
      requirements: [
        "Basic understanding of JavaScript",
        "Familiarity with programming concepts",
        "Laptop with minimum 8GB RAM",
        "Node.js and npm installed"
      ],
      whatYoullLearn: [
        "Node.js runtime and event loop",
        "Building RESTful APIs with Express",
        "Database design with MongoDB and PostgreSQL",
        "Authentication with JWT and OAuth",
        "API security best practices",
        "WebSockets and real-time communication",
        "Docker and containerization",
        "Deployment with AWS and Heroku"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Docker", "JWT", "OAuth", "WebSockets", "AWS", "TypeScript"]
    },
  },
  {
    name: "Full Stack Development",
    img: fullStack,
    duration: "12 months",
    desc: "Become a complete developer by mastering both frontend and backend technologies. Build and deploy full-stack applications using the MERN stack and modern development practices.",
    availability: "ON CAMPUS & ONLINE",
    price: "₦1,000,000",
    courseDetails: {
      instructor: "David Wilson",
      lectures: 90,
      level: "Beginner to Advanced",
      language: "English",
      certificate: "Yes (Industry-recognized)",
      enrolledStudents: 320,
      rating: 4.9,
      totalRatings: 256,
      startDate: "February 1, 2025",
      requirements: [
        "Basic computer literacy",
        "No prior programming experience required",
        "Laptop with minimum 8GB RAM",
        "Dedication to complete the program"
      ],
      whatYoullLearn: [
        "Frontend development with React and Next.js",
        "Backend development with Node.js and Express",
        "Database design with MongoDB and Mongoose",
        "Authentication and authorization",
        "State management with Redux and Context API",
        "Testing with Jest and React Testing Library",
        "CI/CD and DevOps practices",
        "Deployment to cloud platforms"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Redux", "Jest", "Docker", "AWS", "TypeScript"]
    }
  },
  {
    name: "AI & Machine Learning",
    img: aiMl,
    duration: "8 months",
    desc: "Master Artificial Intelligence and Machine Learning concepts. Build and deploy intelligent systems using Python, TensorFlow, and PyTorch.",
    availability: "ON CAMPUS & ONLINE",
    price: "₦1,300,000",
    courseDetails: {
      instructor: "Dr. Emily Zhang",
      lectures: 60,
      level: "Intermediate to Advanced",
      language: "English",
      certificate: "Yes (Industry-recognized)",
      enrolledStudents: 185,
      rating: 4.9,
      totalRatings: 142,
      startDate: "March 1, 2025",
      requirements: [
        "Python programming experience",
        "Basic understanding of linear algebra and statistics",
        "Laptop with minimum 16GB RAM recommended",
        "Basic calculus knowledge is a plus"
      ],
      whatYoullLearn: [
        "Fundamentals of Machine Learning and Deep Learning",
        "Neural Networks and Deep Learning with TensorFlow/PyTorch",
        "Computer Vision and Natural Language Processing",
        "Reinforcement Learning fundamentals",
        "Model deployment and MLOps",
        "Ethics in AI and responsible AI practices"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV", "NLTK", "Pandas", "NumPy", "MLflow"]
    },
  },
  {
    name: "Cloud Computing",
    img: cloudComputing,
    duration: "5 months",
    desc: "Master cloud computing with AWS, Azure, and Google Cloud. Learn to design, deploy, and manage scalable cloud infrastructure and services.",
    availability: "ONLINE",
    price: "₦900,000",
    courseDetails: {
      instructor: "James Wilson",
      lectures: 40,
      level: "Intermediate",
      language: "English",
      certificate: "Yes (Includes AWS/Azure certification prep)",
      enrolledStudents: 220,
      rating: 4.7,
      totalRatings: 168,
      startDate: "February 15, 2025",
      requirements: [
        "Basic understanding of networking",
        "Familiarity with command line interface",
        "Laptop with minimum 8GB RAM"
      ],
      whatYoullLearn: [
        "Cloud architecture and service models",
        "AWS Cloud Platform",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Containerization with Docker and Kubernetes",
        "Serverless computing",
        "Cloud security best practices"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Serverless", "Linux"]
    },
  },
  {
    name: "Data Science",
    img: dataScience,
    duration: "7 months",
    desc: "Become a Data Scientist. Master data analysis, visualization, and machine learning to extract insights from complex datasets.",
    availability: "ON CAMPUS & ONLINE",
    price: "₦550,000",
    courseDetails: {
      instructor: "Dr. Maria Garcia",
      lectures: 52,
      level: "Beginner to Advanced",
      language: "English",
      certificate: "Yes (Industry-recognized)",
      enrolledStudents: 198,
      rating: 4.8,
      totalRatings: 156,
      startDate: "March 1, 2025",
      requirements: [
        "Basic programming knowledge (Python preferred)",
        "Basic understanding of statistics",
        "Laptop with minimum 8GB RAM"
      ],
      whatYoullLearn: [
        "Data analysis with Python and R",
        "Data visualization with Matplotlib, Seaborn, and Tableau",
        "Statistical analysis and hypothesis testing",
        "Machine learning for data science",
        "Big Data technologies (Hadoop, Spark)",
        "Data storytelling and presentation"
      ],
      technologies: ["Python", "R", "Pandas", "NumPy", "SQL", "Tableau", "Power BI", "scikit-learn", "Jupyter", "Apache Spark"]
    },
  }
];

export default courses;
