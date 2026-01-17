/**
 * Site Content Data
 * =================
 * Edit this file to update projects, publications, skills, and timeline
 * without touching the HTML structure.
 *
 * Note: This file is for reference/future use. Currently, content is
 * embedded in index.html for simplicity and GitHub Pages compatibility.
 * To use this data dynamically, you would need to add JavaScript to
 * render the content from these objects.
 */

const SITE_DATA = {

  // ==========================================================================
  // Profile Information
  // ==========================================================================
  profile: {
    name: "Alexander Markowitz",
    title: "PhD",
    role: "Clinical Bioinformatics Scientist",
    affiliation: "Children's Hospital Los Angeles",
    location: "Los Angeles, CA",
    email: "alexmarkowitz@icloud.com",
    tagline: "Building AI systems that improve pediatric diagnostics",
    description: "I develop machine learning tools for clinical workflows, specializing in digital pathology, genomics, and translational informatics.",
    domains: [
      "AI/ML",
      "Digital Pathology",
      "Genomics",
      "Methylation Analysis",
      "Pediatric Oncology"
    ],
    links: {
      cv: "CV - Markowitz.pdf",
      linkedin: "https://www.linkedin.com/in/alexander-markowitz-phd-0063351b/",
      scholar: "https://scholar.google.com/citations?user=w7_8C10AAAAJ&hl=en",
      github: "https://github.com/alex-markowitz"
    }
  },

  // ==========================================================================
  // Timeline / Journey
  // ==========================================================================
  timeline: [
    {
      title: "Clinical Bioinformatics Scientist",
      organization: "Children's Hospital Los Angeles",
      description: "Leading projects in personalized medicine, pathology informatics, and ML pipeline development",
      current: true
    },
    {
      title: "Postdoctoral Fellow",
      organization: "UCLA",
      description: "Cancer data science and biomedical research with Dr. Paul Boutros"
    },
    {
      title: "Ph.D. in Neuroscience",
      organization: "University of Southern California",
      description: "Patch-clamp electrophysiology and biophysics with Dr. Radha Kalluri"
    }
  ],

  // ==========================================================================
  // Projects
  // ==========================================================================
  projects: [
    {
      title: "Methylation Array Analysis (MAA) Pipeline",
      tags: ["Methylation", "ML Pipeline", "Clinical"],
      problem: "Manual classification of CNS tumors is time-consuming and inconsistent across institutions.",
      solution: "Developed an automated pipeline leveraging machine learning for classifying over 100 cancer types based on DNA methylation patterns, now used in clinical workflows at CHLA.",
      role: "Lead developer and clinical integration",
      links: [
        { label: "Preprint", url: "https://www.medrxiv.org/content/10.1101/2024.01.25.24301176v1", type: "paper" }
      ]
    },
    {
      title: "Tumor Classification & Risk Stratification",
      tags: ["AI/ML", "Oncology", "Risk Stratification"],
      problem: "Pediatric tumor prognosis relies on limited clinical markers, missing molecular insights.",
      solution: "AI-driven models integrating genomic and clinical data for improved tumor classification and patient risk stratification.",
      role: "Model development and validation",
      links: [
        { label: "Paper", url: "https://pubmed.ncbi.nlm.nih.gov/39447572/", type: "paper" }
      ]
    },
    {
      title: "Biophysical Encoding of Sound Intensity",
      tags: ["Neuroscience", "Biophysics", "Electrophysiology"],
      problem: "The mechanisms by which auditory neurons encode sound intensity across a wide dynamic range were poorly understood.",
      solution: "Characterized how variations in neuronal biophysics contribute to auditory intensity coding through patch-clamp electrophysiology.",
      role: "Lead researcher (PhD thesis)",
      links: [
        { label: "Paper (eLife)", url: "https://elifesciences.org/articles/55378", type: "paper" }
      ]
    }
  ],

  // ==========================================================================
  // Publications
  // ==========================================================================
  publications: [
    {
      year: 2024,
      title: "Methylation Array Analysis Pipeline for CNS Tumor Classification",
      authors: "Markowitz A, et al.",
      journal: "medRxiv",
      note: "preprint",
      url: "https://www.medrxiv.org/content/10.1101/2024.01.25.24301176v1"
    },
    {
      year: 2024,
      title: "AI-Driven Tumor Classification and Risk Stratification Models",
      authors: "[Authors]",
      journal: "Journal",
      url: "https://pubmed.ncbi.nlm.nih.gov/39447572/"
    },
    {
      year: 2020,
      title: "Tonotopic variation in the conductance of delayed-rectifier and A-type potassium channels in auditory neurons",
      authors: "Markowitz AL, Bhattacharya A, Bhattacharya N, Bhattacharya J, Bhattacharya S, Bhattacharya M, Kalluri R",
      journal: "eLife",
      url: "https://elifesciences.org/articles/55378"
    }
  ],

  // ==========================================================================
  // Research Focus Areas
  // ==========================================================================
  researchAreas: [
    {
      title: "Clinical AI/ML",
      description: "Developing production-grade ML systems for clinical diagnostics"
    },
    {
      title: "Digital Pathology",
      description: "Computational analysis of histopathology images"
    },
    {
      title: "Genomics",
      description: "Methylation analysis, variant calling, and molecular classification"
    },
    {
      title: "Pediatric Oncology",
      description: "Improving diagnostic precision for childhood cancers"
    }
  ],

  // ==========================================================================
  // Skills
  // ==========================================================================
  skills: {
    "Machine Learning": [
      "TensorFlow / PyTorch",
      "Scikit-learn",
      "XGBoost / LightGBM",
      "Deep Learning",
      "Model Deployment"
    ],
    "Bioinformatics": [
      "Nextflow / Snakemake",
      "GATK / BWA",
      "Methylation (minfi, sesame)",
      "DRAGEN",
      "Variant Analysis"
    ],
    "Cloud & DevOps": [
      "AWS / GCP",
      "Docker / Singularity",
      "Git / GitHub Actions",
      "Linux / Bash",
      "HPC (Slurm)"
    ],
    "Languages": [
      "Python",
      "R / Bioconductor",
      "SQL",
      "Bash",
      "JavaScript"
    ]
  }

};

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_DATA;
}
