import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useEffect, useState } from 'react';
import reactIcon from '../assets/frontendIcons/react.svg';
import jsIcon from '../assets/frontendIcons/javascript.svg';
import pythonIcon from '../assets/backendIcons/python.svg';
import nodejsIcon from '../assets/othersIcons/nodejs.svg';
import cssIcon from '../assets/frontendIcons/css.svg';
import PropTypes from 'prop-types';

export const CenterImage = ({ SECTION_HEIGHT }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [35, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [65, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ['170%', '100%']
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
      }}
    >
      <div className="flex flex-col justify-center items-center h-screen w-full relative overflow-hidden">
        <ZoomingDotGrid backgroundSize={backgroundSize} opacity={opacity} />
        <AnimatedInitials />
        <FloatingTechIcons />
        <TypewriterText />
      </div>
    </motion.div>
  );
};

CenterImage.propTypes = {
  SECTION_HEIGHT: PropTypes.number.isRequired,
};

const AnimatedInitials = () => (
  <motion.span
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeInOut' }}
    className="z-10 text-white font-mono font-black text-5xl sm:text-7xl select-none"
    style={{ letterSpacing: 2 }}
  >
    {'<YL/>'}
  </motion.span>
);

const techIcons = [
  { src: reactIcon, alt: 'React', orbit: 0 },
  { src: jsIcon, alt: 'JavaScript', orbit: 1 },
  { src: pythonIcon, alt: 'Python', orbit: 2 },
  { src: nodejsIcon, alt: 'NodeJS', orbit: 3 },
  { src: cssIcon, alt: 'CSS', orbit: 4 },
];

const FloatingTechIcons = () => {
  // Animate icons in a circular orbit
  const radius = 110;
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setAngle((a) => a + 0.01), 16);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute top-1/2 left-1/2" style={{ width: 0, height: 0 }}>
      {techIcons.map((icon, i) => {
        const theta = angle + i * ((2 * Math.PI) / techIcons.length);
        const x = Math.cos(theta) * radius;
        const y = Math.sin(theta) * radius;
        return (
          <motion.img
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            className="absolute"
            style={{
              left: x,
              top: y,
              width: 40,
              height: 40,
              filter: 'drop-shadow(0 0 8px #00eaff)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5 + i * 0.1,
              duration: 0.7,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

const typewriterTexts = [
  'SCROLL ME',
  'HI THERE',
  'I am Yanlin Li',
  'Ready to Explore My Portfolio',
  'Firstly, My Projects',
];

const TypewriterText = () => {
  const [displayed, setDisplayed] = useState('');
  const [textIdx, setTextIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  useEffect(() => {
    if (charIdx < typewriterTexts[textIdx].length) {
      const timeout = setTimeout(() => {
        setDisplayed(typewriterTexts[textIdx].slice(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 60);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIdx(0);
        setTextIdx((textIdx + 1) % typewriterTexts.length);
        setDisplayed('');
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, textIdx]);
  return (
    <motion.span
      className="mt-8 text-white font-black sm:text-4xl text-2xl z-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        textShadow:
          '0 2px 12px rgba(255,255,255,0.18), 0 1px 1px rgba(0,0,0,0.10)',
      }}
    >
      {displayed}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

// Minimalist zooming dot grid background
const ZoomingDotGrid = ({ backgroundSize, opacity }) => {
  // Grid settings
  const dotSpacing = 36;
  const dotRadius = 2.5;
  const gridSize = 900;
  const dotColor = '#334155'; // slate-800
  const dotColor2 = '#64748b'; // slate-400 (for subtle variation)
  const rows = Math.floor(gridSize / dotSpacing);
  const cols = Math.floor(gridSize / dotSpacing);
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      style={{
        width: '90vw',
        height: '90vh',
        maxWidth: gridSize,
        maxHeight: gridSize,
        opacity,
      }}
      animate={{}}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${gridSize} ${gridSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ scale: backgroundSize }}
      >
        {Array.from({ length: rows }).map((_, row) =>
          Array.from({ length: cols }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * dotSpacing + dotSpacing / 2}
              cy={row * dotSpacing + dotSpacing / 2}
              r={dotRadius}
              fill={(row + col) % 2 === 0 ? dotColor : dotColor2}
              opacity={0.7}
            />
          ))
        )}
      </motion.svg>
    </motion.div>
  );
};

ZoomingDotGrid.propTypes = {
  backgroundSize: PropTypes.any.isRequired,
  opacity: PropTypes.any.isRequired,
};
