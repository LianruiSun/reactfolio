# How to Add Multiple Featured Works

## Overview
Your portfolio now supports multiple featured works, each with its own set of images, description, and metadata. This guide explains how to add new featured works to your homepage.

## Step 1: Prepare Your Images

1. Add your project images to the `public` folder
2. Name them descriptively (e.g., `project-name-1.jpg`, `project-name-2.jpg`)
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`

## Step 2: Add Featured Work to Data

Open `src/data/user.js` and locate the `featuredWorks` array. Add new entries following this structure:

```javascript
featuredWorks: [
	{
		title: "Your Project Title",
		company: "Company or Institution Name",
		companyLogo: "company-logo.png",  // Optional
		timeframe: "Start Date – End Date",
		images: [
			"image1.jpg",
			"image2.jpg",
			"image3.jpg",
			// Add as many images as you want
		],
		description: "Detailed description of your project. Explain the problem you solved, the technologies you used, and the impact of your work.",
		link: "https://your-project-link.com",  // Optional
		tags: ["Tag1", "Tag2", "Tag3"]  // Optional
	},
	// Add more featured works here...
],
```

## Step 3: Example Featured Work Entry

Here's a complete example:

```javascript
{
	title: "E-Commerce Platform with AI Recommendations",
	company: "TechStartup Inc",
	companyLogo: "techstartup-logo.png",
	timeframe: "Jan 2024 – Present",
	images: [
		"ecommerce-homepage.jpg",
		"ecommerce-dashboard.jpg",
		"ecommerce-mobile.jpg"
	],
	description: "Built a full-stack e-commerce platform serving 10,000+ users with AI-powered product recommendations. Implemented using React, Node.js, MongoDB, and TensorFlow.js. Achieved 40% increase in user engagement and 25% boost in sales conversion rates.",
	link: "https://github.com/yourusername/ecommerce-platform",
	tags: ["Full-Stack", "AI/ML", "React", "Node.js"]
}
```

## Field Descriptions

### Required Fields
- **title**: The name of your project (string)
- **company**: Organization or context (string)
- **timeframe**: Duration of the project (string)
- **images**: Array of image filenames (array)
- **description**: Detailed project description (string)

### Optional Fields
- **companyLogo**: Logo filename for the company (string)
- **link**: External link to project or demo (string)
- **tags**: Technology tags or categories (array)

## Tips for Best Results

### Images
- Use high-quality images (at least 1200px wide)
- Maintain consistent aspect ratios across images
- Use 3-5 images per featured work for best presentation
- Include screenshots showing different aspects of your project

### Description
- Start with the problem you solved
- Highlight key technologies and methodologies
- Include measurable results or impact when possible
- Keep it between 100-300 words

### Tags
- Use 3-5 relevant tags per project
- Be specific (e.g., "React Native" instead of just "Mobile")
- Include both technologies and domains (e.g., "AI/ML", "Healthcare")

## Display Order

Featured works are displayed in the order they appear in the array. Put your most impressive or recent work first!

## Example: Adding Multiple Featured Works

```javascript
featuredWorks: [
	{
		title: "AI Accessibility Application for Visually Impaired",
		company: "InnoSpire (Co-work)",
		timeframe: "Aug 2024 – Present",
		images: ["poster1.jpg", "poster2.png", "poster3.png"],
		description: "Developed a dual-mode AI application...",
		link: "https://digital.wpi.edu/concern/student_works/8p58pj03v",
		tags: ["AI/ML", "Mobile Development", "Accessibility"]
	},
	{
		title: "Restaurant Analytics SaaS Platform",
		company: "Shangping",
		timeframe: "Mar 2023 – Present",
		images: [
			"shangping-dashboard.jpg",
			"shangping-analytics.jpg",
			"shangping-mobile.jpg"
		],
		description: "Founded and architected an AI-powered restaurant analytics platform deployed across 12 establishments in Beijing. Built with React, TypeScript, Python, and AWS serverless architecture. Provides real-time insights on customer behavior, inventory management, and revenue optimization.",
		link: "https://shangping.example.com",
		tags: ["SaaS", "Full-Stack", "AWS", "Founder"]
	},
	{
		title: "WPI Classroom Health Monitoring System",
		company: "Worcester Polytechnic Institute",
		timeframe: "Sep 2023 – Dec 2023",
		images: [
			"classroom-dashboard.jpg",
			"classroom-sensors.jpg",
			"classroom-visualization.jpg"
		],
		description: "Developed a comprehensive system to monitor and visualize classroom environmental conditions using Awair Omni sensors. Tracked temperature, air quality, humidity, noise, and lighting across 10 classrooms. Created a real-time web dashboard for data visualization and analysis.",
		link: "https://lianruisun.shinyapps.io/WPIClassroomDashboard/",
		tags: ["IoT", "Data Visualization", "React", "R Shiny"]
	}
],
```

## Preview Your Changes

1. Save `src/data/user.js`
2. Run `npm start` if not already running
3. Your changes should appear automatically on the homepage
4. The featured works will display with carousels showing multiple images

## Troubleshooting

### Images not showing?
- Check that image filenames match exactly (case-sensitive)
- Verify images are in the `public` folder
- Try using relative paths if needed

### Layout issues?
- The layout is responsive and will adapt to different screen sizes
- Each featured work card will stack vertically
- Images and descriptions are arranged side-by-side on desktop, stacked on mobile

### Need help?
- Check the console for any error messages
- Verify your JSON syntax is correct (commas, brackets, etc.)
- Make sure all required fields are filled

---

Happy showcasing! 🚀
