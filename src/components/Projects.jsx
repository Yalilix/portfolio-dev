import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import GamesHub from '../Images/GamesHub.png';
import PrestoPresentation from '../Images/Presto.png';
import InventoryManagementSystem from '../Images/IMS.png';

export const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl px-4 pt-[200px]">
      <motion.h2
        className="sticky top-72 text-6xl sm:text-9xl font-bold text-white text-center"
        style={{ opacity }}
      >
        Projects
      </motion.h2>
      <ParallaxImg
        src={GamesHub}
        alt="A hub with common games"
        start={200}
        end={-250}
        className="ml-12 w-6/12"
        text={'GamesHub'}
        link="https://yalilix.github.io/GameHub/"
      />
      <ParallaxImg
        src={PrestoPresentation}
        alt="Slides replica named Presto"
        start={200}
        end={-350}
        className="ml-auto w-8/12"
        text={'Presto Presentation'}
        link="https://z5520011-presto.vercel.app"
      />
      <ParallaxImg
        src={InventoryManagementSystem}
        alt="Inventory Management System"
        start={100}
        end={-200}
        className="mx-auto w-2/3"
        text={'Inventory Management System'}
        link="https://www.youtube.com/watch?v=N4vfZhB0j28"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end, text, link }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={className}
        ref={ref}
        style={{ transform, opacity }}
      >
        <img
          src={src}
          alt={alt}
          className="cursor-pointer hover:scale-90 duration-700 size-[65%] rounded-lg object-contain  shadow-sm shadow-white"
        />
        <span className=" flex w-[65%] text-white justify-center sm:text-2xl text-sm text-center">
          {text}
        </span>
      </motion.div>
    </a>
  );
};
