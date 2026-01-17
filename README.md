# Alexander Markowitz, PhD - Portfolio Website

Personal portfolio site for a clinical bioinformatics scientist specializing in AI/ML, digital pathology, genomics, and pediatric diagnostics.

**Live site:** [alex-markowitz.github.io](https://alex-markowitz.github.io)

---

## Quick Start

This is a static site hosted on GitHub Pages. To run locally:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Then open http://localhost:8000
```

---

## Updating Content

All content is in `index.html`. Here's how to update each section:

### 1. Profile Information (Hero Section)

Find the `<!-- Hero Section -->` around line 154. Update:

```html
<!-- Affiliation badge -->
<div class="inline-flex items-center...">
  Clinical Bioinformatics Scientist at CHLA  <!-- Change affiliation -->
</div>

<!-- Main heading -->
<h1>Building AI systems that improve <span>pediatric diagnostics</span></h1>

<!-- Description -->
<p>I develop machine learning tools for clinical workflows...</p>

<!-- Domain tags -->
<span class="tag">AI/ML</span>
<span class="tag">Digital Pathology</span>
<!-- Add/remove tags as needed -->
```

### 2. Adding a New Project

Find `<!-- Projects Section -->` around line 288. Copy an existing project card and modify:

```html
<article class="project-card">
  <!-- Tags -->
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="project-tag">Tag 1</span>
    <span class="project-tag">Tag 2</span>
  </div>

  <!-- Title -->
  <h3 class="text-xl font-semibold text-gray-900 mb-3">
    Project Title
  </h3>

  <!-- Problem/Solution/Role -->
  <p class="text-gray-600 mb-4">
    <strong class="text-gray-700">Problem:</strong> Describe the problem...
  </p>
  <p class="text-gray-600 mb-4">
    <strong class="text-gray-700">Solution:</strong> Describe your solution...
  </p>
  <p class="text-gray-600 mb-6">
    <strong class="text-gray-700">Role:</strong> Your role
  </p>

  <!-- Links -->
  <div class="flex flex-wrap gap-3">
    <a href="URL" target="_blank" rel="noopener" class="project-link">
      <svg>...</svg>
      Paper
    </a>
    <a href="URL" target="_blank" rel="noopener" class="project-link">
      Code
    </a>
  </div>
</article>
```

### 3. Adding a New Publication

Find `<!-- Publications Section -->` around line 392. Add a new publication item:

```html
<article class="publication-item">
  <div class="flex items-start gap-4">
    <span class="publication-year">2024</span>
    <div>
      <h3 class="font-medium text-gray-900 mb-1">
        Publication Title
      </h3>
      <p class="text-sm text-gray-600 mb-2">
        Author A, Author B, et al. <span class="italic">Journal Name</span>
      </p>
      <a href="URL" target="_blank" rel="noopener" class="text-sm text-primary-600 hover:text-primary-700">
        Read paper
      </a>
    </div>
  </div>
</article>
```

### 4. Updating the Timeline

Find the timeline in the About section (around line 247):

```html
<div class="timeline-item">
  <div class="timeline-marker"></div>
  <div class="timeline-content">
    <div class="flex flex-wrap items-baseline gap-x-3">
      <span class="font-semibold text-gray-900">Job Title</span>
      <span class="text-sm text-gray-500">Organization</span>
    </div>
    <p class="text-sm text-gray-600 mt-1">Description of role</p>
  </div>
</div>
```

### 5. Updating Skills

Find `<!-- Skills Section -->` around line 484. Each skill category:

```html
<div class="skill-category">
  <h3 class="skill-category-title">
    <svg>...</svg>
    Category Name
  </h3>
  <ul class="skill-list">
    <li>Skill 1</li>
    <li>Skill 2</li>
    <li>Skill 3</li>
  </ul>
</div>
```

### 6. Contact Information

Find `<!-- Contact Section -->` around line 553. Update:
- Email address in both the mailto link and the copy button's `data-email` attribute
- Social media links

### 7. Form Submissions

The contact form uses [Formspree](https://formspree.io). To change the form endpoint:

1. Create a free account at formspree.io
2. Create a new form and get your endpoint
3. Update the `action` attribute in the form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

---

## File Structure

```
├── index.html      # Main HTML (all content here)
├── style.css       # Custom styles + design system
├── main.js         # JavaScript (mobile menu, scroll spy, etc.)
├── data.js         # Reference file for content structure
├── favicon.ico     # Site favicon
├── CV - Markowitz.pdf
└── [profile-image].jpeg
```

---

## Design System

### Colors
- **Primary (Teal):** `#14b8a6` (500), `#0d9488` (600), `#0f766e` (700)
- **Gray scale:** Standard Tailwind grays

### Typography
- **Font:** Inter (loaded from Google Fonts)
- **Headings:** font-bold, gray-900
- **Body:** gray-600 to gray-700

### Components
| Class | Purpose |
|-------|---------|
| `.btn-primary` | Primary action buttons |
| `.btn-secondary` | Secondary buttons |
| `.btn-small` | Small utility buttons |
| `.tag` | Domain/skill tags |
| `.project-tag` | Project category tags |
| `.project-card` | Project card container |
| `.publication-item` | Publication list item |
| `.skill-category` | Skill group container |
| `.timeline-item` | Timeline entry |
| `.form-input` | Form input styling |
| `.nav-link` | Navigation links |
| `.social-link` | Social media buttons |

---

## Performance Notes

### Dependencies
- **Tailwind CSS** (CDN) - Utility CSS framework
- **Inter font** (Google Fonts) - Typography

### Removed from Original
- GSAP (animation library) - Replaced with CSS + IntersectionObserver
- ScrollMagic - Replaced with IntersectionObserver
- Chart.js - Removed; charts replaced with text content

### Optimizations
- Deferred JavaScript loading
- Lazy-loaded images
- Preconnect hints for external resources
- Reduced motion support for accessibility
- No render-blocking resources

---

## Accessibility

- Skip-to-content link
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Color contrast compliant
- Reduced motion media query support

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (tested on iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

## License

Copyright 2025 Alexander Markowitz. All rights reserved.
