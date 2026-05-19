# 🎌 Project Neo-Tokyo: High-End React Cybernetic Anime Portfolio

Welcome to the ultimate research blueprint for **Project Neo-Tokyo**—a state-of-the-art, high-end, and visually stunning React-based cybernetic anime portfolio. This design system fuses glowing interactive interfaces, retro-future scanlines, diagnostics grids, and futuristic sound synthesizers with a modern React stack.

---

## 🎨 Visual Identity & Theme Spectrum: High-Tech Cyberpunk
Inspired by iconic titles like *Akira*, *Ghost in the Shell*, *Cyberpunk: Edgerunners*, and *Neon Genesis Evangelion*, this theme is high-octane, visually striking, and utilizes glowing diagnostics consoles.

```
┌────────────────────────────────────────────────────────┐
│  BACKGROUND: Deep Obsidian Cyber Blue-Black (#07080d)  │
├──────────────────┬──────────────────┬──────────────────┤
│  CYAN GLOW       │  MAGENTA PULSE   │  WARN NEON       │
│  #00f0ff         │  #ff2a6d         │  #fcee0a         │
│  (Diagnostics)   │  (Active Core)   │  (System Alerts) │
└──────────────────┴──────────────────┴──────────────────┘
```

*   **Glassmorphism Container Shells:** High-tech panels using heavy backdrop-filters, semi-transparent dark borders, and vibrant glowing neon shadows.
*   **Decorations:** Subtle geometric corner-cuts (`clip-path`), vertical Japanese structural labels, high-frequency scanline grids, and real-time canvas digital nodes.

---

## 🔠 Typography (Modern Bold Cyber Fonts)
We will load these modern display fonts from Google Fonts:
*   **[Oxanium](https://fonts.google.com/specimen/Oxanium) (Weights: 700, 800):** Hexagonal, high-tech, and futuristic display font.
*   **[Syne](https://fonts.google.com/specimen/Syne) (Weights: 800, Extra Bold):** Wide-grotesque font that feels incredibly bold, stylized, and state-of-the-art.
*   **[Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (Weights: 700):** Quirky, geometric, and modern.
*   **[JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Weights: 400, 500):** High-readability monospace font for technical metrics.

---

## 💫 Signature Visual Features & Interactive Systems

1.  **Cyber-Grid Canvas Engine:**
    *   Responsive HTML5 Canvas running at 60 FPS drawing cyan/magenta cyber nodes, active connections, and glowing circuit paths that dynamically follow the user's mouse position.
2.  **Terminal Boot Screen Loader:**
    *   A high-fidelity landing loading screen simulating a core diagnostics check, printing lines like `[ SYSTEM BOOTING: SUCCESS ]`, `[ DECODING CREDENTIALS ]`, and displaying a loading bar before sliding open.
3.  **Holographic Diagnostic Modal:**
    *   Dynamic, detail-rich overlays that appear with glitch-out scaling, showing tech stats, system architecture, and compatibility indicators in a futuristic control dashboard style.
4.  **Web Audio API Retro Synth Soundboard:**
    *   Generates short high-frequency "sine wave sweeps" on hovering elements, and high-frequency "square wave clicks" on selections.
    *   A custom audio controller button in the navigation bar toggles the sound engine state (`[ AUDIO: ON ]` vs. `[ AUDIO: MUTED ]`).

---

## 🛠️ Decided Tech Stack
*   **Core:** **React (v18+)** for robust state-driven rendering and highly structured modular components.
*   **Bundler:** **Vite** for optimized assets compilation and fast development cycles.
*   **Styling:** **Vanilla CSS** with CSS variables (`:root`) and custom glassmorphism layers, delivering raw control and maximum performance.
*   **Audio Synthesis:** Native **Web Audio API** oscillator trees (no heavy MP3 assets required).
