# Development Guide

## 🎯 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📝 Customization Guide

### Update Your Information

Edit `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  location: 'Your City',
  bio: 'Your bio here...'
};
```

### Add New Projects

In `src/data/portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Platform', // or 'AI System', 'Healthcare', 'IoT'
    description: 'Brief description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Feature 1', 'Feature 2'],
    icon: '🚀',
    liveUrl: 'https://...',
    codeUrl: 'https://github.com/...'
  }
];
```

### Update Skills

In `src/data/portfolioData.js`:

```javascript
export const skills = {
  languages: [
    { name: 'Python', level: 90 }, // level: 0-100
    { name: 'JavaScript', level: 85 }
  ],
  // Add more categories...
};
```

### Modify Colors

Edit `src/styles/global.css`:

```css
:root {
  /* Change these color values */
  --color-bg-primary: #050816;
  --color-accent-primary: #4f46e5;
  --color-accent-secondary: #8b5cf6;
  --color-accent-tertiary: #22d3ee;
}
```

### Add New Pages

1. Create page component in `src/pages/`:
   ```javascript
   // src/pages/NewPage.jsx
   const NewPage = () => {
     return (
       <div className="new-page">
         <h1>New Page</h1>
       </div>
     );
   };
   export default NewPage;
   ```

2. Add route in `src/App.jsx`:
   ```javascript
   import NewPage from './pages/NewPage';
   
   <Routes>
     <Route path="/new" element={<NewPage />} />
   </Routes>
   ```

3. Add link to navbar in `src/components/Navbar.jsx`:
   ```javascript
   const navLinks = [
     { path: '/new', label: 'New Page' }
   ];
   ```

## 🎨 Animation Tips

### Add Scroll Reveal

Add `reveal` class to any element:

```javascript
<div className="my-section reveal">
  {/* Content will fade in on scroll */}
</div>
```

### Staggered Animations

Use inline styles for delays:

```javascript
{items.map((item, index) => (
  <div 
    key={item.id}
    className="reveal"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Content */}
  </div>
))}
```

### Custom Animations

Add to `src/styles/global.css`:

```css
@keyframes myAnimation {
  from { opacity: 0; }
  to { opacity: 1; }
}

.my-element {
  animation: myAnimation 0.5s ease-out;
}
```

## 🔧 Component Structure

### Creating New Components

1. Create component file in `src/components/`:
   ```javascript
   // src/components/MyComponent.jsx
   import './MyComponent.css';
   
   const MyComponent = ({ prop1, prop2 }) => {
     return (
       <div className="my-component">
         {/* Content */}
       </div>
     );
   };
   
   export default MyComponent;
   ```

2. Create CSS file:
   ```css
   /* src/components/MyComponent.css */
   .my-component {
     /* Styles */
   }
   ```

3. Import and use:
   ```javascript
   import MyComponent from './components/MyComponent';
   
   <MyComponent prop1="value" prop2="value" />
   ```

## 📱 Responsive Design

Use these breakpoints:

```css
/* Mobile */
@media (max-width: 768px) {
  /* Mobile styles */
}

/* Tablet */
@media (max-width: 1024px) and (min-width: 769px) {
  /* Tablet styles */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Desktop styles */
}
```

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Build:
   ```bash
   npm run build
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🐛 Troubleshooting

### Port Already in Use

Change port in `vite.config.js`:

```javascript
export default defineConfig({
  server: {
    port: 3000
  }
});
```

### Build Errors

Clear cache and reinstall:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Routing Issues

For deployment, add `_redirects` file in `public/`:
```
/*    /index.html   200
```

## 💡 Best Practices

1. **Keep components small**: One responsibility per component
2. **Use semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`
3. **Optimize images**: Use WebP format and lazy loading
4. **Test responsiveness**: Test on multiple devices
5. **Accessibility**: Add ARIA labels, alt text, and keyboard navigation
6. **Performance**: Minimize bundle size, use code splitting
7. **SEO**: Add meta tags, sitemap, and robots.txt

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Web Animation API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)

## 🎓 Learning Path

1. Understand React basics (components, props, state)
2. Learn React Router for navigation
3. Master CSS animations and transitions
4. Explore Intersection Observer for scroll effects
5. Study responsive design principles
6. Learn performance optimization techniques

---

Happy coding! 🚀
