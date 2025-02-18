import { FiArrowRight } from 'react-icons/fi';

export const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <span className="text-xl">Yanlin Li</span>
      <button
        onClick={() => {
          document.getElementById('techstacks')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="flex items-center gap-1 text-md text-white cursor-pointer hover:scale-120 hover:duration-700"
      >
        Tech Stack <FiArrowRight />
      </button>
      <button
        onClick={() => {
          document.getElementById('about-me')?.scrollIntoView({
            behavior: 'smooth',
          });
        }}
        className="flex items-center gap-1 text-md text-white cursor-pointer hover:scale-120 hover:duration-700"
      >
        About Me <FiArrowRight />
      </button>
    </nav>
  );
};
