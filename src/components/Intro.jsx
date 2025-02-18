import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export const Intro = () => {
  return (
    <section id="about-me" className="mx-auto max-w-5xl px-6 py-48 text-white">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        About Me
      </motion.h1>
      <IntroItem
        title="Introduction 👋🏻"
        desc="Hi there once again. I am currently a second year studying at UNSW pursuing a Bachelor of Computer Science.
            I am building my skills in web development and backend development. When I was developing this portfolio, 
            I wanted to learn something new and decided to try out Framer Motion for animations. Honestly, I love seeing websites
            having smooth and crazy animations so I thought why not try it out myself."
      />
      <IntroItem
        title="Life 🗺️"
        desc="I am currently living in Sydney, Australia as a full-time student and casual worker working at 
        multiple jobs, including freelance web development (so-so level). Trying to balance my life between work, study, and social life is quite challenging,
        but motivates me to keep going and strive for the best. "
      />
      <IntroItem
        title="Hobby 🧗🏻 🏀 🤓☝🏻"
        desc="I love/enjoy doing physical activities such as going to the gym, bouldering with friends,
        playing basketball, and solving leetcode problems. I also love to eat and try out new cuisines/foods. Whenever my schedule permits me or my mood feels amazing, 
        I try to be more outgoing by meeting new people and trying out new things."
      />
      <IntroItem
        title="Socials 📱"
        desc="Feel free to add or connect with me on these platforms 🙃"
      >
        <div className="flex gap-4 justify-evenly">
          <a
            href="https://www.instagram.com/yali_il8/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-white w-fit-content rounded-lg py-2 px-4 text-zinc-950 mt-4 hover:bg-blue-950 hover:text-white hover:scale-120 duration-700"
          >
            <FaInstagram size={25} />
          </a>
          <a
            href="https://github.com/Yalilix"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-white w-fit-content rounded-lg py-2 px-4 text-zinc-950 mt-4 hover:bg-blue-950 hover:text-white hover:scale-120 duration-700"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/yanlinli168/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-white w-fit-content rounded-lg py-2 px-4 text-zinc-950 mt-4 hover:bg-blue-950 hover:text-white hover:scale-120 duration-700"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
      </IntroItem>
      <IntroItem
        title="Resume 📄"
        desc="Soon... feeling shy might not post (def not posting unless I NEEEEEEED to hehe)"
      />
    </section>
  );
};

const IntroItem = ({ title, desc, children = null }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-6"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm text-zinc-500">{desc}</p>
        {children}
      </div>
    </motion.div>
  );
};
