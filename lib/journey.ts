export type Milestone = {
  id: string;
  title: string;
  period: string;
  level: string;
  description: string;
  skills: string[];
  projectsCount: number;
  highlightSlug?: string;
};

export const journeyMilestones: Milestone[] = [
  {
    id: "html-css-foundations",
    title: "HTML & Box Model Fundamentals",
    period: "Phase 1 • Foundations",
    level: "Beginner Level",
    description: "Started learning CSS display properties, element sizing, margin collapse, standard borders, and background properties.",
    skills: ["HTML5 Syntax", "CSS Box Model", "Border Radius", "Colors & Margins"],
    projectsCount: 12,
    highlightSlug: "1-move-box-hover-effect"
  },
  {
    id: "flexbox-mastery",
    title: "Flexbox & Component Design",
    period: "Phase 2 • Layouts",
    level: "Intermediate Level",
    description: "Mastered justify-content, align-items, flex-grow, and flex wrapping to build modern button groups, navbar designs, and cards.",
    skills: ["Flexbox", "Gap", "Flex Direction", "Alignment"],
    projectsCount: 18,
    highlightSlug: "22-navbar-design"
  },
  {
    id: "css-grid-forms",
    title: "CSS Grid & Interactive Forms",
    period: "Phase 3 • Modern Layouts",
    level: "Intermediate Level",
    description: "Dived into grid-template-columns, minmax(), custom form inputs, toggle switches, and responsive form templates.",
    skills: ["CSS Grid", "Custom Radio & Checkbox", "Form Inputs", "Responsive Layouts"],
    projectsCount: 14,
    highlightSlug: "33-login-form"
  },
  {
    id: "animations-3d",
    title: "Animations, Keyframes & 3D Transforms",
    period: "Phase 4 • Micro-Interactions",
    level: "Advanced Level",
    description: "Built hardware-accelerated keyframe animations, glowing loaders, heartbeat pulses, and 3D card perspective rotations.",
    skills: ["@keyframes", "Transform 3D", "Perspective", "Transition Easing"],
    projectsCount: 18,
    highlightSlug: "55-heart-animation"
  },
  {
    id: "modern-css-lab",
    title: "Modern CSS & Production UI Platform",
    period: "Phase 5 • Current Master Stack",
    level: "Current Level: CSS Specialist",
    description: "Combining backdrop-filter glassmorphism, background masking, CSS container queries, and building a full SaaS playground platform for modern frontend developers.",
    skills: ["Glassmorphism", "Backdrop Filter", "Container Queries", "Custom Properties", "Vanilla JS Integration"],
    projectsCount: 62,
    highlightSlug: "6-debit-card"
  }
];
