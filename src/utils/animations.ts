// Animations 
import { Variants } from 'framer-motion';

// ==================== VARIANTS ====================

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// Slide animations
export const slideInUp: Variants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInDown: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const scaleInCenter: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Stagger animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Stagger items
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// ==================== SPECIAL EFFECTS ====================

// Floating animation
export const floating: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Pulsing animation
export const pulse: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Glowing animation
export const glow: Variants = {
  initial: { boxShadow: '0 0 20px rgba(0,240,255,0)' },
  animate: {
    boxShadow: [
      '0 0 20px rgba(0,240,255,0)',
      '0 0 40px rgba(0,240,255,0.3)',
      '0 0 20px rgba(0,240,255,0)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Rotating animation
export const rotate: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ==================== HOVER ANIMATIONS ====================

// Scale up on hover
export const hoverScale = {
  scale: 1.05,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  },
};

// Scale down on hover
export const hoverScaleDown = {
  scale: 0.95,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  },
};

// Lift on hover
export const hoverLift = {
  y: -5,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 20,
  },
};

// Glow on hover
export const hoverGlow = {
  boxShadow: '0 0 30px rgba(0,240,255,0.3)',
  transition: {
    duration: 0.3,
  },
};

// ==================== PAGE TRANSITIONS ====================

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const pageTransitionScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ==================== EASING FUNCTIONS ====================

export const easing = {
  easeInOut: [0.25, 0.1, 0.25, 1],
  easeOut: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  elasticOut: [0.25, 0.1, 0.25, 1],
  spring: {
    type: 'spring',
    stiffness: 400,
    damping: 25,
  },
  springHeavy: {
    type: 'spring',
    stiffness: 600,
    damping: 30,
  },
  springLight: {
    type: 'spring',
    stiffness: 200,
    damping: 15,
  },
};

// ==================== SCROLL ANIMATIONS ====================

export const scrollReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
};

export const scrollRevealLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
};

export const scrollRevealRight: Variants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
};

export const scrollRevealScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// ==================== CARD ANIMATIONS ====================

export const cardHover = {
  whileHover: {
    y: -8,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
};

export const card3D = {
  whileHover: {
    rotateX: 5,
    rotateY: 5,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 20,
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

export const cardGlow = {
  whileHover: {
    boxShadow: '0 0 40px rgba(0,240,255,0.15)',
    transition: {
      duration: 0.3,
    },
  },
};

// ==================== TEXT ANIMATIONS ====================

export const textReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

export const textGradient = {
  background: 'linear-gradient(135deg, #00F0FF 0%, #7000FF 50%, #FF006E 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export const textGlow = {
  textShadow: '0 0 40px rgba(0,240,255,0.3)',
};

// ==================== IMAGE ANIMATIONS ====================

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
};

export const imageZoomHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
};

// ==================== LOADING ANIMATIONS ====================

export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const loadingPulse = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const loadingProgress = {
  initial: { width: '0%' },
  animate: {
    width: '100%',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

// ==================== MENU ANIMATIONS ====================

export const menuSlide: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
};

export const menuItem: Variants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easing.easeOutQuart,
    },
  },
};

// ==================== NOTIFICATION ANIMATIONS ====================

export const notificationSlide: Variants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 30,
    },
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

// ==================== MODAL ANIMATIONS ====================

export const modalOverlay: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const modalContent: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: {
      duration: 0.3,
    },
  },
};

// ==================== TYPEWRITER EFFECT ====================

export const cursorBlink = {
  animate: {
    opacity: [1, 0, 1],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'stepEnd',
    },
  },
};

// ==================== UTILITY FUNCTIONS ====================

export const getTransition = (delay: number = 0, duration: number = 0.6) => ({
  duration,
  delay,
  ease: easing.easeOutQuart,
});

export const getSpringTransition = (stiffness: number = 400, damping: number = 25) => ({
  type: 'spring',
  stiffness,
  damping,
});

export const staggerChildren = (stagger: number = 0.1, delay: number = 0.2) => ({
  staggerChildren: stagger,
  delayChildren: delay,
});

// ==================== EXPORT ALL ====================

export const animations = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  fadeInScale,
  slideInUp,
  slideInDown,
  slideInLeft,
  slideInRight,
  scaleIn,
  scaleInCenter,
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,
  staggerItemScale,
  floating,
  pulse,
  glow,
  rotate,
  hoverScale,
  hoverScaleDown,
  hoverLift,
  hoverGlow,
  pageTransition,
  pageTransitionScale,
  scrollReveal,
  scrollRevealLeft,
  scrollRevealRight,
  scrollRevealScale,
  cardHover,
  card3D,
  cardGlow,
  textReveal,
  textGradient,
  textGlow,
  imageReveal,
  imageZoomHover,
  loadingSpinner,
  loadingPulse,
  loadingProgress,
  menuSlide,
  menuItem,
  notificationSlide,
  modalOverlay,
  modalContent,
  cursorBlink,
  easing,
};

export default animations;