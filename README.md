# Apex Precision: Max Verstappen 3D Experience

A highly cinematic, interactive 3D web experience celebrating the dominance and legacy of 4× Formula 1 World Champion, Max Verstappen. Built with Next.js, Three.js, and React Three Fiber.

## 🏎️ The Experience

Apex Precision abandons traditional web design in favor of pure automotive cinematography. As the user scrolls, they control a dynamic camera that sweeps around a highly detailed 3D model of an Oracle Red Bull Racing F1 car (RB20).

### Key Features
- **Cinematic Camera Choreography**: Scroll-linked camera paths (via GSAP and CatmullRom splines) that transition seamlessly from wide silhouettes to intense macro shots of the suspension, engine, and cockpit.
- **Dynamic Depth of Field (Focus Pulls)**: A custom post-processing engine that physically racks focus based on what the camera is looking at, rendering creamy bokeh in the background and tack-sharp carbon fiber in the foreground.
- **Extreme Chapter Contrast**: Lighting that shifts aggressively to match the mood of each chapter—from the blinding white sterility of the suspension to the blistering heat of the engine block.
- **Typography as UI**: Minimalist, staggered text animations that punch onto the screen to deliver data points without breaking the immersion.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **3D Engine**: [Three.js](https://threejs.org/)
- **React Abstraction**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **Animation & Scroll Control**: [GSAP](https://gsap.com/) (ScrollTrigger)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/biswajeet-bishoyi/Apex-Precision.git
cd Apex-Precision
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the site.

## 📁 3D Assets

*(Note: The 3D `.glb` model required to run this project must be placed in the `public/models/` directory. Due to licensing and file size, the model is not tracked in git.)*

## 🧑‍💻 Credits

Made by Biswajeet ❤
