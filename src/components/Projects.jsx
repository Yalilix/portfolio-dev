/* eslint-disable react/prop-types */
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
import Spotz from '../Images/spotz.png';
import SussyUni from '../Images/sussyuni.png';

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
        className="sticky top-72 text-7xl sm:text-9xl font-bold text-white text-center font-stretch-expanded"
        style={{ opacity }}
      >
        Projects
      </motion.h2>
      <ParallaxImg
        src={GamesHub}
        alt="A hub with common games"
        start={200}
        end={-250}
        className="ml-12 w-8/12"
        text={'GamesHub'}
        link="https://yalilix.github.io/GameHub/"
        position={'right'}
      />
      <ParallaxImg
        src={PrestoPresentation}
        alt="Slides replica named Presto"
        start={200}
        end={-350}
        className="ml-auto w-8/12"
        text={'Presto Presentation'}
        link="https://z5520011-presto.vercel.app"
        position={'left'}
      />
      <ParallaxImg
        src={InventoryManagementSystem}
        alt="Inventory Management System"
        start={100}
        end={-200}
        className="mx-auto w-2/3"
        text={'Inventory Management System'}
        link="https://www.youtube.com/watch?v=N4vfZhB0j28"
        position={'right'}
      />
      <ParallaxImg
        src={Spotz}
        alt="Spotz project screenshot"
        start={150}
        end={-300}
        className="ml-12 w-8/12"
        text={'Spotz'}
        link="https://spotz.netlify.app"
        position={'left'}
      />
      <ParallaxImg
        src={SussyUni}
        alt="SussyUni project screenshot"
        start={150}
        end={-300}
        className="ml-auto w-8/12"
        text={'SussyUni'}
        link="https://www.sussyuni.com"
        position={'right'}
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
    <motion.div
      className={className + ' group flex'}
      ref={ref}
      style={{ transform, opacity }}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="z-1 block"
      >
        <img
          src={src}
          alt={alt}
          className="cursor-pointer duration-700 rounded-lg object-contain shadow-sm shadow-white h-56"
        />
        <span className="flex w-full text-white sm:text-2xl text-sm justify-center pt-1">
          {text}
        </span>
      </a>
      {/* <div
          className={`bg-deepNavy w-fit-content sm:min-w-48 min-w-22 sm:max-h-40 max-h-24 my-3 py-1.5 rounded-tr-2xl
                    rounded-br-2xl text-white group-hover:opacity-100 opacity-100 duration-700
                    text-sm sm:text-base font-semibold text-center ${
                      position === 'right' ? 'right-0' : 'left-0'
                    }`}
        >
          hi
        </div> */}
    </motion.div>
  );
};
