# PortGael Healthcare Recruitment Website

A clean, modern, responsive static website for PortGael Healthcare Recruitment - connecting Portuguese healthcare professionals with opportunities in Ireland.

## 🏗️ Project Structure

```
portgael-website/
├── index.html              # Home page
├── netlify.toml            # Netlify deployment config
├── README.md               # This file
├── css/
│   └── styles.css          # Global stylesheet (mobile-first)
├── js/
│   └── main.js             # Minimal JavaScript (menu, forms)
├── images/                 # Local images (if needed)
└── pages/
    ├── about.html          # About Us page
    ├── vacancies.html      # Job listings page
    ├── vacancy-detail.html # Individual job details + apply form
    ├── submit-cv.html      # CV submission form
    ├── contact.html        # Contact page with form
    └── privacy-policy.html # Privacy Policy & GDPR
```

## ✨ Features

- **Mobile-first responsive design** - Works on all devices
- **No frameworks** - Pure HTML, CSS, JavaScript
- **Fast loading** - Minimal dependencies
- **Accessible** - Semantic HTML, ARIA labels
- **SEO ready** - Meta descriptions, clean URLs
- **GDPR compliant** - Privacy policy, consent checkboxes

## 🎨 Design System

### Colors
- Primary: `#2bee8c` (PortGael Green)
- Background: `#f6f8f7` (Light Gray)
- Text: `#0d1b14` (Dark Green)
- Borders: `#cfe7db` (Soft Green)

### Typography
- Font: Public Sans (Google Fonts)
- Weights: 400, 500, 600, 700, 800

### Components
- Reusable header and footer
- Card components
- Form elements (inputs, selects, file upload)
- Buttons (primary, secondary, sizes)
- Job cards

## 🚀 Deployment to Netlify

### Option 1: Drag & Drop
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `portgael-website` folder to the deploy area
3. Your site is live!

### Option 2: Git Repository
1. Push this folder to a Git repository (GitHub, GitLab, Bitbucket)
2. In Netlify, click "New site from Git"
3. Connect your repository
4. Deploy settings are auto-configured via `netlify.toml`

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
cd portgael-website
netlify deploy --prod
```

## 📝 Adding Content

### Adding a New Vacancy
1. Open `pages/vacancies.html`
2. Copy an existing `<article class="job-card">` block
3. Update the content (title, company, salary, location)
4. Update the link to point to a unique detail page

### Creating a Vacancy Detail Page
1. Copy `pages/vacancy-detail.html`
2. Rename to match the job (e.g., `vacancy-nurse-cork.html`)
3. Update all content (title, description, requirements)
4. Update the link in `vacancies.html`

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in `css/styles.css`:
```css
:root {
  --color-primary: #2bee8c;
  --color-bg-light: #f6f8f7;
  /* etc. */
}
```

### Changing Fonts
Update the Google Fonts link in each HTML file's `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```
Then update the CSS:
```css
--font-display: 'Your Font', sans-serif;
```

## ⚠️ Notes

- **No backend logic included** - Forms show success UI but don't submit data
- **To add form handling**, integrate with:
  - Netlify Forms (add `data-netlify="true"` to forms)
  - Formspree
  - Custom backend API

### Adding Netlify Forms
1. Add `data-netlify="true"` to any `<form>` tag
2. Add a `name` attribute to the form
3. Netlify will automatically handle submissions

Example:
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

© 2024 PortGael Recruitment Ltd. All rights reserved.
