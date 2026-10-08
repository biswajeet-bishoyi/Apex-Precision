# 🏎️ Apex Precision: Max Verstappen 3D Experience

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-Interactive-darkred)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**A highly cinematic, interactive 3D web experience celebrating 4x Formula 1 World Champion Max Verstappen and the Oracle Red Bull Racing RB20.**

[Report Bug](https://github.com/biswajeet-bishoyi/Apex-Precision/issues) • [Request Feature](https://github.com/biswajeet-bishoyi/Apex-Precision/issues)

</div>

---

## 🌟 The Experience

**Apex Precision** abandons traditional static web design in favor of pure automotive cinematography. As the user scrolls, they control an intelligent dynamic camera that glides around a highly detailed 3D model of the championship-winning Oracle Red Bull Racing F1 car.

---

## 🚀 Key Features

- **🎬 Cinematic Camera Choreography**: Scroll-linked camera paths (via GSAP and CatmullRom splines) transitioning seamlessly from wide silhouette silhouettes to intense macro perspectives of the front-wing aero, push-rod suspension, cockpit, and power unit.
- **📷 Dynamic Depth of Field (Focus Pulls)**: Custom post-processing passes physically racking focal depth based on camera targets, generating silky bokeh in background scenery while maintaining tack-sharp carbon fiber texture in the foreground.
- **💡 Extreme Chapter Lighting Contrast**: Lighting environments that shift dynamically to echo each technical narrative — from the surgical cold white of the chassis laboratory to the incandescent amber heat of the engine block.
- **⚡ Minimalist Telemetry Typography**: Staggered motion typography delivering race stats and telemetry points without interrupting immersion.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **3D Engine**: [Three.js](https://threejs.org/)
- **React 3D Ecosystem**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
- **Animation & Scroll Control**: [GSAP](https://gsap.com/) with ScrollTrigger
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/biswajeet-bishoyi/Apex-Precision.git
cd Apex-Precision
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

> **Note on 3D Assets:** The 3D `.glb` model required to run this project is placed in `public/models/`. Due to file size limits, external asset links can be configured in `next.config.ts`.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
Built by <a href="https://github.com/biswajeet-bishoyi">Biswajeet Bishoyi</a>
</div>
