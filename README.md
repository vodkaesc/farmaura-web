# FarmAura Web 🌾

![FarmAura Banner](https://img.shields.io/badge/Status-Active-success?style=for-the-badge) ![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge) ![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)

> **Award Winning Project**: Showcased at the **Smart India Hackathon (National Level)** 🏆

---

## 📖 About The Project

**FarmAura Web** is the institutional landing page and decision support platform for FarmAura—a next-generation **AI-Driven Crop Advisory System** designed for precision agriculture. This web platform serves as the primary interface for institutional stakeholders, agricultural organizations, and pilot program partners.

The platform bridges the gap between advanced satellite multispectral analysis, field data, and on-ground agricultural action by providing:
*   🌱 **Intelligent Crop Advisory**: AI-driven recommendations using field data, remote sensing, and agronomic insights.
*   🛰️ **Precision Agriculture**: High-resolution crop intelligence for institutional decision-making.
*   📊 **Data-Driven Insights**: Real-time monitoring and analysis for climate-resilient farming.
*   🤝 **Stakeholder Engagement**: Professional interface for partnerships, pilot programs, and institutional collaboration.

---

## ✨ Key Features

### 🎯 Intelligent Hero Section
*   **Interactive Decision Support Feed**: Real-time simulation of crop monitoring with live scanning animations.
*   **Multi-Layer Visualization**: Toggle between Visible Spectrum, NDVI (Vegetative Index), and Thermal (Moisture Proxy) views.
*   **Dynamic Stats Display**: Live metrics including Canopy Coverage, Chlorophyll Vigor, Water Stress Index, and more.
*   **Parallax Effects**: Smooth mouse-tracking animations for an immersive experience.

### 🌾 Comprehensive About Section
*   **Mission Statement**: Clear articulation of FarmAura's vision for precision agriculture.
*   **Value Proposition**: Detailed breakdown of how the platform serves institutional stakeholders.
*   **Technology Overview**: Showcase of AI/ML capabilities and data integration.

### 📱 App Showcase
*   **Mobile App Preview**: Interactive demonstration of the FarmAura mobile application.
*   **Feature Highlights**: Visual presentation of key mobile features including IVR, pest detection, and crop recommendations.
*   **User Experience**: Farmer-centric design philosophy and accessibility features.

### 👥 Team Section
*   **Founders Tier**: Highlighted profiles of founding partners with expertise in AI/ML, Full Stack Development, and Cross-Platform Development.
*   **Core Team Tier**: Specialized engineering and strategy team members.
*   **Interactive Profiles**: Hover effects reveal LinkedIn and email contact options with glassmorphism design.
*   **Social Integration**: Direct links to team members' professional profiles.

### 📞 Contact & Inquiry
*   **Pilot Program Inquiries**: Streamlined contact form for institutional partnerships.
*   **EmailJS Integration**: Automated email handling for stakeholder communications.
*   **Multi-Channel Contact**: Email, LinkedIn, and direct inquiry options.

### 🎨 Premium Design System
*   **Agri-Themed Color Palette**: Professional green and earth tones optimized for agricultural context.
*   **Glassmorphism Effects**: Modern backdrop blur and transparency effects.
*   **Smooth Animations**: Micro-interactions and transitions for enhanced UX.
*   **Responsive Layout**: Mobile-first design that scales beautifully across all devices.

---

## 🖼️ Screenshots

| **Hero Section** | **About Section** | **Team Section** |
|:---:|:---:|:---:|
| Interactive decision support feed with live scanning | Mission and value proposition | Founders and core team with social links |

| **App Showcase** | **Contact Form** | **Mobile View** |
|:---:|:---:|:---:|
| Mobile app features preview | Pilot program inquiry form | Fully responsive design |

---

## 🛠️ Technical Stack

### **Frontend**
*   ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) **React 19.2**: Modern component-based UI framework.
*   ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) **TypeScript 5.8**: Type-safe development.
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite 6.2**: Lightning-fast build tool and dev server.
*   **Lucide React**: Beautiful, consistent icon library.

### **Styling**
*   **Vanilla CSS**: Custom design system with CSS variables.
*   **Responsive Design**: Mobile-first approach with flexbox and grid.
*   **Animations**: CSS transitions and transforms for smooth interactions.

### **Backend Integration**
*   ![Azure](https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoft-azure&logoColor=white) **Azure Cosmos DB**: Database integration for data persistence.
*   **EmailJS**: Email service for contact form submissions.
*   **REST API**: Integration with FarmAura backend services.

### **Development Tools**
*   **ESLint**: Code quality and consistency.
*   **Git**: Version control.
*   **npm**: Package management.

---

## 🚀 Getting Started

### Prerequisites
*   [Node.js 18+](https://nodejs.org/) installed.
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) package manager.
*   EmailJS account for contact form functionality.

### 1. Clone the Repository
```bash
git clone https://github.com/vodkaesc/farmaura-web.git
cd farmaura-web
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory and add your credentials:
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# Azure Cosmos DB (Optional)
VITE_COSMOS_ENDPOINT=your_cosmos_endpoint
VITE_COSMOS_KEY=your_cosmos_key
```

### 4. Run Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000/`

### 5. Build for Production
```bash
npm run build
```
The optimized production build will be in the `dist/` directory.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
farmaura-web/
├── components/           # React components
│   ├── Hero.tsx         # Hero section with interactive feed
│   ├── About.tsx        # About section
│   ├── Team.tsx         # Team section with social links
│   ├── AppShowcase.tsx  # Mobile app showcase
│   ├── Contact.tsx      # Contact form
│   └── ui/              # Reusable UI components
│       └── Section.tsx  # Section wrapper component
├── images/              # Static assets and team photos
├── api/                 # API integration utilities
├── server/              # Server-side utilities
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies
```

---

## 🎨 Design Philosophy

### Color Palette
*   **Primary**: `#2d5016` - Deep agricultural green
*   **Primary Light**: `#4a7c2c` - Vibrant growth green
*   **Primary Dark**: `#1a3009` - Rich earth tone
*   **Secondary**: `#a3d977` - Fresh leaf green
*   **Accent**: `#f59e0b` - Warm harvest gold

### Typography
*   **Headings**: Bold, clear hierarchy
*   **Body**: Readable, professional
*   **Monospace**: Technical data and metrics

### Interactions
*   **Hover Effects**: Smooth transitions with glassmorphism
*   **Animations**: Purposeful micro-interactions
*   **Responsiveness**: Fluid layouts across all breakpoints

---

## 🤝 Team

### Founders
*   **Keerthan Shetty** - AI/ML Engineer | [LinkedIn](https://www.linkedin.com/in/keerthanshetty334/) | [Email](mailto:keerthans334@gmail.com)
*   **S Mohammed Saheem** - Full Stack Developer | [LinkedIn](https://www.linkedin.com/in/s-mohammed-saheem-8a6100295) | [Email](mailto:saheemtab@gmail.com)
*   **Kishan M Naidu** - Cross-Platform App Developer | [LinkedIn](https://www.linkedin.com/in/kishan-m-naidu2123) | [Email](mailto:kishanmnaidu2005@gmail.com)

### Core Team
*   **Sheik Abdul Moiezz** - Business and Marketing Lead
*   **Mirza Burhan Baig** - Frontend Developer
*   **Tharun H N** - Backend Developer
*   **Manasa KR** - Research and Documentation

---

## 🌐 Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Configure GitHub Pages to serve from dist/
```

---

## 🤝 Contribution

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**FarmAura Team**  
*Intelligent Crop Advisory for Precision Agriculture*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/keerthanshetty334/) [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vodkaesc/farmaura-web) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:keerthans334@gmail.com)

---

## 🔗 Related Projects

*   **FarmAura Mobile App**: [GitHub Repository](https://github.com/keerthans334/FarmAura) - Flutter-based mobile application for farmers
*   **FarmAura Backend**: Python Flask API with ML models and Gemini AI integration

---

## 🙏 Acknowledgments

*   **Smart India Hackathon** - For providing the platform to showcase our innovation
*   **ICAR-IARI (Pusa Krishi)** - For institutional support and validation
*   **Ministry of Education Innovation Cell** - For backing and guidance
*   All farmers who inspired this solution

---

**Built with ❤️ for farmers, by farmers' advocates**
