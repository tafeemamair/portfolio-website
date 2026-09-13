"use client";

import React, { useState, useEffect, useRef } from "react";

// =========================================================
// REUSABLE SVG ICON SYSTEM (Zero external dependencies)
// =========================================================

const Icons = {
  Data: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  ),
  ML: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M9 6h6" />
      <path d="M9 18h6" />
      <path d="M6 9v6" />
      <path d="M18 9v6" />
      <path d="m8.5 8.5 7 7" />
    </svg>
  ),
  AI: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Automation: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="6" height="6" rx="1" />
      <rect x="16" y="7" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M8 10h8" />
      <path d="M5 13v4h4" />
      <path d="M19 13v4h-4" />
    </svg>
  ),
  Trigger: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Orchestration: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  Action: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Outcome: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  Copy: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  External: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  ),
  Star: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Quote: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    </svg>
  ),
  Verified: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Chart: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Build: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  Deliver: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  GitHub: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

// =========================================================
// AUTHENTIC TECHNOLOGY & TOOL LOGO ICONS (Pure SVG)
// =========================================================

const TechLogos = {
  python: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M11.9 2c-3.1 0-4.9.4-4.9 2.5v2.5h5v.8H5.8C3.7 7.8 2 9.5 2 12.6c0 3.2 1.4 4.4 3.8 4.4h1.7v-2.3c0-2.3 2-4.2 4.4-4.2h5.1c1.9 0 3-.9 3-2.6V4.5C20 2.4 18.2 2 11.9 2z" fill="rgba(0, 210, 255, 0.15)" stroke="var(--accent)" />
      <path d="M12.1 22c3.1 0 4.9-.4 4.9-2.5V17h-5v-.8h6.2c2.1 0 3.8-1.7 3.8-4.8 0-3.2-1.4-4.4-3.8-4.4h-1.7v2.3c0 2.3-2 4.2-4.4 4.2H7c-1.9 0-3 .9-3 2.6v3.4C4 21.6 5.8 22 12.1 22z" fill="rgba(255, 140, 0, 0.15)" stroke="var(--accent-orange)" />
      <circle cx="8.5" cy="4.5" r="0.75" fill="var(--accent)" />
      <circle cx="15.5" cy="19.5" r="0.75" fill="var(--accent-orange)" />
    </svg>
  ),
  sql: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="var(--accent)" fill="rgba(0,210,255,0.08)" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="var(--accent)" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="var(--accent)" strokeDasharray="3 3" />
    </svg>
  ),
  openai: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.5 10.5a5 5 0 0 0-4-4.5 5 5 0 0 0-8.5-2 5 5 0 0 0-4.5 4 5 5 0 0 0 .5 9.5 5 5 0 0 0 4 4.5 5 5 0 0 0 8.5 2 5 5 0 0 0 4.5-4 5 5 0 0 0-.5-9.5z" stroke="var(--accent)" fill="rgba(0,210,255,0.08)" />
      <path d="M12 8v8M8 12h8" stroke="var(--accent)" />
    </svg>
  ),
  pandas: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent)" />
      <line x1="3" y1="9" x2="21" y2="9" stroke="var(--accent)" />
      <line x1="9" y1="3" x2="9" y2="21" stroke="var(--accent)" />
      <line x1="15" y1="9" x2="15" y2="21" stroke="var(--accent)" />
    </svg>
  ),
  numpy: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="var(--accent)" />
    </svg>
  ),
  scikit: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="12" r="3" stroke="var(--accent)" />
      <circle cx="18" cy="6" r="3" stroke="var(--accent-orange)" />
      <circle cx="18" cy="18" r="3" stroke="var(--accent)" />
      <line x1="8.8" y1="10.6" x2="15.2" y2="7.4" stroke="var(--accent)" />
      <line x1="8.8" y1="13.4" x2="15.2" y2="16.6" stroke="var(--accent)" />
    </svg>
  ),
  tensorflow: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11L12 2z" stroke="var(--accent-orange)" fill="rgba(255,140,0,0.06)" />
      <path d="M12 6.5v11M8 8.75l8 4.5M16 8.75l-8 4.5" stroke="var(--accent-orange)" />
    </svg>
  ),
  opencv: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="7" r="4" stroke="var(--accent)" />
      <circle cx="7" cy="16" r="4" stroke="var(--accent-green)" />
      <circle cx="17" cy="16" r="4" stroke="var(--accent-orange)" />
    </svg>
  ),
  ffmpeg: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--accent)" />
      <polygon points="10 8 16 12 10 16 10 8" fill="rgba(0,210,255,0.2)" stroke="var(--accent)" />
    </svg>
  ),
  tableau: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M2 12h20M7 7h10v10H7z" stroke="var(--accent)" />
    </svg>
  ),
  excel: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent-green)" />
      <path d="m8 8 8 8M16 8l-8 8" stroke="var(--accent-green)" />
    </svg>
  ),
  nextjs: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" stroke="var(--text)" />
      <path d="M9 16V8l8 10V8" stroke="var(--text)" />
    </svg>
  ),
  react: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="var(--accent)" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="var(--accent)" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="var(--accent)" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="1.5" fill="var(--accent)" />
    </svg>
  ),
  javascript: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--accent)" fill="rgba(0,210,255,0.05)" />
      <path d="M10 17c0-1.5-.5-2-2-2M14 11v6c0 1 1 1 2 0" stroke="var(--accent)" strokeLinecap="round" />
    </svg>
  ),
  r: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" stroke="var(--accent)" />
      <path d="M9 8h4c1.5 0 2.5.8 2.5 2s-1 2-2.5 2H9v4M13 12l3 4" stroke="var(--accent)" />
    </svg>
  ),
  razorpay: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="m14 2-8 12h6l-2 8 10-14h-6z" stroke="var(--accent)" fill="rgba(0,210,255,0.1)" />
    </svg>
  ),
};

// =========================================================
// DATA ARRAYS (Preserved 100% with icons & structure)
// =========================================================

const services = [
  {
    number: "01",
    icon: Icons.AI,
    title: "AI Agents & Intelligent Systems",
    text: "Build AI systems that reason over structured context, use tools, validate results, and operate inside explicit business rules.",
    items: ["Agent workflows", "Tool use", "Guardrails", "Human approval"],
  },
  {
    number: "02",
    icon: Icons.Automation,
    title: "Workflow Automation & Orchestration",
    text: "Turn multi-step operational work into reliable workflows with clear state, recovery paths, and auditable execution.",
    items: ["API workflows", "Task orchestration", "Failure recovery", "Audit trails"],
  },
  {
    number: "03",
    icon: Icons.ML,
    title: "Machine Learning & Applied AI",
    text: "Apply machine learning and modern AI to real problems, from predictive models and computer vision to practical LLM applications.",
    items: ["Predictive models", "Computer vision", "LLM applications", "Model evaluation"],
  },
  {
    number: "04",
    icon: Icons.Data,
    title: "Data Analysis & Decision Systems",
    text: "Turn raw data into structured signals, insights, and decision-ready outputs that support better products and operations.",
    items: ["Data cleaning", "Exploratory analysis", "Analytics", "Dashboards"],
  },
];

const consoleContent = {
  clean: {
    title: "Data Cleaning & Profiling",
    desc: "Transform messy raw datasets into structured, analytical-ready formats, resolving missing records, date parsing, and type alignments.",
    file: "pipeline_cleaner.py",
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
  automate: {
    title: "Workflow Automation & Orchestration",
    desc: "Build resilient cron jobs and API pipelines connecting modern services with structured data routines.",
    file: "orchestrator_job.py",
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
  },
  sql: {
    title: "SQL Optimization & Queries",
    desc: "Develop and scale database queries to extract cohort, retention, and performance datasets from transactional relational warehouses.",
    file: "cohort_retention.sql",
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
    file: "dashboard_bridge.py",
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
    file: "profile_diagnostics.py",
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
    file: "etl_extractor.py",
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
  excel: {
    title: "Excel Formulas & Automation",
    desc: "Optimize spreadsheet workflows using advanced logical indexing, pivot generation, and custom VBA/Python automation to reduce human error.",
    file: "excel_automation.py",
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
  }
};

const projects = [
  {
    tag: "AUTONOMOUS AI AGENT",
    title: "Taf’s Pilot",
    description: "An autonomous AI video-production agent that plans work, uses typed tools, asks for human input when needed, inspects generated media, and self-corrects before delivery.",
    tech: ["Amazon Strands", "AWS Bedrock", "Pydantic", "FFmpeg", "FFprobe"],
    href: "https://github.com/tafeemamair/Tafs-Pilot",
    flow: ["Understand", "Plan", "Ask", "Produce", "Inspect", "Correct", "Deliver"],
    challenge: "Video production becomes difficult to scale when planning, asset generation, rendering, inspection, and correction are disconnected manual steps.",
    approach: "Built an agentic production loop around Amazon Strands with typed tools, structured state, human-in-the-loop checkpoints, media inspection, and deterministic rendering/QC layers.",
    solution: "A working autonomous production system that can move from a production brief to a rendered vertical video while retaining explicit control points and recovery behavior."
  },
  {
    tag: "BUSINESS WORKFLOW AGENT",
    title: "AI Operations Agent",
    description: "An agentic operations system that converts natural-language requests into planned, tool-driven workflows with deterministic validation, human approval, failure recovery, and persistent audit events.",
    tech: ["OpenAI Agents SDK", "FastAPI", "Pydantic", "SQLite", "Next.js"],
    href: "https://github.com/tafeemamair/ai-operations-agent",
    flow: ["Request", "Plan", "Tools", "Validate", "Approve", "Recover", "Audit"],
    challenge: "Business workflows need more than an LLM response: actions must have explicit state, validation, approval boundaries, and predictable failure handling.",
    approach: "Designed a structured workflow engine around the OpenAI Agents SDK, deterministic tool contracts, Pydantic state, bounded retries, approval gates, SQLite persistence, and an operations console.",
    solution: "A demonstrable onboarding workflow that researches a company, creates artifacts, pauses for human approval, recovers from transient failures, and records the execution history."
  },
  {
    tag: "TRUSTWORTHY AI AGENT",
    title: "Verified Shopping Assistant",
    description: "A tool-using shopping agent that separates LLM reasoning from deterministic offer verification so unverified mandatory fees cannot be presented as the cheapest confirmed deal.",
    tech: ["Google ADK", "Gemini", "Python", "Deterministic Policy", "34 Tests"],
    href: "https://github.com/tafeemamair/verified-shopping-assistant",
    flow: ["Search", "Verify", "Filter", "Rank", "Explain"],
    challenge: "The lowest listed price is not always the lowest verified price when mandatory charges or offer conditions are missing or uncertain.",
    approach: "Used Google ADK and Gemini for agent reasoning and tool selection, while keeping eligibility, fee verification, ranking, and rejection rules deterministic and testable.",
    solution: "A shopping assistant that can withhold an apparently cheaper offer when required charges are unverified, then explain why another verified offer is selected."
  },
  {
    tag: "AI APPLICATION",
    title: "Creator Retention Coach",
    description: "An AI product that turns audience-retention signals into practical creator guidance through an interactive web experience with payment-gated access.",
    tech: ["Next.js", "React", "OpenAI", "Razorpay"],
    href: "https://github.com/tafeemamair/creator-retention-coach",
    challenge: "Creators often have retention data without a clear path from audience signals to concrete content decisions.",
    approach: "Combined retention analysis, an OpenAI-powered recommendation layer, an interactive dashboard, and a verified payment flow with server-side entitlement checks.",
    solution: "A client-facing AI product that transforms uploaded retention information into structured strategy recommendations while keeping paid access behind server-side verification."
  },
  {
    tag: "DETERMINISTIC AUTOMATION",
    title: "AI Video Factory",
    description: "A deterministic media pipeline that turns structured scripts and assets into validated, captioned MP4 output using Python, FFmpeg, FFprobe, and explicit failure handling.",
    tech: ["Python", "FFmpeg", "FFprobe", "Automation", "9 Tests"],
    href: "https://github.com/tafeemamair/ai-video-factory",
    challenge: "Automated media generation still needs a reliable production layer for validation, asset handling, rendering, and output quality checks.",
    approach: "Built a deterministic Python orchestration layer with structured script validation, content-key asset handling, subtitle generation, FFmpeg rendering, and FFprobe duration validation.",
    solution: "A reproducible local media pipeline that converts structured project inputs into a final MP4 and fails explicitly when required production conditions are not met."
  },
  {
    tag: "DEEP LEARNING / COMPUTER VISION",
    title: "Emotion Detection System",
    description: "A deep learning facial-emotion application using a custom CNN, OpenCV preprocessing, and a desktop interface to classify seven emotion categories.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    href: "https://github.com/tafeemamair/Emotion_Detection",
    challenge: "Facial emotion classification requires a complete path from image input and face detection through preprocessing, model inference, and understandable output.",
    approach: "Trained a CNN with TensorFlow/Keras and integrated OpenCV for image handling and face detection, with a lightweight Tkinter interface for local inference.",
    solution: "A standalone computer-vision application that detects facial input and maps it to one of seven trained emotion classes."
  },
];

const toolkitData = [
  { name: "Python", category: "Core Language", logo: "python", desc: "Automation, pipelines & AI scripting" },
  { name: "SQL", category: "Database & Queries", logo: "sql", desc: "Relational data extraction & cohorts" },
  { name: "OpenAI Agents SDK", category: "Agent Framework", logo: "openai", desc: "Tool use, structured runs & agent workflows" },
  { name: "Google ADK", category: "Agent Framework", logo: "openai", desc: "Tool-using agent orchestration" },
  { name: "Amazon Strands", category: "Agent Framework", logo: "openai", desc: "Agentic production workflows" },
  { name: "Pandas", category: "Data Processing", logo: "pandas", desc: "Dataframe transformation & profiling" },
  { name: "NumPy", category: "Numerical Computing", logo: "numpy", desc: "Array operations & matrix algebra" },
  { name: "Scikit-learn", category: "Machine Learning", logo: "scikit", desc: "Predictive & classification models" },
  { name: "TensorFlow", category: "Deep Learning", logo: "tensorflow", desc: "CNN training & inference" },
  { name: "OpenCV", category: "Computer Vision", logo: "opencv", desc: "Image preprocessing & face cascades" },
  { name: "FFmpeg", category: "Media Processing", logo: "ffmpeg", desc: "Automated video & audio rendering" },
  { name: "Tableau", category: "BI & Dashboards", logo: "tableau", desc: "Visual analytics & KPI tracking" },
  { name: "Excel", category: "Spreadsheets", logo: "excel", desc: "Logical formulas & automated reporting" },
  { name: "Next.js", category: "Full-Stack App", logo: "nextjs", desc: "Production React web framework" },
  { name: "React", category: "UI Engineering", logo: "react", desc: "Interactive frontend state" },
  { name: "JavaScript", category: "Web Core", logo: "javascript", desc: "Dynamic client scripting" },
  { name: "R", category: "Statistical Analysis", logo: "r", desc: "Exploratory & hypothesis modeling" },
  { name: "Razorpay", category: "Payments / Webhooks", logo: "razorpay", desc: "Payment flow & webhook verification" },
  { name: "FastAPI", category: "Backend / APIs", logo: "python", desc: "Typed API endpoints & service workflows" },
  { name: "Pydantic", category: "Structured State", logo: "python", desc: "Validation, schemas & workflow state" },
  { name: "SQLite", category: "Persistence", logo: "sql", desc: "Local workflow state & audit events" },
];

// =========================================================
// HERO VISUALIZER (Real-time loss/accuracy training monitor)
// =========================================================

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
          <line x1="15" y1="15" x2="265" y2="15" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="15" y1="75" x2="265" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="15" y1="135" x2="265" y2="135" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" />
          
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

// =========================================================
// AUTOMATION WORKFLOW BLUEPRINT COMPONENT
// =========================================================

function AutomationWorkflowVisual() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "Trigger / Intake",
      sub: "Webhooks, API events & schedules",
      icon: Icons.Trigger,
      status: "LISTENING",
      tags: ["HTTP Webhook", "Cron Schedule", "Payload Intake"],
      details: "Captures incoming event triggers, scheduled execution batches, or live customer signals."
    },
    {
      num: "02",
      name: "AI Reasoning",
      sub: "LLM parsing & extraction",
      icon: Icons.AI,
      status: "PROCESSING",
      tags: ["OpenAI LLM", "Prompt Logic", "Entity Extraction"],
      details: "Analyzes unstructured text/signals, correlates data points, and generates contextual decisions."
    },
    {
      num: "03",
      name: "Orchestration",
      sub: "Python rules & ETL engine",
      icon: Icons.Orchestration,
      status: "EXECUTING",
      tags: ["Python Controller", "Data Validation", "Error Handling"],
      details: "Transforms records, enforces business constraints, coordinates dependencies, and handles retries."
    },
    {
      num: "04",
      name: "Automated Action",
      sub: "API dispatch & media render",
      icon: Icons.Action,
      status: "SYNCING",
      tags: ["FFmpeg Core", "Database Sync", "External APIs"],
      details: "Renders visual assets, commits records to database warehouses, and triggers external services."
    },
    {
      num: "05",
      name: "Delivered Result",
      sub: "Reports, outputs & alerts",
      icon: Icons.Outcome,
      status: "VERIFIED",
      tags: ["Live Dashboard", "Rendered MP4", "Client Delivery"],
      details: "Delivers the validated output after explicit workflow checks and control points."
    }
  ];

  return (
    <div className="automation-blueprint">
      <div className="automation-blueprint-header">
        <div className="automation-blueprint-title">
          <Icons.Automation />
          <span>WORKFLOW_ARCHITECTURE // END-TO-END AUTOMATION SYSTEM</span>
        </div>
        <span className="automation-badge">SYSTEM PIPELINE</span>
      </div>

      <div className="workflow-track">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          const isActive = selectedStep === idx;
          return (
            <div 
              key={step.num}
              className={`workflow-step-card ${isActive ? "active" : ""}`}
              onClick={() => setSelectedStep(idx)}
            >
              <div className="workflow-step-num">
                <span>{step.num} // STAGE</span>
                {isActive && <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />}
              </div>
              <div className="workflow-step-icon">
                <IconComponent />
              </div>
              <div className="workflow-step-name">{step.name}</div>
              <p className="workflow-step-sub">{step.sub}</p>
              {idx < steps.length - 1 && (
                <div className="workflow-step-connector">→</div>
              )}
            </div>
          );
        })}
      </div>

      <div className="workflow-inspection">
        <div className="workflow-inspection-left">
          <span className="workflow-inspection-status">{steps[selectedStep].status}</span>
          <span>{steps[selectedStep].details}</span>
        </div>
        <div className="workflow-inspection-tags">
          {steps[selectedStep].tags.map(tag => (
            <span key={tag} className="workflow-inspection-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================
// CASE STUDY COMPONENT (With visual architecture flows)
// =========================================================

function CaseStudy({ project }) {
  const [activeTab, setActiveTab] = useState("overview");
  const isVideoFactory = project.title === "AI Video Factory";
  const isEmotionDetection = project.title === "Emotion Detection System";
  const hasAgentFlow = Array.isArray(project.flow);
 
  return (
    <article className="case-study">
      <div className="case-study-visual">
        <div className="case-study-visual-header">
          <span style={{ font: "500 9px 'DM Mono', monospace", color: "var(--muted)", display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
            PIPELINE_SCHEMA
          </span>
          <span style={{ font: "500 9px 'DM Mono', monospace", color: "var(--accent)" }}>ONLINE</span>
        </div>
        
        <div className="case-study-diagram">
          {hasAgentFlow && !isVideoFactory ? (
            <div className="pipeline-flow">
              {project.flow.map((step, index) => (
                <React.Fragment key={step}>
                  <div className={`pipeline-node ${index === 1 ? "primary" : index === project.flow.length - 1 ? "output" : ""}`}>
                    <div className="pipeline-node-header">
                      <span className="pipeline-node-role">{String(index + 1).padStart(2, "0")} // SYSTEM STEP</span>
                      <span className="pipeline-node-badge">{index === 1 ? "REASONING" : index === project.flow.length - 1 ? "DELIVERY" : "CONTROLLED"}</span>
                    </div>
                    <div className="pipeline-node-title">{step}</div>
                  </div>
                  {index < project.flow.length - 1 && <div className="pipeline-arrow">↓</div>}
                </React.Fragment>
              ))}
            </div>
          ) : isVideoFactory ? (
            <div className="pipeline-flow">
              <div className="pipeline-node">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">01 // INTAKE</span>
                  <span className="pipeline-node-badge">JSON / Assets</span>
                </div>
                <div className="pipeline-node-title">Structured Scripts & Media Bundles</div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node primary">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">02 // ORCHESTRATOR</span>
                  <span className="pipeline-node-badge">Python Core</span>
                </div>
                <div className="pipeline-node-title">Asset Timeline & Audio Synthesizer</div>
                <div className="pipeline-node-items">
                  • Sync frame coordinates & captions<br/>
                  • Map audio waveforms to clip durations
                </div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">03 // RENDER ENGINE</span>
                  <span className="pipeline-node-badge">FFmpeg Node</span>
                </div>
                <div className="pipeline-node-title">Multi-Track Video & Subtitle Burn-In</div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node output">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role" style={{ color: "var(--accent)" }}>04 // OUTPUT</span>
                  <span className="pipeline-node-badge" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>READY</span>
                </div>
                <div className="pipeline-node-title" style={{ color: "var(--accent)" }}>Rendered Captioned Video (MP4)</div>
              </div>
            </div>
          ) : isEmotionDetection ? (
            <div className="cv-inspector-frame">
              <div className="cv-inspector-preview">
                <img 
                  src="/emotion-detector-demo.png" 
                  alt="Emotion Detection System Interface" 
                  className="cv-inspector-img"
                />
              </div>
              <div className="cv-inspector-metrics">
                <div className="cv-metric-chip">
                  <span>Backbone</span>
                  <strong>Custom CNN</strong>
                </div>
                <div className="cv-metric-chip">
                  <span>Classes</span>
                  <strong>7 Emotions</strong>
                </div>
                <div className="cv-metric-chip">
                  <span>Inference</span>
                  <strong>OpenCV + Keras</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="pipeline-flow">
              <div className="pipeline-node">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">01 // INTAKE</span>
                  <span className="pipeline-node-badge">Time-Series</span>
                </div>
                <div className="pipeline-node-title">Audience Retention & Drop-Off Signals</div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node primary">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">02 // AI ENGINE</span>
                  <span className="pipeline-node-badge">OpenAI LLM</span>
                </div>
                <div className="pipeline-node-title">Behavioral Pattern Parser</div>
                <div className="pipeline-node-items">
                  • Correlate retention peaks & valleys<br/>
                  • Formulate personalized strategy recommendations
                </div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role">03 // GATEWAY</span>
                  <span className="pipeline-node-badge">Razorpay</span>
                </div>
                <div className="pipeline-node-title">Verified Access & Webhook Validation</div>
              </div>

              <div className="pipeline-arrow">↓</div>

              <div className="pipeline-node output">
                <div className="pipeline-node-header">
                  <span className="pipeline-node-role" style={{ color: "var(--accent)" }}>04 // INTERFACE</span>
                  <span className="pipeline-node-badge" style={{ color: "var(--accent)", borderColor: "var(--accent)" }}>DELIVERED</span>
                </div>
                <div className="pipeline-node-title" style={{ color: "var(--accent)" }}>Interactive Strategy Dashboard (Next.js)</div>
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
              {project.challenge ? (
                <p>{project.challenge}</p>
              ) : isVideoFactory ? (
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
              {project.approach ? (
                <p>{project.approach}</p>
              ) : isVideoFactory ? (
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
              {project.solution ? (
                <p>{project.solution}</p>
              ) : isVideoFactory ? (
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
            <span className="case-study-tech-pill" key={t}>{t}</span>
          ))}
        </div>

        <div className="case-study-links">
          <a className="case-study-link" href={project.href} target="_blank" rel="noreferrer">
            View Source Code <Icons.External />
          </a>
        </div>
      </div>
    </article>
  );
}

// =========================================================
// CAPABILITIES CONSOLE COMPONENT
// =========================================================

function CapabilitiesConsole() {
  const [activeConsoleTab, setActiveConsoleTab] = useState("clean");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(consoleContent[activeConsoleTab].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
          <span className="section-kicker">CAPABILITY_NODE</span>
          <h3 style={{ margin: "0 0 12px 0", fontSize: 20 }}>{consoleContent[activeConsoleTab].title}</h3>
          <p style={{ color: "var(--muted)", fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>
            {consoleContent[activeConsoleTab].desc}
          </p>
        </div>

        <div>
          <div className="console-terminal-bar">
            <div className="console-terminal-dots">
              <span style={{ background: "#ff5f56" }} />
              <span style={{ background: "#ffbd2e" }} />
              <span style={{ background: "#27c93f" }} />
            </div>
            <span className="console-terminal-file">
              {consoleContent[activeConsoleTab].file}
            </span>
            <button className={`copy-btn ${copied ? "copied" : ""}`} onClick={handleCopy}>
              {copied ? (
                <>
                  <Icons.Check />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Icons.Copy />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
          <pre className="console-code-block">
            <code>{consoleContent[activeConsoleTab].code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

// =========================================================
// MAIN PAGE COMPONENT
// =========================================================

export default function Home() {
  return (
    <main>
      <div className="ambient-glow glow-hero" />
      <div className="ambient-glow glow-automation" />

      {/* NAVIGATION */}
      <nav className="nav">
        <a className="brand" href="#home">AISAN<span>.</span></a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-cta" href="#contact">
          <span>Work With Me</span>
          <Icons.External />
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot" /> AVAILABLE FOR PROJECTS</div>
            <h1>Building <em>AI agents, automation, and intelligent systems.</em></h1>
            <p className="hero-text">
              I build practical AI systems that reason, use tools, automate workflows, and turn data into decisions — with machine learning as the foundation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                <span>Work With Me</span>
                <Icons.External />
              </a>
              <a className="button secondary" href="#work">
                <span>View My Work</span>
                <span>↓</span>
              </a>
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

      {/* TRUST STRIP WITH PILLAR ICONS */}
      <div className="trust-strip">
        <div>
          <div className="trust-pillar-header">
            <span className="trust-pillar-icon"><Icons.Data /></span>
            <strong>DATA</strong>
          </div>
          <span>Analysis · Insights · Visualization</span>
        </div>
        <div>
          <div className="trust-pillar-header">
            <span className="trust-pillar-icon"><Icons.ML /></span>
            <strong>ML</strong>
          </div>
          <span>Prediction · Forecasting · Modeling</span>
        </div>
        <div>
          <div className="trust-pillar-header">
            <span className="trust-pillar-icon"><Icons.AI /></span>
            <strong>AGENTS</strong>
          </div>
          <span>Reasoning · Tools · Guardrails</span>
        </div>
        <div>
          <div className="trust-pillar-header">
            <span className="trust-pillar-icon"><Icons.Automation /></span>
            <strong>BUILD</strong>
          </div>
          <span>APIs · Workflows · Production</span>
        </div>
      </div>

      {/* CLIENT ENGAGEMENT & SUPPORT */}
      <section id="freelance-experience" className="section freelance-section">
        <div>
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            CLIENT ENGAGEMENT
          </span>
          <h2>Available for practical AI work.</h2>
          <p className="section-desc" style={{ marginTop: 20 }}>
            Alongside building AI systems and data products, I remain available for focused client work across AI, automation, data analysis, and technical problem-solving.
          </p>
          <div style={{ marginTop: 32 }}>
            <a className="button secondary" href="https://www.fiverr.com/tafeem_amair" target="_blank" rel="noreferrer">
              <span>View Fiverr Profile</span>
              <Icons.External />
            </a>
          </div>
        </div>
        <div className="freelance-stats">
          <div className="stat-box">
            <div className="stat-box-icon"><Icons.Star /></div>
            <div className="stat-num">4.9/5</div>
            <div className="rating-stars">
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
              <Icons.Star />
            </div>
            <div className="stat-lbl">Fiverr rating across 10+ client reviews</div>
          </div>
          <div className="stat-box">
            <div className="stat-box-icon"><Icons.Action /></div>
            <div className="stat-num">13+</div>
            <div className="stat-lbl" style={{ marginTop: 12 }}>Completed contracts and international orders</div>
          </div>
        </div>
      </section>

      {/* SERVICES WITH STRUCTURED CARDS & WORKFLOW VISUAL */}
      <section id="services" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              SERVICES
            </span>
            <h2>Systems built around <em>the problem.</em></h2>
          </div>
          <p className="section-desc">
            I focus on useful systems: explicit workflows, reliable tool use, deterministic validation, and clear delivery rather than complexity for its own sake.
          </p>
        </div>
        
        <div className="capabilities-matrix">
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <article className="capability-card" key={service.number}>
                <div>
                  <div className="capability-card-top">
                    <span className="capability-num">{service.number} // CAPABILITY</span>
                    <div className="capability-icon-pill">
                      <ServiceIcon />
                    </div>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className="capability-tags">
                  {service.items.map((item) => (
                    <span className="tech-tag" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* AUTOMATION ARCHITECTURE BLUEPRINT */}
        <AutomationWorkflowVisual />
      </section>

      {/* QUICK DATA & CAPABILITIES CONSOLE */}
      <section id="quick-data" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              TECHNICAL CAPABILITIES CONSOLE
            </span>
            <h2>Technical capabilities, in practice.</h2>
          </div>
          <p className="section-desc">
            Explore representative code patterns across data, automation, and AI engineering. The strongest evidence lives in the production-oriented projects below.
          </p>
        </div>
        <CapabilitiesConsole />
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              SELECTED WORK
            </span>
            <h2>Systems I’ve actually built.</h2>
          </div>
          <p className="section-desc">
            A progression from machine learning and deterministic automation to tool-using agents and production-oriented intelligent systems.{" "}
            <a href="https://github.com/tafeemamair" target="_blank" rel="noreferrer" style={{ textDecoration: "underline", color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 4 }}>
              View GitHub <Icons.External />
            </a>
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
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              TESTIMONIALS
            </span>
            <h2>Client feedback.</h2>
          </div>
          <p className="section-desc">Reviews received from international business support and data-related operations.</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="verified-tag">
                <Icons.Verified />
                <span>VERIFIED ORDER</span>
              </span>
              <div className="rating-stars">
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
              </div>
            </div>
            <blockquote>"Excellent work done on time, nice communication."</blockquote>
            <cite>— Fiverr client, Research & Business Support</cite>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="verified-tag">
                <Icons.Verified />
                <span>VERIFIED ORDER</span>
              </span>
              <div className="rating-stars">
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
                <Icons.Star />
              </div>
            </div>
            <blockquote>"Exceeded expectations — professionalism, quick responsiveness, went above and beyond."</blockquote>
            <cite>— Fiverr client, Business Support Project</cite>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="section about-section">
        <div className="about-copy">
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            ABOUT ME
          </span>
          <h2>Engineering discipline. <em>AI systems thinking.</em></h2>
          <p>I'm Aisan Tafeem Amair, an AI & ML Engineer focused on AI agents, automation, and intelligent systems.</p>
          <p>My background in Mechanical Engineering trained me to approach problems systematically — breaking complex problems down, understanding constraints, and working toward practical solutions. I later transitioned into Data Science, Machine Learning, and AI, combining that engineering discipline with modern data and AI technologies.</p>
          <p>Today, I work across data analysis, machine learning, AI applications, agentic workflows, automation, and technical problem-solving — with a focus on building systems that are useful, testable, and understandable.</p>
        </div>
        <div className="about-quote">
          <Icons.Quote />
          <p style={{ marginTop: 12 }}>“Understand the problem. Work with the data. Build the solution. Deliver something useful.”</p>
          <strong>AISAN TAFEEM AMAIR</strong>
        </div>
      </section>

      {/* TECHNICAL FOCUS / TOOLKIT WITH AUTHENTIC LOGOS */}
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              TOOLKIT
            </span>
            <h2>Technologies & capabilities.</h2>
          </div>
          <p className="section-desc">Technologies and frameworks demonstrated across the current portfolio codebases — from ML foundations to agentic production systems.</p>
        </div>
        <div className="toolkit-grid">
          {toolkitData.map((tool) => {
            const LogoComponent = TechLogos[tool.logo] || Icons.Build;
            return (
              <div className="toolkit-card" key={tool.name}>
                <div>
                  <div className="toolkit-card-top">
                    <div className="toolkit-icon-wrap">
                      <LogoComponent />
                    </div>
                    <span className="toolkit-badge">{tool.category}</span>
                  </div>
                  <div className="toolkit-name">{tool.name}</div>
                </div>
                <p className="toolkit-desc">{tool.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              <span className="section-kicker-dot" />
              METHODOLOGY
            </span>
            <h2>From problem to reliable system.</h2>
          </div>
          <p className="section-desc">A practical build path that keeps reasoning flexible while making validation, control, and delivery explicit.</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "Understand", "Understand the problem, desired outcome, available data, and technical requirements.", Icons.Search],
            ["02", "Analyze", "Examine the data, workflow, and constraints to identify the most practical approach.", Icons.Chart],
            ["03", "Build", "Implement the right data, machine learning, AI agent, or automation architecture.", Icons.Build],
            ["04", "Validate", "Test outputs, enforce deterministic rules, and handle failure paths before delivery.", Icons.Chart],
            ["05", "Deliver", "Provide a usable system with clear boundaries, documentation, and practical next steps.", Icons.Deliver]
          ].map(([n, title, text, StepIcon]) => (
            <div className="process-item" key={n}>
              <div>
                <div className="process-item-header">
                  <span className="process-step">{n} // PHASE</span>
                  <div className="process-icon-wrap">
                    <StepIcon />
                  </div>
                </div>
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
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            CONTACT
          </span>
          <h2>Have a project or task to solve?</h2>
          <p className="section-desc" style={{ maxWidth: 500, margin: "0 auto 32px" }}>
            Send over the details of your project requirements. I will review the technical scope, pricing, and estimated turnaround.
          </p>
          <a className="contact-email" href="mailto:aisantafeem@gmail.com">
            <Icons.Mail />
            <span>aisantafeem@gmail.com</span>
          </a>
          <div className="socials">
            <a href="https://github.com/tafeemamair" target="_blank" rel="noreferrer">
              <Icons.GitHub />
              <span>GitHub</span>
              <Icons.External />
            </a>
            <a href="https://www.linkedin.com/in/aisan-tafeem-amair-721400147/" target="_blank" rel="noreferrer">
              <Icons.LinkedIn />
              <span>LinkedIn</span>
              <Icons.External />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">AISAN<span>.</span></span>
        <p>© 2026 Aisan Tafeem Amair · AI & ML Engineering</p>
      </footer>
    </main>
  );
}
