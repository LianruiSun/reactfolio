# Reactfolio - Personal Portfolio

A modern, feature-rich personal portfolio website built with React, featuring smooth animations, responsive design, and cloud integration.

**Live Site**: [https://lianruisun.com/](https://lianruisun.com/)

## ✨ Features

- **Multi-Page Layout**: Home, About, Projects, Articles, and Contact pages
- **Smooth Animations**: Built with Framer Motion for engaging user experience
- **Interactive Components**: 
  - Particle background effects
  - Project carousels
  - Education popup with course information
  - Hover animations and transitions
- **Responsive Design**: Optimized for all device sizes
- **AWS Integration**: 
  - DynamoDB for dynamic content
  - Lambda functions for serverless API
  - FastAPI backend hosted on AWS Lambda
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Modern Stack**: React 18, React Router, Framer Motion, FontAwesome

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/LianruiSun/reactfolio.git
   cd reactfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
reactfolio/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   │   ├── about/      # About page components
│   │   ├── articles/   # Article components
│   │   ├── common/     # Shared components (NavBar, Footer, etc.)
│   │   ├── homepage/   # Homepage specific components
│   │   └── projects/   # Project display components
│   ├── data/           # Configuration and content data
│   ├── pages/          # Page components
│   └── App.js          # Main application component
└── package.json
```

## 🔧 Configuration

### User Data
Edit `src/data/user.js` to customize your personal information, projects, and social links.

### SEO Settings
Modify `src/data/seo.js` to update meta tags and SEO information for each page.

### Analytics
Update `src/data/tracking.js` with your Google Analytics tracking ID.

## 🌐 Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
4. Deploy!

### AWS Integration

This portfolio includes integration with AWS services:

- **DynamoDB**: Stores course and education data
- **Lambda + FastAPI**: Serverless API for data retrieval

For backend setup, see: [Portfolio FastAPI Deployment](https://github.com/LianruiSun/portfolio-fastAPI)

## 📝 Customization

### Adding Projects
Edit the `projects` array in `src/data/user.js`:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description",
    logo: "path/to/logo.png",
    linkText: "View Project",
    link: "https://project-url.com",
  },
]
```

### Styling
- Global styles: `src/app.css` and `src/index.css`
- Component-specific styles: Located in respective `styles/` folders

## 🐛 Troubleshooting

### Build Errors on Netlify
If you encounter module resolution errors, ensure:
- All imports use consistent casing (lowercase recommended)
- File extensions match actual filenames
- No unused imports in your code

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Based on the [Reactfolio template](https://github.com/truethari/reactfolio) by truethari

## 📧 Contact

Lianrui Sun - [GitHub](https://github.com/LianruiSun)

---

Made with ❤️ using React
