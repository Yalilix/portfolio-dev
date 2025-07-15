import { FiArrowRight } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const Nav = () => {
  const [scrolledDown, setScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 10) {
        setScrolledDown(true);
      } else if (currentY < lastScrollY) {
        setScrolledDown(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={
        `fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-white/10 shadow-lg border-b border-white/10 transition-all duration-500 ` +
        (scrolledDown ? 'rounded-2xl mx-4 mt-4' : '')
      }
      style={{
        // Optionally, add a little scale or shadow effect when rounded
        boxShadow: scrolledDown
          ? '0 8px 32px 0 rgba(60,60,120,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)'
          : undefined,
      }}
    >
      <span className="text-2xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent drop-shadow-md select-none animated-gradient">
        Yanlin Li
      </span>
      <div className="flex gap-4">
        <NavButton targetId="techstacks">Tech Stack</NavButton>
        <NavButton targetId="about-me">About Me</NavButton>
      </div>
    </nav>
  );
};

const NavButton = ({ children, targetId }) => (
  <button
    onClick={() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="relative flex items-center gap-1 text-md text-white font-semibold uppercase tracking-wide px-3 py-1 transition-transform duration-200 hover:scale-105 focus:outline-none"
  >
    <span className="relative z-10">{children}</span>
    <FiArrowRight className="ml-1" />
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left pointer-events-none" />
  </button>
);

NavButton.propTypes = {
  children: PropTypes.node.isRequired,
  targetId: PropTypes.string.isRequired,
};
