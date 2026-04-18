# Mesh Circular Shift Visualizer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

**Live Demo:** [View on Vercel](https://mesh-shift-visualizer-jv0rg8bln-subhans1501s-projects.vercel.app)   

## Overview
The **Mesh Circular Shift Visualizer** is a front-end web application built to simulate and analyze data routing algorithms in parallel computing architectures. 

In high-performance computing, transferring data efficiently across a network topology is critical. This tool visualizes how a naive linear data shift (Ring topology) can be mathematically optimized into a highly concurrent, two-stage permutation on a 2D Mesh topology, drastically reducing network communication steps.

## Technical Highlights
* **Algorithmic Implementation:** Translated complex parallel computing formulas into a pure, testable JavaScript module that calculates matrix transformations in $O(\sqrt{p})$ steps.
* **Complex State Management:** Orchestrated multi-stage, asynchronous React state updates (`setTimeout` and `useEffect`) to render seamless step-by-step UI animations.
* **Data Visualization:** Integrated `Recharts` to provide real-time performance analytics, dynamically comparing the step-count complexity of Mesh vs. Ring topologies.
* **Responsive UI/UX:** Built a dynamic CSS Grid layout that mathematically scales based on user input (perfect squares up to 64 nodes), complete with state-driven CSS transitions.

## The Algorithm (How it Works)
Given $p$ nodes and a shift amount of $q$, a naive ring requires $O(q)$ steps. This application visualizes the 2D Mesh optimization, which executes in two parallel stages:
1. **Row Phase:** Data shifts horizontally by `(q mod √p)` positions.
2. **Column Phase:** Data shifts vertically by `⌊q / √p⌋` positions.

The application dynamically calculates these vectors and visually traces the data lifecycle through the grid.

## Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/subhans1501/mesh-shift-visualizer.git](https://github.com/subhans1501/mesh-shift-visualizer.git)
   cd mesh-shift-visualizer
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
View locally: Open http://localhost:5173 in your browser.

## Tech Stack

Framework: React 18 (Vite)

Visualization: Recharts, Lucide-React (Icons)

Styling: Vanilla CSS (CSS Grid & Flexbox)

Deployment: Vercel CI/CD



