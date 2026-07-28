export type Collection = {
  id: string;
  title: string;
  count: string;
  description: string;
  category: string;
  gradient: string;
  icon: string;
  projectSlugs: string[];
};

export const collections: Collection[] = [
  {
    id: "css-buttons",
    title: "Buttons & Inputs Collection",
    count: "12 Components",
    description: "Hover glows, ripple effects, animated toggles, custom radio buttons and switches.",
    category: "Buttons & Inputs",
    gradient: "from-blue-600/30 to-indigo-600/30 border-blue-500/30",
    icon: "🔘",
    projectSlugs: ["10-button-i", "11-button-ii", "13-button-iii", "31-checkbox", "34-checkbox-effect", "44-radio-button", "59-checkbox-button"]
  },
  {
    id: "cards-ui",
    title: "Cards & Container UI",
    count: "10 Layouts",
    description: "Glassmorphic panels, 3D tilt cards, glow borders, debit card layouts, and service boxes.",
    category: "Cards",
    gradient: "from-purple-600/30 to-pink-600/30 border-purple-500/30",
    icon: "🃏",
    projectSlugs: ["5-card-design-i", "6-debit-card", "23-card-design-ii", "25-card-design-iii", "26-card-design-iv", "27-card-design-v", "32-card-design-vi", "35-card-design-vii", "41-card-design", "43-card", "54-service-box", "61-client-testimonial"]
  },
  {
    id: "navbars-header",
    title: "Navigation & Headers",
    count: "6 Components",
    description: "Sticky navbars, dropdown menus, responsive header layouts with dark glassmorphism.",
    category: "Navigation",
    gradient: "from-emerald-600/30 to-teal-600/30 border-emerald-500/30",
    icon: "🧭",
    projectSlugs: ["22-navbar-design", "29-navbar-design-ii", "30-navbar-design-iii", "58-sticky-navbar", "60-dropdown-navbar"]
  },
  {
    id: "animations-fx",
    title: "Creative Animations & Loaders",
    count: "14 Effects",
    description: "Heartbeat pulse, glowing progress bars, skill loaders, round shape Keyframe motions.",
    category: "Animations",
    gradient: "from-amber-600/30 to-orange-600/30 border-amber-500/30",
    icon: "✨",
    projectSlugs: ["12-animation", "14-animation-ii", "37-gloing-bar", "46-skill-bar-css3", "47-animation-effect", "55-heart-animation", "56-progress-bar"]
  },
  {
    id: "text-images",
    title: "Text & Image Micro-Interactions",
    count: "12 Effects",
    description: "Glowing text, move box hover, image hover zoom, clip masks, list item slide effects.",
    category: "Hover Effects",
    gradient: "from-cyan-600/30 to-blue-600/30 border-cyan-500/30",
    icon: "🎨",
    projectSlugs: ["1-move-box-hover-effect", "2-text-effect", "15-img-efffect", "16-img-effect-ii", "17-img-effect-iii", "18-img-effect-iv", "20-hover-effect-ii", "38-text-effect", "39-img-effect", "40-img-hover-effect", "42-text-hover-effect", "45-text-effect", "49-list-item-hover-effect", "52-hover-effect"]
  },
  {
    id: "forms-page",
    title: "Forms & Page Templates",
    count: "8 Templates",
    description: "Login forms, Contact Us layouts, water ripple effects, horizontal & vertical page scrolling.",
    category: "Forms",
    gradient: "from-rose-600/30 to-red-600/30 border-rose-500/30",
    icon: "📝",
    projectSlugs: ["33-login-form", "36-login-form-ii", "48-login-form", "64-contact-us-page", "50-horaizontal-page-scrolling", "57-scroll", "62-page-scroll"]
  }
];
