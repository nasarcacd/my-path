# 🎯 My Path - Career Progress Tracker

A beautiful, modern web application to track and visualize your learning journey and career development goals. Built with React 18, TypeScript, and Material-UI (MUI) v5.

## ✨ Features

- **Visual Progress Tracking**: Interactive circular progress indicators for all your learning goals
- **Hierarchical Goals**: Organize your career path with main goals and sub-goals
- **Modern UI/UX**: Beautiful gradient backgrounds, smooth animations, and hover effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Type-Safe**: Built with TypeScript for better code quality and developer experience
- **Fast & Optimized**: Utilizes React 18's latest features and performance optimizations

## 🚀 Live Demo

Visit the live application: [https://my-path.vercel.app/](https://my-path.vercel.app/)

## 🛠️ Tech Stack

- **React 18.3.1** - Modern React with concurrent features
- **TypeScript 5.4.5** - Type-safe JavaScript
- **Material-UI (MUI) v5.15** - Modern React component library
- **React Router v6** - Client-side routing
- **Emotion** - CSS-in-JS styling solution
- **Create React App** - Tooling and build configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

```bash
Node.js >= 16.x
yarn >= 1.22.x (or npm >= 8.x)
```

## 🔧 Installation

1. **Clone the repository**

```bash
git clone git@github.com:nasarcacd/my-path.git
cd my-path
```

2. **Install dependencies**

```bash
yarn install
# or
npm install
```

3. **Start the development server**

```bash
yarn start
# or
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### `yarn start`
Runs the app in development mode with hot-reloading

### `yarn build`
Builds the app for production to the `build` folder

### `yarn test`
Launches the test runner in interactive watch mode

### `yarn eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🎨 Features in Detail

### Progress Visualization
- Color-coded progress indicators (green for >75%, blue for >50%, orange for <50%)
- Large main progress circle showing overall career path completion
- Individual cards for each skill/technology goal

### Interactive Navigation
- Click on any goal card to view detailed sub-goals
- Smooth page transitions with React Router v6
- Back navigation to return to previous views

### Modern Design
- Gradient backgrounds with purple-blue theme
- Card-based layouts with hover animations
- Responsive grid system that adapts to screen size
- Drop shadows and depth effects for visual hierarchy

## 📱 Responsive Breakpoints

- **Mobile**: < 600px (xs)
- **Tablet**: 600px - 960px (sm, md)
- **Desktop**: > 960px (lg, xl)

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Manual Deployment

1. Build the project:
```bash
yarn build
```

2. Deploy the `build` folder to your hosting service of choice

## 📁 Project Structure

```
my-path/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── circular-static-progress/
│   │   └── ui/
│   ├── containers/      # State containers
│   ├── pages/          # Page components
│   │   ├── homepage/
│   │   ├── goal-detail/
│   │   └── contact/
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── index.tsx       # Entry point
├── package.json
└── tsconfig.json
```

## 🔄 Recent Updates (v0.3.0)

- ⬆️ Updated React from v16 to v18
- ⬆️ Migrated from Material-UI v4 to MUI v5
- ⬆️ Updated React Router from v5 to v6
- ⬆️ Updated TypeScript from 3.7 to 5.4
- 🎨 Complete UI/UX redesign with modern aesthetics
- ✨ Added smooth animations and hover effects
- 📱 Improved responsive design
- 🎯 Better progress visualization with color coding

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Nayib**

- GitHub: [@nasarcacd](https://github.com/nasarcacd)

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- React team for the incredible framework
- All contributors and users of this project

---

**Note**: This application is designed for personal career tracking and goal management. Feel free to fork and customize it for your own needs!