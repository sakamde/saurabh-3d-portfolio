import { useState } from 'react'
import { motion } from 'framer-motion'
import Scene from './components/Scene'
import Reveal from './components/Reveal'
import { resume } from './data/resume'

const nav = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

function App() {
  const [menu, setMenu] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenu(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => scrollTo('home')} className="text-2xl font-bold">
            SAK<span className="text-cyan-400">.</span>
          </button>
          <div className="hidden md:flex gap-6">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="capitalize hover:text-cyan-400 transition"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenu(!menu)}
          >
            ☰
          </button>
        </nav>
        {menu && (
          <div className="md:hidden bg-slate-800 p-4 space-y-2">
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left capitalize p-2 hover:text-cyan-400"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative">
          <div className="absolute inset-0 z-0">
            <Scene />
          </div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-cyan-400 text-sm font-bold tracking-wider mb-4">
                TECHNICAL DOCUMENTATION · ILLUSTRATION · AUTOMATION
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Saurabh<br />
                <span className="text-cyan-400">Avinash Kamde</span>
              </h1>
              <p className="text-xl text-gray-300 mb-4">{resume.title}</p>
              <p className="text-gray-400 mb-8 max-w-lg">{resume.summary.substring(0, 200)}...</p>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollTo('projects')}
                  className="bg-cyan-400 text-slate-900 px-6 py-3 font-bold rounded hover:bg-cyan-300 transition"
                >
                  View My Work ↗
                </button>
                <a
                  href="#contact"
                  className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded hover:bg-cyan-400/10 transition"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">01 / ABOUT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Turning complex<br />
                <span className="text-cyan-400">systems into clarity.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal>
                <p className="text-gray-300 mb-4">{resume.summary}</p>
              </Reveal>
              <div className="space-y-4">
                {['Technical Illustration', 'Workflow Automation', 'Quality Assurance', 'Collaboration'].map(
                  (item, i) => (
                    <Reveal key={item} delay={i * 0.1}>
                      <div className="bg-slate-700/50 p-4 rounded border border-cyan-400/20">
                        <h3 className="font-bold text-cyan-400">0{i + 1}</h3>
                        <p className="font-semibold mt-2">{item}</p>
                      </div>
                    </Reveal>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">02 / EXPERIENCE</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                A career built around<br />
                <span className="text-cyan-400">technical precision.</span>
              </h2>
            </Reveal>
            <div className="space-y-6">
              {resume.experiences.map((job, idx) => (
                <Reveal key={job.company} delay={idx * 0.1}>
                  <div className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="text-cyan-400 font-bold">{job.role}</div>
                        <h3 className="text-2xl font-bold">{job.company}</h3>
                      </div>
                      <div className="text-right text-sm text-gray-400">
                        {job.date}
                        <br />
                        {job.location}
                      </div>
                    </div>
                    <ul className="text-gray-300 space-y-2 mb-4">
                      {job.bullets.slice(0, 3).map((bullet) => (
                        <li key={bullet} className="text-sm">
                          • {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">03 / PROJECTS</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Where process becomes<br />
                <span className="text-cyan-400">productivity.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {resume.projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 0.1}>
                  <div
                    className="bg-slate-700/50 border border-cyan-400/20 p-6 rounded cursor-pointer hover:bg-slate-700 transition"
                    onClick={() => setActiveProject(activeProject === i ? null : i)}
                  >
                    <div className="text-cyan-400 font-bold mb-2">0{i + 1}</div>
                    <div className="text-sm text-gray-400 mb-2">{project.company}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    {project.meta && <div className="text-xs text-cyan-400 mb-3">{project.meta}</div>}
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-1 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">04 / SKILLS</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                The toolkit behind<br />
                <span className="text-cyan-400">the output.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(resume.skills).map(([group, skills], i) => (
                <Reveal key={group} delay={i * 0.1}>
                  <div className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded">
                    <h3 className="font-bold text-cyan-400 mb-4">0{i + 1} {group}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-slate-800/50">
          <div className="max-w-6xl mx-auto px-4">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">05 / EDUCATION</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Education &<br />
                <span className="text-cyan-400">certification.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-cyan-400 mb-4">EDUCATION</h3>
                <div className="space-y-4">
                  {resume.education.map((edu) => (
                    <Reveal key={edu.degree}>
                      <div className="bg-slate-700/50 border border-cyan-400/20 p-4 rounded">
                        <h4 className="font-bold">{edu.degree}</h4>
                        <p className="text-sm text-gray-400">{edu.institution}</p>
                        <p className="text-xs text-cyan-400 mt-2">{edu.date} · {edu.detail}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-cyan-400 mb-4">CERTIFICATIONS</h3>
                <div className="space-y-4">
                  {resume.certifications.map((cert) => (
                    <Reveal key={cert.title}>
                      <div className="bg-slate-700/50 border border-cyan-400/20 p-4 rounded">
                        <h4 className="font-bold">{cert.title}</h4>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                        {cert.meta && <p className="text-xs text-cyan-400 mt-2">{cert.meta}</p>}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <Reveal>
              <div className="text-cyan-400 text-sm font-bold mb-2">06 / CONTACT</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's build something<br />
                <span className="text-cyan-400">meaningful.</span>
              </h2>
              <p className="text-gray-300 mb-8">
                For technical illustration, documentation, graphics, and workflow opportunities.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href={`mailto:${resume.email}`}
                  className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded hover:bg-slate-700 transition"
                >
                  <div className="text-cyan-400 font-bold mb-2">EMAIL</div>
                  <div>{resume.email}</div>
                </a>
                <a
                  href={resume.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded hover:bg-slate-700 transition"
                >
                  <div className="text-cyan-400 font-bold mb-2">LINKEDIN</div>
                  <div>linkedin.com/in/saurabh-kamde</div>
                </a>
                <div className="bg-slate-800/50 border border-cyan-400/20 p-6 rounded">
                  <div className="text-cyan-400 font-bold mb-2">PHONE</div>
                  <div className="space-y-1">
                    {resume.phone.map((p) => (
                      <div key={p}>{p}</div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 py-6 text-center text-gray-400 text-sm">
        <p>© 2024 Saurabh Kamde. Sr. Technical Illustrator · Pune, Maharashtra</p>
      </footer>
    </div>
  )
}

export default App
