"use client";

import React, { useState, useEffect, useRef } from "react";

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

const consoleContent = {
  clean: {
    title: "Data Cleaning & Profiling",
    desc: "Transform messy raw datasets into structured, analytical-ready formats, resolving missing records, date parsing, and type alignments.",
    code: `import pandas as pd
import numpy as np

# Load messy data
df = pd.read_csv("customer_signals_raw.csv")

# Resolve nulls & formats
df['join_date'] = pd.to_datetime(df['join_date'], errors='coerce')
df['activity_score'] = df['activity_score'].fillna(df['activity_score'].median())

# Filter outliers
q_low, q_high = df['spend'].quantile([0.01, 0.99])
df_clean = df[(df['spend'] > q_low) & (df['spend'] < q_high)]

print(f"✔ Pipeline ready: {df_clean.shape[0]} aligned records.")`
  },
  excel: {
    title: "Excel Formulas & Automation",
    desc: "Optimize spreadsheet workflows using advanced logical indexing, pivot generation, and custom VBA/Python automation to reduce human error.",
    code: `# Automating report extraction using openpyxl
import openpyxl
from openpyxl.styles import Font, PatternFill

wb = openpyxl.load_workbook("weekly_report.xlsx")
sheet = wb["Summary"]

# Inject automated metrics
sheet["C12"] = "=SUMIFS(Transactions!E:E, Transactions!A:A, \\">\\"&A12)"
sheet["C12"].font = Font(bold=True)
sheet["C12"].fill = PatternFill(start_color="E6F7FF", fill_type="solid")

wb.save("weekly_report_automated.xlsx")`
  },
  sql: {
    title: "SQL Optimization & Queries",
    desc: "Develop and scale database queries to extract cohort, retention, and performance datasets from transactional relational warehouses.",
    code: `-- Retrospective Cohort Retention (30d active metric)
WITH cohort_source AS (
  SELECT user_id, MIN(event_date) AS cohort_month
  FROM user_events GROUP BY user_id
)
SELECT 
  DATE_TRUNC('month', c.cohort_month) AS cohort,
  COUNT(DISTINCT e.user_id) AS cohort_size,
  SUM(CASE WHEN e.event_date >= c.cohort_month + INTERVAL '30 days' THEN 1 ELSE 0 END) AS active_30d
FROM cohort_source c
JOIN user_events e ON c.user_id = e.user_id
GROUP BY 1 ORDER BY 1;`
  },
  dashboard: {
    title: "Dashboarding & Analytics",
    desc: "Generate actionable visualizations that map KPIs, metrics, and trends for executives and product teams.",
    code: `# Dashboard pipeline generation (Tableau/Python connection)
import tableau_api_lib
from tableau_api_lib.utils.querying import get_projects_dataframe

conn = tableau_api_lib.TableauServerConnection(config)
conn.sign_in()

# Query operational data frames
df_projects = get_projects_dataframe(conn)
print("📊 Operational dashboard cache warmed up.")`
  },
  python: {
    title: "Python Scripting & Debugging",
    desc: "Diagnose anomalies, memory leak bottlenecks, or execution bugs in custom Python automation structures.",
    code: `# Profile execution bottlenecks
import cProfile
import pstats

def process_batch(data):
    # Optimize local loop operations
    return [x * 1.05 for x in data if x is not None]

# Run profiling
pr = cProfile.Profile()
pr.enable()
process_batch(range(100000))
pr.disable()

pstats.Stats(pr).sort_stats('tottime').print_stats(5)`
  },
  scrape: {
    title: "Structured Scraping & ETL",
    desc: "Extract structured document datasets from complex web environments adhering to rate limits and parsing guidelines.",
    code: `import requests
from bs4 import BeautifulSoup

# Scraping data under polite constraints
headers = {"User-Agent": "AisanPortfolio/1.0"}
res = requests.get("https://news.ycombinator.com/", headers=headers)

soup = BeautifulSoup(res.text, "html.parser")
articles = []

for row in soup.find_all("tr", class_="athing")[:10]:
    title = row.find("span", class_="titleline").text
    articles.append({"title": title})

print(f"✔ Extracted {len(articles)} data-science articles.")`
  },
  automate: {
    title: "Workflow Automation & Orchestration",
    desc: "Build resilient cron jobs and API pipelines connecting modern services with structured data routines.",
    code: `# LLM-based summary pipeline
import openai
import json

def process_transcript(text):
    client = openai.OpenAI()
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": f"Summarize: {text}"}]
    )
    return response.choices[0].message.content

print("⚡ Automation pipeline online.")`
  }
};

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
  {
    tag: "AI / COMPUTER VISION",
    title: "Emotion Detection System",
    description:
      "A deep learning-based facial emotion detection application that analyzes uploaded facial images and predicts one of seven emotions using a trained CNN model.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Tkinter"],
    href: "https://github.com/tafeemamair/Emotion_Detection",
  },
];

const technologies = [
  "Python", "SQL", "R", "Pandas", "NumPy", "Scikit-learn",
  "Tableau", "Excel", "OpenAI APIs", "Next.js", "React", "JavaScript"
];

function HeroVisualizer() {
  const [epoch, setEpoch] = useState(0);
  const [history, setHistory] = useState([]);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setEpoch(prev => {
          if (prev >= 100) {
            setIsRunning(false);
            clearInterval(timerRef.current);
            return 100;
          }
          const next = prev + 1;
          const loss = 0.82 * Math.pow(0.95, next) + 0.05 + Math.random() * 0.015;
          const acc = 0.50 + 0.44 * (1 - Math.pow(0.96, next)) + Math.random() * 0.005;
          setHistory(h => [...h, { epoch: next, loss, acc }]);
          return next;
        });
      }, 70);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const handleRestart = () => {
    setEpoch(0);
    setHistory([]);
    setIsRunning(true);
  };

  const width = 280;
  const height = 180;
  
  const getLossPath = () => {
    if (history.length === 0) return "";
    return "M " + history.map(d => {
      const x = (d.epoch / 100) * (width - 30) + 15;
      const y = height - (d.loss / 0.95) * (height - 40) - 15;
      return `${x} ${y}`;
    }).join(" L ");
  };

  const getAccPath = () => {
    if (history.length === 0) return "";
    return "M " + history.map(d => {
      const x = (d.epoch / 100) * (width - 30) + 15;
      const y = height - (d.acc * 1.0) * (height - 40) - 15;
      return `${x} ${y}`;
    }).join(" L ");
  };

  const currentLoss = history.length > 0 ? history[history.length - 1].loss : 0.88;
  const currentAcc = history.length > 0 ? history[history.length - 1].acc : 0.50;

  return (
    <div className="hero-visual">
      <div className="visual-header">
        <span className="visual-title">
          <span style={{ 
            display: "inline-block",
            background: isRunning ? "var(--accent)" : "#ff4a4a", 
            width: 6, 
            height: 6, 
            borderRadius: "50%", 
            boxShadow: isRunning ? "0 0 8px var(--accent)" : "none",
            marginRight: 8
          }} />
          MODEL_TRAINING_MONITOR
        </span>
        <span className="visual-status">{isRunning ? "RUNNING" : "CONVERGED"}</span>
      </div>
      <div className="visual-body">
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          opacity: 0.05, 
          backgroundImage: "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)", 
          backgroundSize: "20px 20px" 
        }} />
        
        <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} style={{ overflow: "visible" }}>
          {/* Grid lines */}
          <line x1="15" y1="15" x2="265" y2="15" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="15" y1="75" x2="265" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="15" y1="135" x2="265" y2="135" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          
          {/* Axes */}
          <line x1="15" y1={height - 15} x2={width - 15} y2={height - 15} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="15" y1="15" x2="15" y2={height - 15} stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

          {/* Loss Curve */}
          <path d={getLossPath()} fill="none" stroke="#ff8c00" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Accuracy Curve */}
          <path d={getAccPath()} fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Current Position Markers */}
          {history.length > 0 && (
            <>
              <circle cx={(epoch / 100) * (width - 30) + 15} cy={height - (currentLoss / 0.95) * (height - 40) - 15} r="3" fill="#ff8c00" />
              <circle cx={(epoch / 100) * (width - 30) + 15} cy={height - (currentAcc * 1.0) * (height - 40) - 15} r="3" fill="var(--accent)" />
            </>
          )}
        </svg>
      </div>
      <div className="visual-footer">
        <div className="visual-metrics">
          <div className="visual-metric">
            <span className="visual-metric-label">Epoch</span>
            <span className="visual-metric-val">{epoch}/100</span>
          </div>
          <div className="visual-metric">
            <span className="visual-metric-label">Loss</span>
            <span className="visual-metric-val">{currentLoss.toFixed(4)}</span>
          </div>
          <div className="visual-metric">
            <span className="visual-metric-label">Val Acc</span>
            <span className="visual-metric-val">{currentAcc.toFixed(4)}</span>
          </div>
        </div>
        <button className="visual-btn" onClick={handleRestart}>
          {isRunning ? "RUNNING" : "RESTART RUN"}
        </button>
      </div>
    </div>
  );
}

function CaseStudy({ project }) {
  const [activeTab, setActiveTab] = useState("overview");
  const isVideoFactory = project.title === "AI Video Factory";
  const isEmotionDetection = project.title === "Emotion Detection System";
 
  return (
    <article className="case-study">
      <div className="case-study-visual">
        <div className="case-study-visual-header">
          <span style={{ font: "500 9px 'DM Mono', monospace", color: "var(--muted)" }}>PIPELINE_SCHEMA</span>
          <span style={{ font: "500 9px 'DM Mono', monospace", color: "var(--accent)" }}>ONLINE</span>
        </div>
        
        <div className="case-study-diagram">
          {isVideoFactory ? (
            <div style={{ width: "100%", padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text)" }}>
              <div style={{ border: "1px solid var(--line)", padding: "8px", background: "rgba(255,255,255,0.01)", textAlign: "center" }}>
                <span style={{ color: "var(--accent)" }}>INPUT:</span> Structured Scripts & Media Assets
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px dashed var(--accent)", padding: "10px", background: "rgba(0, 210, 255, 0.03)" }}>
                <strong style={{ display: "block", color: "var(--accent)", marginBottom: "4px", fontSize: "11px" }}>Python Orchestrator</strong>
                - Synthesize Audio Tracks<br/>
                - Sync Frame Coordinates & Captions<br/>
                - Process Media Timelines
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px solid var(--line)", padding: "8px", background: "rgba(255,255,255,0.01)", textAlign: "center" }}>
                <span style={{ color: "var(--accent)" }}>FFmpeg Node:</span> Render & Caption Burn-In
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px solid var(--accent)", padding: "8px", background: "rgba(0, 210, 255, 0.08)", textAlign: "center", fontWeight: "bold" }}>
                OUTPUT: Rendered Captioned Video
              </div>
            </div>
          ) : isEmotionDetection ? (
            <div style={{ width: "100%", padding: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <img 
                src="/emotion-detector-demo.png" 
                alt="Emotion Detection System" 
                style={{ 
                  maxWidth: "100%", 
                  maxHeight: "260px", 
                  objectFit: "contain",
                  border: "1px solid var(--line)",
                  borderRadius: "2px"
                }} 
              />
            </div>
          ) : (
            <div style={{ width: "100%", padding: "0 10px", display: "flex", flexDirection: "column", gap: "10px", fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--text)" }}>
              <div style={{ border: "1px solid var(--line)", padding: "8px", background: "rgba(255,255,255,0.01)", textAlign: "center" }}>
                <span style={{ color: "var(--accent)" }}>INPUT:</span> Audience Retention & Engagement Graph
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px dashed var(--accent)", padding: "10px", background: "rgba(0, 210, 255, 0.03)" }}>
                <strong style={{ display: "block", color: "var(--accent)", marginBottom: "4px", fontSize: "11px" }}>OpenAI LLM Parser</strong>
                - Extract behavioral patterns<br/>
                - Correlate retention peaks/valleys<br/>
                - Structure personalized Creative Strategy
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px solid var(--line)", padding: "8px", background: "rgba(255,255,255,0.01)", textAlign: "center" }}>
                <span style={{ color: "var(--accent)" }}>Razorpay Gateway:</span> Payment Verification
              </div>
              <div style={{ textAlign: "center", color: "var(--muted)", margin: "-4px 0" }}>↓</div>
              <div style={{ border: "1px solid var(--accent)", padding: "8px", background: "rgba(0, 210, 255, 0.08)", textAlign: "center", fontWeight: "bold" }}>
                OUTPUT: Interactive Strategy UI
              </div>
            </div>
          )}
        </div>
 
        <div className="case-study-visual-footer">
          <span style={{ font: "400 9px 'DM Mono', monospace", color: "var(--muted)" }}>ENG_FLOW_v1.0</span>
          <span style={{ font: "400 9px 'DM Mono', monospace", color: "var(--muted)" }}>STATUS: COMPILED</span>
        </div>
      </div>
      
      <div className="case-study-content">
        <div className="case-study-header">
          <span className="case-study-tag">{project.tag}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="case-study-desc">{project.description}</p>
        
        <div className="case-study-tabs">
          <button 
            className={`case-study-tab-btn ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            CHALLENGE
          </button>
          <button 
            className={`case-study-tab-btn ${activeTab === "approach" ? "active" : ""}`}
            onClick={() => setActiveTab("approach")}
          >
            APPROACH
          </button>
          <button 
            className={`case-study-tab-btn ${activeTab === "solution" ? "active" : ""}`}
            onClick={() => setActiveTab("solution")}
          >
            SOLUTION
          </button>
        </div>
 
        <div className="case-study-tab-pane">
          {activeTab === "overview" && (
            <div>
              {isVideoFactory ? (
                <p>Creating short-form video content manually requires intensive friction: writing structural scripts, recording audio assets, lining up captions frame-by-frame, and editing final files. The challenge was building an end-to-end automated pipeline to eliminate manual editing bottlenecks entirely.</p>
              ) : isEmotionDetection ? (
                <p>Analyzing facial cues to classify human emotions requires both robust deep learning models and clean user interfaces. The challenge was building a lightweight, local system that pre-processes facial inputs, executes real-time inference, and accurately maps facial structures to emotional categories.</p>
              ) : (
                <p>Audience retention is critical for digital creators, but understanding raw analytics dashboard signals can be difficult and leads to guesswork. The challenge was creating a client-facing intelligent coach that parses engagement files and outputs clear, personalized improvement guidelines.</p>
              )}
            </div>
          )}
          {activeTab === "approach" && (
            <div>
              {isVideoFactory ? (
                <p>Developed an automated pipeline using Python to orchestrate assets. Custom script logic processes dynamic captions alignment and times frames with audio signals. FFmpeg is leveraged in the background as the rendering core to layer audio and video streams together.</p>
              ) : isEmotionDetection ? (
                <p>Trained a Convolutional Neural Network (CNN) using TensorFlow and Keras on dataset benchmarks. Integrated OpenCV for image loading, preprocessing, and face detection cascades. Developed a desktop UI using Tkinter to allow users to upload images and review emotion predictions instantly.</p>
              ) : (
                <p>Designed a Next.js framework integrating OpenAI's API. The pipeline processes uploaded engagement graphs and passes behavioral prompts to LLM endpoints trained on optimal retention schemas. Handled payments and gatekeeping using a Razorpay payment flow.</p>
              )}
            </div>
          )}
          {activeTab === "solution" && (
            <div>
              {isVideoFactory ? (
                <p>A fully functioning automated toolchain. By providing structured scripts and assets, the pipeline outputs dynamic, rendered videos with embedded, synced captions, streamlining production workflows and reducing manual creation effort.</p>
              ) : isEmotionDetection ? (
                <p>A standalone desktop application. Upon image upload, the pipeline detects and isolates facial bounds, runs CNN inference, and provides visual confidence charts mapping the detected face to one of seven core emotional states.</p>
              ) : (
                <p>An interactive, payment-gated web tool. Creators purchase access, upload their retention data, and receive structured, prompt-generated video strategy recommendations directly inside their dashboard interface.</p>
              )}
            </div>
          )}
        </div>
 
        <div className="case-study-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
 
        <div className="case-study-links">
          <a className="case-study-link" href={project.href} target="_blank" rel="noreferrer">
            View Source Code <span>↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function CapabilitiesConsole() {
  const [activeConsoleTab, setActiveConsoleTab] = useState("clean");

  return (
    <div className="console-wrapper">
      <div className="console-menu">
        <button 
          className={`console-menu-btn ${activeConsoleTab === "clean" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("clean")}
        >
          <span>Data Cleaning</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "automate" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("automate")}
        >
          <span>Workflow Automation</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "sql" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("sql")}
        >
          <span>SQL Optimization</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "dashboard" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("dashboard")}
        >
          <span>Dashboards & Analytics</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "python" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("python")}
        >
          <span>Python Debugging</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "scrape" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("scrape")}
        >
          <span>Web Scraping & ETL</span>
        </button>
        <button 
          className={`console-menu-btn ${activeConsoleTab === "excel" ? "active" : ""}`}
          onClick={() => setActiveConsoleTab("excel")}
        >
          <span>Excel & Formulas</span>
        </button>
      </div>
      <div className="console-display">
        <div>
          <span className="section-kicker" style={{ marginBottom: 8 }}>CAPABILITY_NODE</span>
          <h3 style={{ margin: "0 0 12px 0", fontSize: 20 }}>{consoleContent[activeConsoleTab].title}</h3>
          <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
            {consoleContent[activeConsoleTab].desc}
          </p>
        </div>
        <div className="console-code-block">
          <pre style={{ margin: 0, overflowX: "auto" }}>
            <code>{consoleContent[activeConsoleTab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

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

          <HeroVisualizer />
        </div>
      </section>

      <div className="trust-strip">
        <div><strong>DATA</strong><span>Analysis · Insights · Visualization</span></div>
        <div><strong>ML</strong><span>Prediction · Forecasting · Modeling</span></div>
        <div><strong>AI</strong><span>Applications · Automation · APIs</span></div>
        <div><strong>BUILD</strong><span>Practical · Clear · Outcome-focused</span></div>
      </div>

      {/* CLIENT ENGAGEMENT & SUPPORT */}
      <section id="freelance-experience" className="section freelance-section">
        <div>
          <span className="section-kicker">CLIENT ENGAGEMENT</span>
          <h2>Proven operational support.</h2>
          <p className="section-desc" style={{ marginTop: 20 }}>
            Providing data-driven research, virtual assistance, and analytical engineering support to international clients. Currently expanding core freelance operations into dedicated machine learning and data science consulting.
          </p>
          <div style={{ marginTop: 32 }}>
            <a className="button secondary" href="https://www.fiverr.com/tafeem_amair" target="_blank" rel="noreferrer">
              View Fiverr Profile ↗
            </a>
          </div>
        </div>
        <div className="freelance-stats">
          <div className="stat-box">
            <div className="stat-num">4.9/5</div>
            <div className="stat-lbl">Fiverr rating across 10+ client reviews</div>
          </div>
          <div className="stat-box">
            <div className="stat-num">13+</div>
            <div className="stat-lbl">Completed contracts and international orders</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SERVICES</span>
            <h2>Technology that serves <em>the problem.</em></h2>
          </div>
          <p className="section-desc">
            I prioritize practical outcomes, structured implementation, and clear documentation over complex but unusable abstractions.
          </p>
        </div>
        <div className="capabilities-matrix">
          {services.map((service) => (
            <article className="capability-card" key={service.number}>
              <span className="capability-num">{service.number} // capability</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="capability-tags">
                {service.items.map((item) => (
                  <span className="tech-tag" key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* QUICK DATA & AUTOMATION SERVICES */}
      <section id="quick-data" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TECHNICAL CAPABILITIES CONSOLE</span>
            <h2>Need something solved quickly?</h2>
          </div>
          <p className="section-desc">
            Explore scripts and queries mapping standard operations. Tell me what your project requires — I'll confirm scope, pricing, and execution speed.
          </p>
        </div>
        <CapabilitiesConsole />
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">SELECTED WORK</span>
            <h2>Premium technical case studies.</h2>
          </div>
          <p className="section-desc">
            A review of functional code pipelines and system designs. <a href="https://github.com/tafeemamair" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", color: "var(--accent)" }}>View GitHub ↗</a>
          </p>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <CaseStudy project={project} key={project.title} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TESTIMONIALS</span>
            <h2>Client feedback.</h2>
          </div>
          <p className="section-desc">Reviews received from international business support and data-related operations.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <blockquote>"Excellent work done on time, nice communication."</blockquote>
            <cite>— Fiverr client, Research & Business Support</cite>
          </div>
          <div className="testimonial-card">
            <blockquote>"Exceeded expectations — professionalism, quick responsiveness, went above and beyond."</blockquote>
            <cite>— Fiverr client, Business Support Project</cite>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="section about-section">
        <div className="about-copy">
          <span className="section-kicker">ABOUT ME</span>
          <h2>Engineering discipline. <em>Data-driven thinking.</em></h2>
          <p>I'm Aisan Tafeem Amair, a Data Scientist, Machine Learning Engineer, and AI Solutions Freelancer.</p>
          <p>My background in Mechanical Engineering trained me to approach problems systematically — breaking complex problems down, understanding constraints, and working toward practical solutions. I later transitioned into Data Science, Machine Learning, and AI, combining that engineering discipline with modern data and AI technologies.</p>
          <p>Today, I work across data analysis, machine learning, AI applications, automation, and technical problem-solving — with a focus on building solutions that are useful, practical, and understandable.</p>
        </div>
        <div className="about-quote">
          <p>“Understand the problem. Work with the data. Build the solution. Deliver something useful.”</p>
          <strong>AISAN TAFEEM AMAIR</strong>
        </div>
      </section>

      {/* TECHNICAL FOCUS / TOOLKIT */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">TOOLKIT</span>
            <h2>Technologies & capabilities.</h2>
          </div>
          <p className="section-desc">Technologies, analytical libraries, and platforms utilized across active codebases.</p>
        </div>
        <div className="toolkit-grid">
          {technologies.map((tech) => (
            <div className="toolkit-item" key={tech}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">METHODOLOGY</span>
            <h2>From problem to deployment.</h2>
          </div>
          <p className="section-desc">A structured operational path designed to assure precision and transparency.</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "Understand", "Understand the problem, desired outcome, available data, and technical requirements."],
            ["02", "Analyze", "Examine the data, workflow, and constraints to identify the most practical approach."],
            ["03", "Build", "Develop the appropriate data, machine learning, AI, or automation solution."],
            ["04", "Deliver", "Provide a usable solution with clear documentation and practical next steps."]
          ].map(([n, title, text]) => (
            <div className="process-item" key={n}>
              <span className="process-step">{n} // phase</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="contact-inner">
          <span className="section-kicker">CONTACT</span>
          <h2>Have a project or task to solve?</h2>
          <p className="section-desc" style={{ maxWidth: 500, margin: "0 auto 32px" }}>
            Send over the details of your project requirements. I will review the technical scope, pricing, and estimated turnaround.
          </p>
          <a className="contact-email" href="mailto:aisantafeem@gmail.com">
            aisantafeem@gmail.com
          </a>
          <div className="socials">
            <a href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/aisan-tafeem-amair-721400147/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span className="footer-logo">AISAN<span>.</span></span>
        <p>© 2026 Aisan Tafeem Amair · Data Science & ML Engineering</p>
      </footer>
    </main>
  );
}
