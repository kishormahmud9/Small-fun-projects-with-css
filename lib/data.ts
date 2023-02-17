export type Difficulty = "beginner" | "intermediate" | "advanced";

export type Project = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  difficulty: Difficulty;
  tech: string[];
  date: string;
  popularity: number;
  isNew?: boolean;
  trending?: boolean;
  featured?: boolean;
  thumbClass: string;
  code: {
    html: string;
    css: string;
    js?: string;
  };
};

export const categories = [
  { name: "Buttons", icon: "🔘", count: 14 },
  { name: "Cards", icon: "🃏", count: 11 },
  { name: "Animations", icon: "✨", count: 19 },
  { name: "Forms", icon: "📝", count: 9 },
  { name: "Loaders", icon: "⏳", count: 8 },
  { name: "Navigation", icon: "🧭", count: 7 },
  { name: "Glassmorphism", icon: "🧊", count: 12 },
  { name: "Gradients", icon: "🌈", count: 9 },
];

export const filterTags = [
  "All",
  "Cards",
  "Buttons",
  "Animations",
  "Glassmorphism",
  "Gradients",
  "Loaders",
  "Hover Effects",
];

export const projects: Project[] = [
  {
    slug: "frosted-glass-panel",
    name: "Frosted Glass Panel",
    description: "A frosted glass surface with layered blur and soft borders.",
    longDescription:
      "A reusable glassmorphism panel built with backdrop-filter and a translucent border. Works over any busy background — gradients, images, or animated blobs — and lifts gently on hover.",
    category: "Glassmorphism",
    difficulty: "beginner",
    tech: ["HTML", "CSS"],
    date: "2025-11-14",
    popularity: 812,
    isNew: true,
    featured: true,
    thumbClass: "thumb-glass",
    code: {
      html: `<div class="glass-card">
  <h3>Frosted Panel</h3>
  <p>Hover to see the glow</p>
</div>`,
      css: `.glass-card {
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 32px;
  transition: transform .3s ease, box-shadow .3s ease;
}

.glass-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -10px rgba(91,140,255,.4);
}`,
    },
  },
  {
    slug: "neon-pulse-button",
    name: "Neon Pulse Button",
    description: "Pure CSS button with an animated glow ring on hover.",
    longDescription:
      "A call-to-action button whose border pulses with a soft neon glow. The pulse is a single keyframe animation on box-shadow, so there is zero JavaScript and no layout shift.",
    category: "Buttons",
    difficulty: "beginner",
    tech: ["HTML", "CSS"],
    date: "2025-10-02",
    popularity: 634,
    trending: true,
    featured: true,
    thumbClass: "thumb-neon",
    code: {
      html: `<button class="neon-btn">Get Started</button>`,
      css: `.neon-btn {
  padding: 14px 30px;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, #5b8cff, #b06bff);
  box-shadow: 0 0 0 0 rgba(91,140,255,.6);
  animation: pulse 2.2s infinite;
  cursor: pointer;
}

@keyframes pulse {
  0%   { box-shadow: 0 0 0 0 rgba(91,140,255,.55); }
  70%  { box-shadow: 0 0 0 16px rgba(91,140,255,0); }
  100% { box-shadow: 0 0 0 0 rgba(91,140,255,0); }
}`,
    },
  },
  {
    slug: "gradient-loader-ring",
    name: "Gradient Loader Ring",
    description: "Conic-gradient spinner with smooth easing.",
    longDescription:
      "A loading indicator built from a single conic-gradient background masked into a ring shape, spun with a linear animation. No SVG, no images.",
    category: "Loaders",
    difficulty: "intermediate",
    tech: ["HTML", "CSS"],
    date: "2025-09-21",
    popularity: 501,
    featured: true,
    thumbClass: "thumb-ring",
    code: {
      html: `<div class="loader-ring"></div>`,
      css: `.loader-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #31d8e0, #5b8cff, #b06bff, #ff5da2, #31d8e0);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px));
  animation: spin 1.1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}`,
    },
  },
  {
    slug: "tilt-hover-card",
    name: "Tilt Hover Card",
    description: "Card that tilts toward the cursor using pointer tracking.",
    longDescription:
      "A small amount of JavaScript reads the pointer position relative to the card and maps it to a 3D rotation, giving the card a light, physical feel. Resets smoothly on mouse leave.",
    category: "Cards",
    difficulty: "intermediate",
    tech: ["HTML", "CSS", "JS"],
    date: "2025-08-30",
    popularity: 745,
    trending: true,
    thumbClass: "thumb-tilt",
    code: {
      html: `<div class="tilt-card" id="tiltCard">
  <h3>Tilt me</h3>
  <p>Move your cursor around</p>
</div>`,
      css: `.tilt-card {
  width: 240px;
  padding: 28px;
  border-radius: 18px;
  background: linear-gradient(160deg, #161d33, #121729);
  border: 1px solid rgba(148,163,184,.15);
  transform-style: preserve-3d;
  transition: transform .15s ease-out;
  will-change: transform;
}`,
      js: `const card = document.getElementById('tiltCard');

card.addEventListener('mousemove', (e) => {
  const r = card.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  card.style.transform =
    \`perspective(600px) rotateX(\${y * -14}deg) rotateY(\${x * 14}deg)\`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'perspective(600px) rotateX(0) rotateY(0)';
});`,
    },
  },
  {
    slug: "flip-card-3d",
    name: "3D Flip Card",
    description: "Two-sided card flip built with 3D transforms.",
    longDescription:
      "A classic front/back flip card using transform-style: preserve-3d and backface-visibility. Triggered on hover, but easy to switch to a click/tap trigger for touch devices.",
    category: "Cards",
    difficulty: "intermediate",
    tech: ["HTML", "CSS"],
    date: "2025-08-04",
    popularity: 412,
    thumbClass: "thumb-flip",
    code: {
      html: `<div class="flip-outer">
  <div class="flip-inner">
    <div class="flip-face flip-front">Front</div>
    <div class="flip-face flip-back">Back</div>
  </div>
</div>`,
      css: `.flip-outer {
  width: 200px;
  height: 130px;
  perspective: 1000px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform .6s;
  transform-style: preserve-3d;
}

.flip-outer:hover .flip-inner {
  transform: rotateY(180deg);
}

.flip-face {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  backface-visibility: hidden;
  font-weight: 600;
  color: #fff;
}

.flip-front { background: linear-gradient(135deg,#5b8cff,#b06bff); }
.flip-back  { background: linear-gradient(135deg,#b06bff,#ff5da2); transform: rotateY(180deg); }`,
    },
  },
  {
    slug: "animated-toggle-switch",
    name: "Toggle Switch Pro",
    description: "Smooth animated switch with spring-like easing.",
    longDescription:
      "A checkbox re-styled into a pill-shaped toggle with a spring cubic-bezier for the thumb, plus a subtle gradient fill when active. Fully keyboard operable since it's a real checkbox underneath.",
    category: "Forms",
    difficulty: "beginner",
    tech: ["HTML", "CSS"],
    date: "2025-07-19",
    popularity: 388,
    thumbClass: "thumb-toggle",
    code: {
      html: `<label class="switch">
  <input type="checkbox" />
  <span class="track"><span class="thumb"></span></span>
</label>`,
      css: `.switch { display: inline-flex; cursor: pointer; }
.switch input { display: none; }

.track {
  width: 52px;
  height: 30px;
  border-radius: 100px;
  background: #2a3350;
  position: relative;
  transition: background .3s ease;
}

.thumb {
  position: absolute;
  top: 3px; left: 3px;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: #fff;
  transition: transform .35s cubic-bezier(.5,1.8,.5,1);
}

.switch input:checked + .track {
  background: linear-gradient(135deg,#5b8cff,#b06bff);
}

.switch input:checked + .track .thumb {
  transform: translateX(22px);
}`,
    },
  },
  {
    slug: "skeleton-shimmer",
    name: "Skeleton Shimmer",
    description: "Loading placeholder with a moving shimmer gradient.",
    longDescription:
      "A background-position animation on a wide linear-gradient creates the illusion of light sweeping across the placeholder block — a common pattern for content that's still loading.",
    category: "Loaders",
    difficulty: "beginner",
    tech: ["HTML", "CSS"],
    date: "2025-06-27",
    popularity: 295,
    thumbClass: "thumb-shimmer",
    code: {
      html: `<div class="skeleton"></div>
<div class="skeleton" style="width:60%"></div>`,
      css: `.skeleton {
  height: 16px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #161d33 25%, #232c4a 37%, #161d33 63%);
  background-size: 400% 100%;
  animation: shimmer 1.6s ease infinite;
}

@keyframes shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}`,
    },
  },
  {
    slug: "ripple-click-button",
    name: "Ripple Click Effect",
    description: "Material-style ripple on click, no dependencies.",
    longDescription:
      "On click, a span is positioned at the cursor's coordinates and scaled up while fading out, then removed from the DOM — the whole effect is under 20 lines of JavaScript.",
    category: "Buttons",
    difficulty: "advanced",
    tech: ["HTML", "CSS", "JS"],
    date: "2025-06-05",
    popularity: 567,
    trending: true,
    thumbClass: "thumb-ripple",
    code: {
      html: `<button class="ripple-btn" id="rippleBtn">Click me</button>`,
      css: `.ripple-btn {
  position: relative;
  overflow: hidden;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  background: #1a2140;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(91,140,255,.5);
  transform: scale(0);
  animation: ripple-anim .6s ease-out forwards;
  pointer-events: none;
}

@keyframes ripple-anim {
  to { transform: scale(3); opacity: 0; }
}`,
      js: `const btn = document.getElementById('rippleBtn');

btn.addEventListener('click', (e) => {
  const r = btn.getBoundingClientRect();
  const span = document.createElement('span');
  const size = Math.max(r.width, r.height);

  span.className = 'ripple';
  span.style.width = span.style.height = size + 'px';
  span.style.left = e.clientX - r.left - size / 2 + 'px';
  span.style.top = e.clientY - r.top - size / 2 + 'px';

  btn.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
});`,
    },
  },
  {
    slug: "gradient-border-card",
    name: "Glow Border Card",
    description: "Card with an animated gradient border on hover.",
    longDescription:
      "Uses a pseudo-element with a gradient background masked to just the border area, so the card content stays on a solid surface while the border itself glows on hover.",
    category: "Cards",
    difficulty: "intermediate",
    tech: ["HTML", "CSS"],
    date: "2025-05-14",
    popularity: 449,
    thumbClass: "thumb-border",
    code: {
      html: `<div class="glow-card">
  <h3>Glow Border</h3>
  <p>Hover to activate</p>
</div>`,
      css: `.glow-card {
  position: relative;
  padding: 28px;
  border-radius: 16px;
  background: #121729;
}

.glow-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1.5px;
  border-radius: 16px;
  background: linear-gradient(135deg, #5b8cff, #b06bff, #ff5da2);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity .3s ease;
}

.glow-card:hover::before {
  opacity: 1;
}`,
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
