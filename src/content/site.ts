// Single source of truth for portfolio copy.
// Career facts come from the approved CV (Kevin_Gitonga_CV_11102026.pdf).
// FinFlow facts come from the public repository README, docs and code.

export const profile = {
  name: "Kevin Gitonga",
  role: "Data Engineering & Analytics Leader",
  headline: "Building data platforms that deliver measurable business impact.",
  intro:
    "I have spent over nine years designing and building data platforms across fintech, enterprise data warehousing and BI. I combine hands-on engineering with cloud architecture and engineering leadership: from founding data engineer to leading teams of up to seven, and most recently Head of Data.",
  location: "Nairobi, Kenya",
  email: "gitanje@gmail.com",
  github: "https://github.com/Kevin-Gitonga",
  linkedin: "https://www.linkedin.com/in/kevin-gitonga-960418b7/",
  cv: "/Kevin-Gitonga-CV.pdf",
  photo: "/images/kevin-gitonga.webp",
} as const;

export const highlights = [
  { value: "9+", label: "years in data engineering, BI and analytics" },
  { value: "10", label: "countries supported by a platform I built" },
  { value: "7", label: "engineers led at peak" },
  { value: "~93%", label: "faster month-end reconciliation" },
] as const;

export const about = {
  paragraphs: [
    "I joined AZA Finance as its founding data engineer, when reporting was largely manual. I built the central PostgreSQL warehouse and the pipelines feeding it from scratch, and that platform went on to support operations across 10 countries.",
    "As the platform grew, so did the team. I progressed from Data Engineer to Senior Data Engineer to Data Engineering Technical Lead, growing the function from one engineer to up to seven and introducing the monitoring, CI/CD, code review and maintenance standards that kept it reliable.",
    "I then worked as an independent data engineer at dLocal, contributing to the production implementation of a local analytics platform on AWS Outposts for Egypt, built to meet data-residency requirements.",
    "Most recently, as Head of Data at Opareta, I led data engineering, BI and analytics: setting technical strategy, shaping architecture and developing the team.",
  ],
  pillars: [
    {
      title: "Hands-on engineering",
      body: "I still design schemas, write pipelines and debug production workloads, so architecture decisions stay grounded in what it takes to build and run them.",
    },
    {
      title: "Platform architecture",
      body: "Warehouses, lakehouse-style query layers and cloud infrastructure on AWS and GCP, designed for auditability, cost and data-residency constraints.",
    },
    {
      title: "Engineering leadership",
      body: "Hiring, mentoring and setting standards, and aligning data work with executive, product and engineering priorities.",
    },
  ],
} as const;

export const finflow = {
  title: "FinFlow — Financial Data Platform",
  tagline:
    "An open-source reconciliation platform that matches payment transactions against processor settlement reports, tracks every discrepancy as an auditable exception, and reports through a read-only BI layer.",
  disclaimer:
    "Independent portfolio project. All data is synthetic and generated in the repository; it is not a commercial production deployment.",
  repo: "https://github.com/Kevin-Gitonga/finflow-data-platform",
  architectureDoc:
    "https://github.com/Kevin-Gitonga/finflow-data-platform/blob/main/docs/architecture.md",
  adrs: "https://github.com/Kevin-Gitonga/finflow-data-platform/tree/main/docs/adr",
  image: "/images/finflow-dashboard.webp",
  metrics: [
    { value: "114", label: "automated tests in CI" },
    { value: "12", label: "reconciliation statuses with explicit precedence" },
    { value: "0", label: "mismatches against ground truth across 1,015 items" },
    { value: "8", label: "versioned reporting views" },
  ],
  capabilities: [
    {
      title: "Atomic, idempotent ingestion",
      body: "Whole-file validation, a single-transaction COPY into staging and INSERT … ON CONFLICT DO NOTHING. Re-runs insert nothing, and every run is audited with the file's SHA-256.",
    },
    {
      title: "Set-based SQL reconciliation",
      body: "Exact key matching, a same-currency rule with no silent FX, ±0.01 tolerance and a 72-hour window, scoped by a required as_of timestamp so every result is reproducible.",
    },
    {
      title: "Exception lifecycle",
      body: "Discrepancies become persistent exceptions that open, reclassify and resolve across runs, with ageing measured on logical reporting dates rather than the wall clock.",
    },
    {
      title: "Immutable audit trail",
      body: "Database triggers reject UPDATE and DELETE on reconciliation results and lifecycle events. Conflicting re-sent records are diffed column by column and never applied.",
    },
    {
      title: "Least-privilege reporting",
      body: "Metrics live in tested SQL views in a dedicated reporting schema, exposed to a Metabase dashboard through a read-only role.",
    },
    {
      title: "Engineering quality",
      body: "Ruff, pytest and a GitHub Actions smoke test that runs the documented workflow on PostgreSQL 16 and requires zero mismatches. Decisions are recorded as ADRs.",
    },
  ],
  stack: [
    "Python 3.11+",
    "PostgreSQL 16",
    "SQL",
    "psycopg 3",
    "Docker Compose",
    "Metabase",
    "pytest",
    "Ruff",
    "GitHub Actions",
  ],
  architecture: [
    { label: "Synthetic sources", detail: "Seeded ledger, settlement and ground-truth files" },
    { label: "Python ingestion", detail: "Validate → COPY → idempotent insert → conflict diff" },
    { label: "raw · audit", detail: "Append-only source tables and ingestion lineage" },
    { label: "recon", detail: "Immutable run snapshots and exception lifecycle" },
    { label: "reporting", detail: "Versioned KPI and exception views" },
    { label: "Metabase", detail: "Dashboard via a read-only role" },
  ],
} as const;

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  summary: string;
  points: string[];
  outcome: { value: string; label: string };
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "enterprise-platform",
    title: "Enterprise Data Platform Transformation",
    context: "Cross-border payments fintech · 10 countries",
    summary:
      "Built a central data platform from scratch as the founding data engineer, replacing predominantly manual reporting and automating month-end financial reconciliation.",
    points: [
      "Designed and built the central PostgreSQL warehouse and its pipelines, supporting operations across 10 countries.",
      "Integrated SAP and Salesforce to automate month-end financial reconciliation end to end.",
      "Replaced manual reporting with AWS DMS, AWS Glue and Synatic integrations, expanding timely data access across departments.",
      "Introduced monitoring, CI/CD, code review and ETL maintenance standards as the team grew from one engineer to up to seven.",
    ],
    outcome: {
      value: "14 days → 1 day",
      label:
        "Reconciliation turnaround cut from up to 14 days into the following month to completion on day one.",
    },
    tags: ["PostgreSQL", "AWS DMS", "AWS Glue", "Synatic", "SAP", "Salesforce"],
  },
  {
    id: "localised-analytics",
    title: "Localised Analytics Platform",
    context: "Global payments platform · new-market launch",
    summary:
      "Contributed to the production implementation of an in-country analytics platform for a new market, designed to meet regulatory data-residency requirements.",
    points: [
      "Helped establish the market's initial local analytics capability, working with application and DataOps teams.",
      "Contributed to the production deployment of a data platform on AWS Outposts, with Parquet on S3, AWS Glue Data Catalog and Trino.",
      "Planned ingestion covering approximately 100 application tables, and built pipelines with Python, SQL, Airflow, AWS DMS, Fivetran and Athena.",
      "Deployed and troubleshot data workloads on Kubernetes (Amazon EKS) with ArgoCD, including IAM, connectivity and persistent storage.",
    ],
    outcome: {
      value: "In production",
      label: "Successfully implemented in production with data kept in-country.",
    },
    tags: ["AWS Outposts", "Parquet", "Glue Data Catalog", "Trino", "Kubernetes", "Airflow"],
  },
];

export type Role = {
  company: string;
  title: string;
  titles?: { title: string; period: string }[];
  period: string;
  focus: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: "Opareta",
    title: "Head of Data",
    period: "Aug 2026 – Oct 2026",
    focus: "Leadership",
    points: [
      "Led the data function across engineering, business intelligence and analytics, owning technical strategy, architecture and delivery priorities.",
      "Managed and developed a three-person data team, overseeing recruitment, onboarding, mentorship and engineering standards.",
      "Partnered with executive, Product and Engineering leadership to align data initiatives with business priorities and strengthen critical reporting.",
      "Directed the optimisation of Zambia's site-level operational reporting, with dashboard chart load times of approximately eight seconds during validation.",
      "Defined a data warehouse modernisation strategy, evaluating architectures and developing a proof-of-concept roadmap.",
    ],
  },
  {
    company: "dLocal",
    title: "Data Engineer · Independent Contractor",
    period: "Jan 2026 – Aug 2026",
    focus: "Cloud data platform",
    points: [
      "Helped establish Egypt's initial local analytics capability as part of a new-market implementation designed to meet data-residency requirements.",
      "Contributed to the production deployment of the AWS Outposts data platform with Parquet on S3, AWS Glue Data Catalog and Trino; ingestion planning covered approximately 100 application tables.",
      "Developed and supported end-to-end pipelines using Python, SQL, Airflow, AWS DMS, Fivetran, Athena and S3.",
      "Deployed and troubleshot data workloads on Amazon EKS using Kubernetes and ArgoCD, including IAM, connectivity and persistent storage.",
    ],
  },
  {
    company: "AZA Finance",
    title: "Data Engineering Technical Lead",
    titles: [
      { title: "Data Engineering Technical Lead", period: "2023 – 2025" },
      { title: "Senior Data Engineer", period: "2020 – 2023" },
      { title: "Data Engineer", period: "2019 – 2020" },
    ],
    period: "Oct 2019 – Dec 2025",
    focus: "Platform build & technical leadership",
    points: [
      "Automated month-end financial reconciliation end to end through SAP and Salesforce integrations, cutting the close cycle from up to 14 days to day one — approximately 93% faster.",
      "Established the data engineering function as its founding engineer and built the central PostgreSQL warehouse and pipelines from scratch, supporting operations across 10 countries.",
      "Replaced predominantly manual reporting with AWS DMS, AWS Glue and Synatic integrations, expanding timely data access across departments.",
      "Grew and mentored the engineering team from one to up to seven people.",
      "Introduced monitoring, CI/CD, code review and ETL maintenance standards to improve consistency and operational reliability.",
    ],
  },
];

export const earlierExperience = [
  { company: "Kenya Revenue Authority", title: "ETL / Business Intelligence Developer", period: "2018 – 2019" },
  { company: "Hasbah Kenya Limited", title: "BI Developer & IT Projects Lead", period: "2017 – 2018" },
] as const;

export const skills = [
  {
    category: "Data Engineering",
    items: ["Python", "SQL", "dbt", "Airflow", "AWS DMS", "AWS Glue", "Fivetran", "Synatic", "Kafka", "Pub/Sub", "CDC", "Data Quality", "Pipeline Monitoring"],
  },
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "GCP", "AWS Outposts", "S3", "Amazon EKS", "Kubernetes", "ArgoCD", "Terraform", "Docker", "Ansible", "CI/CD", "Git"],
  },
  {
    category: "Databases & Warehousing",
    items: ["PostgreSQL", "Redshift", "BigQuery", "Athena", "Trino", "Parquet", "Iceberg", "Delta Lake", "Glue Data Catalog", "SQL Server"],
  },
  {
    category: "Analytics & BI",
    items: ["Apache Superset", "Power BI", "Tableau", "Metabase", "Sisense", "OBIEE", "Data Modelling", "Self-Service BI"],
  },
  {
    category: "Architecture & Leadership",
    items: ["Data Strategy", "Platform Architecture", "Team Leadership", "Hiring & Mentorship", "Technical Standards", "Architecture Decision Records", "Stakeholder Management"],
  },
] as const;

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
