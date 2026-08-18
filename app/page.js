const services = [
  {
    number: "01",
    title: "Data Science & Analytics",
    text: "Turn raw data into clear insights that help teams understand what is happening and decide what to do next.",
    items: ["Data cleaning", "Exploratory analysis", "Predictive analytics", "Data visualization"],
  },
  {
    number: "02",
    title: "Machine Learning",
    text: "Build predictive models that uncover patterns, forecast outcomes, and support better decisions.",
    items: ["Classification", "Regression", "Forecasting", "Model evaluation"],
  },
  {
    number: "03",
    title: "AI Solutions & Automation",
    text: "Build useful AI applications and automate repetitive workflows with modern models and APIs.",
    items: ["AI applications", "LLM solutions", "AI automation", "API integrations"],
  },
  {
    number: "04",
    title: "Dashboards & Reporting",
    text: "Turn complex datasets into clear dashboards and reports that people can actually use.",
    items: ["Python", "SQL", "Excel", "Tableau"],
  },
];

const projects = [
  {
    tag: "AI APPLICATION",
    title: "Creator Retention Coach",
    description:
      "A full-stack AI application designed around creator retention and engagement workflows.",
    tech: ["Next.js", "React", "OpenAI", "Razorpay"],
    href: "https://github.com/tafeemamair/creator-retention-coach",
  },
];

const technologies = [
  "Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn",
  "Tableau", "Excel", "OpenAI APIs", "Next.js", "React", "JavaScript"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home">AISAN<span>.</span></a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-cta" href="#contact">Work With Me <span>↗</span></a>
      </nav>

      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> AVAILABLE FOR PROJECTS</div>
            <h1>Building practical solutions with <em>Data, AI & Machine Learning.</em></h1>
            <p className="hero-text">
              I help businesses, founders, and clients turn data, machine learning, and AI
              into practical solutions that solve real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Work With Me <span>↗</span></a>
              <a className="button secondary" href="#work">View My Work <span>↓</span></a>
            </div>
            <div className="hero-meta">
              <span>Based in India</span>
              <span>•</span>
              <span>Remote / Freelance</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="data-card card-one"><span>ML</span><b>MODEL</b><small>BUILD → EVALUATE</small></div>
            <div className="data-card card-two"><span>AI</span><b>SOLUTION</b><small>IDEA → PRODUCT</small></div>
            <div className="grid-lines" />
            <div className="vertical-label">DATA / AI / ML</div>
          </div>
        </div>
      </section>

      <div className="trust-strip">
        <div><strong>DATA</strong><span>Analysis · Insights · Visualization</span></div>
        <div><strong>ML</strong><span>Prediction · Forecasting · Modeling</span></div>
        <div><strong>AI</strong><span>Applications · Automation · APIs</span></div>
        <div><strong>BUILD</strong><span>Practical · Clear · Outcome-focused</span></div>
      </div>

      <section id="services" className="section services-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SERVICES</span>
            <h2>Technology that serves<br /><em>the problem.</em></h2>
          </div>
          <p>I focus on practical outcomes — not technology for technology&apos;s sake.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-list">{service.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SELECTED WORK</span>
            <h2>Things I&apos;ve<br /><em>built.</em></h2>
          </div>
          <a className="text-link" href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">View GitHub ↗</a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-art">
                <div className="project-glow" />
                <div className="project-window">
                  <div className="window-bar"><i /><i /><i /></div>
                  <div className="window-body">
                    <span>CREATOR</span>
                    <strong>RETENTION</strong>
                    <small>AI COACH</small>
                    <div className="mini-chart"><b /><b /><b /><b /><b /><b /></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">View Project <span>↗</span></a>
              </div>
            </article>
          ))}
          <article className="project-card coming-soon">
            <div>
              <span className="project-tag">IN PROGRESS</span>
              <h3>More projects<br /><em>coming soon.</em></h3>
              <p>I&apos;m continuously building practical projects across data science, machine learning, AI, and automation.</p>
              <a className="project-link" href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">Follow the work <span>↗</span></a>
            </div>
            <div className="plus">+</div>
          </article>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-number">02</div>
        <div className="about-copy">
          <span className="section-kicker">ABOUT ME</span>
          <h2>Turning technical skills into <em>practical solutions.</em></h2>
          <p>
            I&apos;m Aisan Tafeem Amair, a Data Scientist, Machine Learning Engineer,
            and AI Solutions Freelancer.
          </p>
          <p>
            My background is in Mechanical Engineering, and over time I transitioned
            into data science, machine learning, software development, and artificial intelligence.
          </p>
          <p>
            Today, I work across data analysis, machine learning, AI applications,
            automation, and technical problem-solving.
          </p>
          <p>
            I enjoy taking a problem that initially looks complicated, breaking it
            down into manageable parts, and building a practical solution around it.
          </p>
        </div>
        <div className="about-side">
          <div className="quote-mark">“</div>
          <p>Understand the problem.<br />Work with the data.<br />Build the solution.<br /><strong>Deliver something useful.</strong></p>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">HOW I WORK</span>
            <h2>A simple path from<br /><em>problem to solution.</em></h2>
          </div>
        </div>
        <div className="process-grid">
          {[
            ["01", "Understand", "Understand the problem, desired outcome, available data, and technical requirements."],
            ["02", "Analyze", "Examine the data, workflow, and constraints to identify the most practical approach."],
            ["03", "Build", "Develop the appropriate data, machine learning, AI, or automation solution."],
            ["04", "Deliver", "Provide a usable solution with clear documentation and practical next steps."]
          ].map(([n, title, text]) => (
            <div className="process-item" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section tech-section">
        <div>
          <span className="section-kicker">TOOLKIT</span>
          <h2>Technologies I<br /><em>work with.</em></h2>
        </div>
        <div className="tech-cloud">
          {technologies.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <span className="section-kicker">LET&apos;S TALK</span>
          <h2>Have a problem<br />you&apos;d like to <em>solve?</em></h2>
          <p>Tell me what you&apos;re working on and what you&apos;d like to achieve. Let&apos;s see if I can help.</p>
          <a className="contact-email" href="mailto:aisantafeem@gmail.com">aisantafeem@gmail.com <span>↗</span></a>
          <div className="socials">
            <a href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/aisan-tafeem-amair-721400147/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>AISAN<span>.</span></span>
        <p>Data Scientist · Machine Learning Engineer · AI Solutions Freelancer</p>
        <small>© 2026 Aisan Tafeem Amair</small>
      </footer>
    </main>
  );
}
