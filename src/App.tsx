import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Code2, 
  Server, 
  Database, 
  Bot, 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Code,
  Building2,
  ServerCog
} from 'lucide-react';

import { 
  FaReact, 
  FaNodeJs,
  FaPython 
} from 'react-icons/fa';
import { 
  SiTypescript,  
  SiNextdotjs,
  SiGo,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAngular,
  SiFirebase,
  SiAmazonaws, 
  SiDocker, 
  SiKubernetes, 
  SiApachekafka 
} from 'react-icons/si';

import { 
  DiJava
 } from 'react-icons/di';


function TechCard({ icon: Icon, name, color }: { icon: React.ElementType; name: string; color: string }) {
  return (
    <div className="tech-card p-4 bg-[#1A1A1B] rounded-lg border border-gray-800 flex flex-col items-center justify-center gap-3 hover:bg-[#252525] transition-colors">
      <Icon className={`w-8 h-8 ${color}`} />
      <p className="text-center">{name}</p>
    </div>
  );
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    error: null as string | null,
    success: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({
        submitting: false,
        error: 'Please fill in all fields',
        success: false
      });
      return;
    }

    setStatus({ submitting: true, error: null, success: false });

    try {
      await emailjs.send(
        'service_u07jwii', 
        'template_gf9hvtr', 
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'smituplenchwar02@gmail.com'
        },
        'mY4T4uoObLyDBbplY' 
      );

      setStatus({
        submitting: false,
        error: null,
        success: true
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      setStatus({
        submitting: false,
        error: 'Failed to send message. Please try again.',
        success: false
      });
    }
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission
  //   console.log(formData);
  // };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-purple-400">kraglen</span>
          </a>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors duration-300">Skills</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/SmitUplenchwar2687" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/smit-uplenchwar-41b473219/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/smit2687_/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
  id="about"
  className="pt-32 pb-20 px-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
>
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <motion.div
        className="flex-1"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="inline-block px-4 py-2 rounded-full bg-[#1A1A1B] mb-6 hover:bg-purple-500/10 transition-colors duration-300">
          <span className="flex items-center text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Available for new projects
          </span>
        </div>
        <h1 className="text-5xl font-bold mb-4">
          Smit <span className="text-purple-400">Uplenchwar</span>
        </h1>
        <h2 className="text-2xl mb-6">
          <span className="text-purple-400">Full Stack Developer</span>
        </h2>
        <p className="text-gray-400 mb-8">
          I'm a Software Development Engineer with over 2 years of experience
          working on large-scale and distributed systems. I have a strong 
          foundation in designing, developing, and deploying complex software 
          applications that can handle high traffic and large datasets. I am 
          passionate about solving complex problems and creating innovative 
          solutions—I love the process of turning ideas into reality through 
          technology.
        </p>
        <div className="flex gap-4">
          <button className="primary-button px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center">
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </button>
          <a
            href="https://drive.google.com/file/d/1ea5yCsHC2bAHnhvOkjENUMZaIuighlpg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800 inline-block text-center"
          >
            Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        className="flex-1 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full aspect-square rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
          <img
            src="https://res.cloudinary.com/dninix0mh/image/upload/f_auto,c_fill,q_auto:best,w_800/v1743196850/WhatsApp_Image_2025-03-28_at_11.12.10_AM_iljl3u.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  </div>
</motion.section>

      {/* Core Competencies */}
      <section className="py-20 px-4 bg-[#0D0D0E]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800"
      >
        <Code2 className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
        <p className="text-gray-400">
          Building responsive and interactive user interfaces with React, TypeScript, Angular and Next.js.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800"
      >
        <Server className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
        <p className="text-gray-400">
          Creating robust APIs and server-side applications using Node.js, Flask, Go and Express.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800"
      >
        <Database className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">Database Management</h3>
        <p className="text-gray-400">
          Working with SQL and NoSQL databases including PostgreSQL, MongoDB, Firebase and MySQL.
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800"
      >
        <Bot className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
        <p className="text-gray-400">
          Implementing machine learning models using TensorFlow, PyTorch, and other AI frameworks.
        </p>
      </motion.div>
    </div>
  </div>
</section>

{/* Tech Stack */}
<section className="py-20 px-4" id="skills">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-purple-400 text-sm uppercase tracking-wider">MY SKILLS</span>
      <h2 className="text-4xl font-bold mt-2">Tech Stack</h2>
      <p className="text-gray-400 mt-4">The technologies and tools I use to bring ideas to life</p>
    </div>

    <div className="space-y-12">
      {/* Frontend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Code className="text-purple-400" />
          <h3 className="text-xl font-semibold">Frontend</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TechCard icon={FaReact} name="React" color="text-[#61DAFB]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechCard icon={SiNextdotjs} name="Next.js" color="text-black" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TechCard icon={SiTypescript} name="TypeScript" color="text-[#3178C6]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCard icon={SiAngular} name="Angular" color="text-[#DD0031]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Server className="text-purple-400" />
          <h3 className="text-xl font-semibold">Backend</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TechCard icon={FaPython} name="Python" color="text-[#FFD43B]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechCard icon={FaNodeJs} name="Node.js" color="text-[#339933]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TechCard icon={SiGo} name="Go" color="text-[#00ADD8]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCard icon={DiJava} name="Java" color="text-[#007396]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Database */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Database className="text-purple-400" />
          <h3 className="text-xl font-semibold">Database</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TechCard icon={SiMongodb} name="MongoDB" color="text-[#47A248]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechCard icon={SiPostgresql} name="PostgreSQL" color="text-[#336791]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TechCard icon={SiMysql} name="MySQL" color="text-[#4479A1]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCard icon={SiFirebase} name="Firebase" color="text-[#FFCA28]" />
          </motion.div>
        </div>
      </motion.div>

      {/* Cloud & Systems */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <ServerCog className="text-blue-400" />
          <h3 className="text-xl font-semibold">Cloud & Systems</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <TechCard icon={SiAmazonaws} name="AWS" color="text-[#FF9900]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TechCard icon={SiDocker} name="Docker" color="text-[#2496ED]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TechCard icon={SiKubernetes} name="Kubernetes" color="text-[#326CE5]" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TechCard icon={SiApachekafka} name="Kafka" color="text-[#231F20]" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

       {/* Work Experience */}
<section className="py-20 px-4" id="experience">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
      <span className="text-purple-400 text-sm uppercase tracking-wider">MY JOURNEY</span>
      <h2 className="text-4xl font-bold mt-2">Work Experience</h2>
      <p className="text-gray-400 mt-4">
        A timeline of my professional experience and the skills I've developed along the way.
      </p>
    </div>

    <div className="space-y-8">
      {/* o9 Solutions - Software Engineer II */}
      <div className="flex gap-6">
        <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Building2 className="w-6 h-6 text-purple-400" />
        </div>
        <div className="experience-card bg-[#1A1A1B] p-6 rounded-xl border border-gray-800 flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer II</h3>
              <p className="text-gray-400">o9 Solutions</p>
            </div>
            <span className="text-sm text-purple-400">Feb 2024 – Aug 2024</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Developed React (Tailwind CSS) components for real-time data analytics UIs, improving user experience by 25%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Led full-stack enhancements using Node.js (TypeScript), Python, Flask, and AWS services (EC2, Lambda, S3),
                reducing deployment overhead by 30%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Optimized MySQL/PostgreSQL queries for a 40% performance boost, ensuring scalable data handling for 300+ global
                clients.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Containerized microservices using Docker and orchestrated them with Kubernetes, enabling faster prototyping.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Enhanced supply chain software using PostgreSQL and AWS Lambda, improving query efficiency by 30%.
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Tailwind CSS</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">TypeScript</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Flask</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">AWS</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">MySQL</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">PostgreSQL</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Docker</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Kubernetes</span>
          </div>
        </div>
      </div>

      {/* o9 Solutions - Software Engineer */}
      <div className="flex gap-6">
        <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Building2 className="w-6 h-6 text-purple-400" />
        </div>
        <div className="experience-card bg-[#1A1A1B] p-6 rounded-xl border border-gray-800 flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-400">o9 Solutions</p>
            </div>
            <span className="text-sm text-purple-400">Feb 2022 – Feb 2024</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Contributed to multiple full-stack projects leveraging React, Node.js, Python, and Flask, delivering 12+ new
                features across 4 microservices and impacting 200K+ daily active users.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Designed serverless architectures with AWS Lambda, reducing deployment time by 40% and cutting the total
                monthly cloud costs by 25%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Implemented real-time pipelines handling 1M+ daily transactions via Apache Kafka and Snowflake, improving
                data throughput by 30%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Collaborated closely with mentors to troubleshoot 50+ critical issues, prioritize technical debt, and
                adopt best practices, achieving a 95% on-time feature delivery rate.
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">React</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Flask</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">AWS Lambda</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Kafka</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Snowflake</span>
          </div>
        </div>
      </div>

      {/* Tegasys Solutions - Software Engineering Intern */}
      <div className="flex gap-6">
        <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Building2 className="w-6 h-6 text-purple-400" />
        </div>
        <div className="experience-card bg-[#1A1A1B] p-6 rounded-xl border border-gray-800 flex-1">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold">Software Engineering Intern</h3>
              <p className="text-gray-400">Tegasys Solutions</p>
            </div>
            <span className="text-sm text-purple-400">Jul 2021 – Nov 2021</span>
          </div>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Developed Node.js and Flask web services deployed on AWS, reducing latency by 35% through optimized MySQL usage.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Containerized .NET microservices using Docker and established CI/CD pipelines to improve release speed by
                50%, reducing average build time from 30 minutes to 15 minutes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mt-2" />
              <span>
                Demonstrated strong communication skills during Agile stand-ups, ensuring alignment on project timelines
                and deliverables.
              </span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Node.js</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Flask</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">MySQL</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Docker</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">.NET</span>
            <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">AWS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Featured Projects */}
      <section className="py-20 px-4 bg-[#0D0D0E]" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm uppercase tracking-wider">MY WORK</span>
            <h2 className="text-4xl font-bold mt-2">Featured Projects</h2>
            <p className="text-gray-400 mt-4">A collection of projects that showcase my skills and experience in building digital products.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="project-card bg-[#1A1A1B] rounded-xl overflow-hidden border border-gray-800">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  alt="A2K Financial Advisory"
                  className="project-image w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">A2K Financial Advisory</h3>
                <p className="text-gray-400 mb-4">An AI-powered financial advisory platform offering spending insights, savings projections, and chatbot-driven advice.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">MERN Stack</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Git</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Google Gemini</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2 group">
                  View Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card bg-[#1A1A1B] rounded-xl overflow-hidden border border-gray-800">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800"
                  alt="Donezo"
                  className="project-image w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Donezo</h3>
                <p className="text-gray-400 mb-4">A full-stack collaborative task management platform with role-based access control.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">MERN Stack</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Git</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2 group">
                  View Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card bg-[#1A1A1B] rounded-xl overflow-hidden border border-gray-800">
              <div className="overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&q=80&w=800"
                  alt="FormUp"
                  className="project-image w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">FormUp - Form Builder</h3>
                <p className="text-gray-400 mb-4">A drag-and-drop form builder for creating dynamic, customizable forms with real-time preview.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Next.js</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">TypeScript</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Dnd-Kit</span>
                </div>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition flex items-center gap-2 group">
                  View Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-4 bg-[#0D0D0E]" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm uppercase tracking-wider">CONTACT</span>
            <h2 className="text-4xl font-bold mt-2">Get In Touch</h2>
            <p className="text-gray-400 mt-4">Have a project in mind or want to collaborate? Feel free to reach out!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">smituplenchwar02@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (716)-339-4309</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">New York, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/SmitUplenchwar2687" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/smit-uplenchwar-41b473219/" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/smit2687_/" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-input w-full px-4 py-2 bg-[#1A1A1B] rounded-lg border border-gray-800"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input w-full px-4 py-2 bg-[#1A1A1B] rounded-lg border border-gray-800"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-input w-full px-4 py-2 bg-[#1A1A1B] rounded-lg border border-gray-800"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="form-input w-full px-4 py-2 bg-[#1A1A1B] rounded-lg border border-gray-800"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                {status.error && (
          <div className="text-red-500 text-sm">{status.error}</div>
        )}
        
        {status.success && (
          <div className="text-green-500 text-sm">Message sent successfully!</div>
        )}


        <button
          type="submit"
          disabled={status.submitting}
          className={`primary-button w-full py-3 bg-purple-600 rounded-lg ${
            status.submitting 
              ? 'opacity-50 cursor-not-allowed' 
              : 'hover:bg-purple-700'
          }`}
        >
          {status.submitting ? 'Sending...' : 'Send Message'}
        </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="mt-20 py-10 px-4 bg-[#111111] text-white border-t border-gray-800">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Left Column */}
    <div>
      <h3 className="text-xl font-bold">Smit Uplenchwar</h3>
      <p className="mt-4 text-gray-400">
        Full Stack Developer passionate about solving complex problems and creating innovative solutions.
        Building software applications with modern technologies.
      </p>
      <div className="flex space-x-4 mt-4">
        {/* Update links for your social profiles */}
        <a
          href="#"
          className="social-icon w-10 h-10 bg-[#1A1A1B] rounded-lg flex items-center justify-center"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="social-icon w-10 h-10 bg-[#1A1A1B] rounded-lg flex items-center justify-center"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="#"
          className="social-icon w-10 h-10 bg-[#1A1A1B] rounded-lg flex items-center justify-center"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>
    </div>

    {/* Middle Column */}
    <div>
      <h3 className="text-xl font-bold">Quick Links</h3>
      <ul className="mt-4 space-y-2 text-gray-400">
        <li>
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-purple-400 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="hover:text-purple-400 transition-colors"
          >
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-purple-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-purple-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </div>

    {/* Right Column */}
    <div>
      <h3 className="text-xl font-bold">Contact Info</h3>
      <p className="mt-4 text-gray-400">
        New York, USA
        <br />
        smituplenchwar02@gmail.com
        <br />
        +1 (716)-339-4309
      </p>
      <a
        href="https://drive.google.com/file/d/1ea5yCsHC2bAHnhvOkjENUMZaIuighlpg/view?usp=sharing"
        className="mt-4 inline-block px-4 py-2 bg-purple-600 text-white rounded 
                   hover:bg-purple-700 transition-colors"
      >
        Download Resume
      </a>
    </div>
  </div>

  <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
    © 2025 Smit Uplenchwar. All rights reserved.
  </div>
</footer>
    </div>
  );
}

export default App;