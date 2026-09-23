import { type Variants, type Transition } from 'motion/react';

// Coherent, technical, premium motion tokens
export const transitionPresets = {
  fast: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } as Transition,
  base: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } as Transition,
  slow: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } as Transition,
  stagger: 0.08,
};

export const viewportConfig = {
  once: true,
  margin: '-80px',
};

// Reusable Framer Motion Variants
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionPresets.base,
  },
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPresets.base,
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitionPresets.base,
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const pipelineStepVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitionPresets.base,
  },
};
