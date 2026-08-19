const services = [
  {
    number: "01",
    title: "Data Analysis & Business Intelligence",
    text: "Turn raw data into clear insights that help teams understand what is happening and decide what to do next.",
    items: ["Data cleaning", "Exploratory analysis", "Business insights", "Dashboards"],
  },
  {
    number: "02",
    title: "Machine Learning Solutions",
    text: "Build predictive models that uncover patterns, forecast outcomes, and support better decisions.",
    items: ["Classification", "Regression", "Forecasting", "Model evaluation"],
  },
  {
    number: "03",
    title: "AI Applications & LLM Solutions",
    text: "Build useful AI applications and automate repetitive workflows with modern models and APIs.",
    items: ["AI assistants", "LLM solutions", "RAG / knowledge tools", "API integrations"],
  },
  {
    number: "04",
    title: "AI & Data Automation",
    text: "Turn repetitive data and information workflows into practical, automated processes.",
    items: ["Data workflows", "Report automation", "AI automation", "Custom tools"],
  },
];

const microServices = [
  "Excel & CSV Cleanup", "Data Analysis", "Python Scripts & Fixes", "SQL Queries",
  "Dashboard Creation", "Web Scraping", "Data Conversion", "Report Automation",
  "AI / API Integration", "Bug Fixes & Troubleshooting",
];

const projects = [
  {
    tag: "AI APPLICATION",
    title: "Creator Retention Coach",
    description:
      "An AI application that helps creators understand audience retention and engagement by analysing behavioural signals and delivering practical, personalised guidance to improve content strategy.",
    tech: ["Next.js", "React", "OpenAI", "Razorpay"],
    href: "https://github.com/tafeemamair/creator-retention-coach",
  },
  {
    tag: "AI / AUTOMATION",
    title: "AI Video Factory",
    description:
      "An automated pipeline that turns structured scripts and visual/audio assets into rendered, captioned short-form videos—streamlining production and removing repetitive manual editing steps.",
    tech: ["Python", "FFmpeg", "Automation", "Video Processing"],
    href: "https://github.com/tafeemamair/ai-video-factory",
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

      {/* FREELANCE EXPERIENCE */}
      <section id="freelance-experience" className="section freelance-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">FREELANCE EXPERIENCE</span>
            <h2>Proven client experience.</h2>
          </div>
          <p>⭐ 4.9/5 rating across 10+ client reviews<br/>13+ completed orders on Fiverr<br/>Research, virtual assistance & business support for international clients<br/>Currently expanding into data analysis & AI/ML freelance work</p>
        </div>
        <div className="freelance-cta">
          <a className="button secondary" href="https://www.fiverr.com/tafeem_amair" target="_blank" rel="noreferrer">View Fiverr Profile ↗</a>
        </div>
      </section>

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

      {/* QUICK DATA & AUTOMATION SERVICES (replaces micro-services content) */}
      <section id="quick-data" className="section micro-services-section" aria-labelledby="quick-data-heading">
        <div className="section-heading micro-services-heading">
          <div>
            <span className="section-kicker">QUICK DATA & AUTOMATION SERVICES</span>
            <h2 id="quick-data-heading">Need something solved quickly?</h2>
          </div>
          <p>I help with short, focused tasks that get you a working result fast.</p>
        </div>
        <div className="quick-services-copy">
          <p><strong>Need cleaner data?</strong><br/>I'll clean, organize and transform messy spreadsheets and datasets into analysis-ready data.</p>
          <p><strong>Need Excel formulas or automation?</strong><br/>I'll build formulas, pivot tables and automated workflows that reduce repetitive work.</p>
          <p><strong>Need a SQL query written?</strong><br/>I'll write and optimize queries to extract the data you need.</p>
          <p><strong>Need a dashboard?</strong><br/>I'll turn raw numbers into clear, actionable dashboards.</p>
          <p><strong>Need a Python script fixed or built?</strong><br/>I'll debug existing code or build a script around your requirements.</p>
          <p><strong>Need data scraped or extracted?</strong><br/>I'll extract structured information from websites or documents into a usable format.</p>
          <p><strong>Need a repetitive workflow automated?</strong><br/>I'll automate repeatable processes using Python and AI where appropriate.</p>
        </div>
        <div className="micro-services-cta">
          <p><strong>Have a small task? Tell me what you need — I'll confirm scope, price, and turnaround.</strong></p>
          <a className="button primary" href="#contact">Send Me the Task <span>↗</span></a>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SELECTED WORK</span>
            <h2>Practical projects across AI, automation, and data-driven applications.</h2>
          </div>
          <a className="text-link" href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">View GitHub ↗</a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-art">
                <div className="project-glow" />
                {project.title === "AI Video Factory" ? (
                  <div className="video-factory-art" aria-hidden="true">
                    <div className="video-factory-phone">
                      <span className="video-factory-label">SCENE 04</span>
                      <div className="video-factory-frame"><i /><b>CAPTIONS<br />IN MOTION</b></div>
                      <div className="video-factory-captions"><span /><span /><span /></div>
                    </div>
                    <div className="video-factory-timeline"><span>01</span><i /><span>02</span><i /><span>03</span><i /><b>RENDER</b></div>
                  </div>
                ) : (
                  <div className="project-window">
                    <div className="window-bar"><i /><i /><i /></div>
                    <div className="window-body">
                      <span>CREATOR</span>
                      <strong>RETENTION</strong>
                      <small>AI COACH</small>
                      <div className="mini-chart"><b /><b /><b /><b /><b /><b /></div>
                    </div>
                  </div>
                )}
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
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section testimonials-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TESTIMONIALS</span>
            <h2>What clients say.</h2>
          </div>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <blockquote>"Excellent work done on time, nice communication."</blockquote>
            <cite>— Fiverr client, Research & Business Support</cite>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <blockquote>"Exceeded expectations — professionalism, quick responsiveness, went above and beyond."</blockquote>
            <cite>— Fiverr client, Business Support Project</cite>
          </div>
        </div>
      </section>

      <section id="about" className="section about-section">
        <div className="about-number">02</div>
        <div className="about-copy">
          <span className="section-kicker">ABOUT ME</span>
          <h2>Engineering discipline. <em>Data-driven thinking. AI-powered solutions.</em></h2>
          <p>I'm Aisan Tafeem Amair, a Data Scientist, Machine Learning Engineer, and AI Solutions Freelancer.</p>
          <p>My background in Mechanical Engineering trained me to approach problems systematically — breaking complex problems down, understanding constraints, and working toward practical solutions. I later transitioned into Data Science, Machine Learning, and AI, combining that engineering discipline with modern data and AI technologies.</p>
          <p>Today, I work across data analysis, machine learning, AI applications, automation, and technical problem-solving — with a focus on building solutions that are useful, practical, and understandable.</p>
        </div>
        <div className="about-side">
          <div className="quote-mark">“</div>
          <p>Understand the problem.<br />Work with the data.<br />Build the solution.<br /><strong>Deliver something useful.</strong></p>
        </div>
      </section>

      {/* TECHNICAL FOCUS */}
      <section className="section tech-focus-section">
        <div>
          <span className="section-kicker">TECHNICAL FOCUS</span>
          <h2>Areas I focus on.</h2>
        </div>
        <div className="tech-cloud">
          <span>Data Analysis</span>
          <span>Machine Learning</span>
          <span>AI & LLM Applications</span>
          <span>Automation</span>
          <span>Python & SQL</span>
          <span>Dashboards & Visualization</span>
        </div>
      </section>

      {/* WHY WORK WITH ME */}
      <section id="why" className="section why-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">WHY WORK WITH ME</span>
            <h2>What you get, working together.</h2>
          </div>
        </div>
        <div className="services-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Engineering mindset</h3>
            <p>Structured, systematic problem solving.</p>
          </article>
          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Data-first approach</h3>
            <p>Decisions backed by evidence, not guesswork.</p>
          </article>
          <article className="service-card">
            <span className="service-number">03</span>
            <h3>End-to-end delivery</h3>
            <p>From analysis and modeling to implementation.</p>
          </article>
          <article className="service-card">
            <span className="service-number">04</span>
            <h3>Flexible engagement</h3>
            <p>Small tasks, focused projects, or larger engagements.</p>
          </article>
          <article className="service-card why-card-full">
            <span className="service-number">05</span>
            <h3>Clear communication</h3>
            <p>Practical explanations without unnecessary jargon.</p>
          </article>
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
          <h2>Have a small task you&apos;d like to get done?</h2>
          <p>Send me the details of what you need. I&apos;ll review the task and get back to you with the scope, price, and expected turnaround.</p>
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
