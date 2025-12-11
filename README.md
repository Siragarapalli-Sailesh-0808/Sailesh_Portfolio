# Sailesh Siragerapalli - Portfolio Website

A modern, highly polished multi-page personal portfolio website built with React + Vite, featuring smooth animations, parallax effects, and a responsive design.

## ✨ Features

### 🎨 Design & UI
- **Dark-themed portfolio** with bold typography and modern aesthetics
- **Animated hero section** with 3D parallax card effects
- **Floating tech chips** with subtle animations
- **Smooth scroll animations** with intersection observers
- **Gradient backgrounds** with animated blobs
- **Hover micro-interactions** on all interactive elements
- **Fully responsive** on mobile, tablet, and desktop

### 📱 Pages
- **Home**: Hero section, brief about, highlighted skills, featured projects, and CTA
- **Projects**: Grid layout with filtering by category (All, Platform, AI System, Healthcare, IoT)
- **About**: Detailed bio, experience timeline, education, comprehensive skills breakdown, and achievements
- **Contact**: Contact form with validation, contact methods, social links, and availability status

### 🎯 Key Components
- `Navbar`: Sticky navigation with hamburger menu on mobile
- `Hero`: Animated hero with parallax 3D card and mouse-tracking effects
- `ProjectCard`: Project cards with hover overlays and tech tags
- `Timeline`: Vertical timeline for experience and education
- `SkillBadge`: Skill progress bars with shimmer effects
- `ContactForm`: Form with client-side validation
- `Footer`: Social links and site navigation

### 🎨 Design System
- **Colors**: Dark navy background (#050816), purple/blue accents (#4f46e5, #8b5cf6), cyan highlights (#22d3ee)
- **Typography**: Poppins for headings, Inter for body text
- **Spacing**: Consistent section spacing (80-120px vertical)
- **Animations**: Fade-in-up, slide-in, float, blob movements, scroll reveals

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
sailesh-portfolio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Timeline.jsx
│   │   ├── SkillBadge.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/                # Data files
│   │   └── portfolioData.js
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── utils/               # Utility functions
│   │   └── animations.js
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal info (name, email, phone, bio)
- Projects
- Skills
- Experience
- Education
- Achievements
- Social links

### Modify Colors
Edit the CSS variables in `src/styles/global.css`:
```css
:root {
  --color-bg-primary: #050816;
  --color-accent-primary: #4f46e5;
  --color-accent-secondary: #8b5cf6;
  --color-accent-tertiary: #22d3ee;
  /* ... more colors */
}
```

### Adjust Animations
Modify animation durations and easing in `src/styles/global.css`:
```css
:root {
  --transition-fast: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 300ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🌟 Features Breakdown

### Hero Section
- Animated title with staggered word reveals
- Mouse-tracking 3D parallax card
- Floating tech chips with random positioning
- Animated scroll indicator
- Gradient background with moving blobs

### Projects Page
- Category filtering (All, Platform, AI System, Healthcare, IoT)
- Hover effects with overlay and scale
- Tech stack tags
- Live demo and code links
- Responsive grid layout

### About Page
- Professional bio with profile section
- Experience timeline with animated dots
- Education timeline
- Comprehensive skills breakdown by category
- Achievement cards with icons
- Download CV section

### Contact Page
- Contact methods with hover glow effects
- Form with client-side validation
- Social media links
- Availability status indicator
- Responsive layout

## 🔧 Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **React Router**: Client-side routing
- **CSS3**: Styling with modern features
- **Intersection Observer API**: Scroll animations
- **Google Fonts**: Poppins & Inter

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px
- Small Mobile: Below 480px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text
- Focus states on all interactive elements

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- **Email**: siragarapallisailesh@gmail.com
- **Phone**: +91 9959401213
- **Location**: Visakhapatnam

---

Built with ❤️ by Sailesh Siragerapalli using React & Vite
