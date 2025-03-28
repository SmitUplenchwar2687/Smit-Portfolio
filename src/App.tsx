import React, { useState } from 'react';
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
  Building2
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            <span className="text-purple-400">AK</span>
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
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
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
                I'm a Software Development Engineer with over 2 years of experience working on large-scale and distributed systems, I have a strong foundation in designing, developing and deploying complex software applications that can handle high traffic and large datasets. I am passionate about solving complex problems and creating innovative solutions, , I love the process of turning ideas into reality through technology.
              </p>
              <div className="flex gap-4">
                <button className="primary-button px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 flex items-center">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </button>
                <button className="primary-button px-6 py-3 border border-gray-700 rounded-lg hover:bg-gray-800">
                  Resume
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://res.cloudinary.com/dninix0mh/image/upload/f_auto,c_fill,q_auto:best,w_800/v1743196850/WhatsApp_Image_2025-03-28_at_11.12.10_AM_iljl3u.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 px-4 bg-[#0D0D0E]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800">
              <Code2 className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-400">Building responsive and interactive user interfaces with React, TypeScript, Angular and Next.js.</p>
            </div>
            <div className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800">
              <Server className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-400">Creating robust APIs and server-side applications using Node.js, Flask, and Express.</p>
            </div>
            <div className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800">
              <Database className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database Management</h3>
              <p className="text-gray-400">Working with SQL and NoSQL databases including PostgreSQL, MongoDB, Firebase and MySQL.</p>
            </div>
            <div className="competency-card p-6 rounded-xl bg-[#1A1A1B] border border-gray-800">
              <Bot className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-gray-400">Implementing machine learning models using TensorFlow, PyTorch, and other AI frameworks.</p>
            </div>
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
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code className="text-purple-400" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['React', 'JavaScript', 'TypeScript', 'Angular', 'Tailwind CSS'].map((tech) => (
                  <div key={tech} className="tech-card p-4 bg-[#1A1A1B] rounded-lg border border-gray-800">
                    <p className="text-center">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Server className="text-purple-400" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Python', 'Node.js', 'FastAPI', 'Flask'].map((tech) => (
                  <div key={tech} className="tech-card p-4 bg-[#1A1A1B] rounded-lg border border-gray-800">
                    <p className="text-center">{tech}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Database */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Database className="text-purple-400" />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'].map((tech) => (
                  <div key={tech} className="tech-card p-4 bg-[#1A1A1B] rounded-lg border border-gray-800">
                    <p className="text-center">{tech}</p>
                  </div>
                ))}
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

      {/* Work Experience */}
      {/* <section className="py-20 px-4" id="experience">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-purple-400 text-sm uppercase tracking-wider">MY JOURNEY</span>
            <h2 className="text-4xl font-bold mt-2">Work Experience</h2>
            <p className="text-gray-400 mt-4">A timeline of my professional experience and the skills I've developed along the way.</p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-purple-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <div className="experience-card bg-[#1A1A1B] p-6 rounded-xl border border-gray-800 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Python Developer Intern</h3>
                    <p className="text-gray-400">ThirdEye AI (A JBM Group Company)</p>
                  </div>
                  <span className="text-sm text-purple-400">Dec-2024 to January-2025</span>
                </div>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                    <span>Developed a robust RESTful API with Flask for systematic time series analysis, delivering insights that resolved key performance bottlenecks.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                    <span>Worked on a shoplifting detection system leveraging action recognition techniques to identify suspicious behaviors in real-time.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                    <span>Created and optimized a real-time push notification system to alert clients when a vehicle enters a designated area.</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Python</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">Flask</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">PyTorch</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">OpenCV</span>
                  <span className="skill-tag px-3 py-1 bg-gray-800 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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
                    <p className="text-gray-400">Available upon request</p>
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
                  <a href="#" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="#" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="social-icon w-12 h-12 bg-[#1A1A1B] rounded-lg flex items-center justify-center">
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
                <button
                  type="submit"
                  className="primary-button w-full py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;