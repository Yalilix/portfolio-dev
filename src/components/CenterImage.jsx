import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
export const CenterImage = ({ SECTION_HEIGHT }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [35, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [65, 100]);

  // clip the image to a polygon shape
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // zoom in the background image from 170% to 100%
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ['170%', '100%']
  );

  // fade out the background image from 1 to 0
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
      <TextsFade SECTION_HEIGHT={SECTION_HEIGHT} />
    </motion.div>
  );
};

export const TextsFade = ({ SECTION_HEIGHT }) => {
  const texts = [
    'SCROLL ME',
    'HI THERE',
    'I am Yanlin Li',
    'Ready to Explore My Portfolio',
    'Firstly, My Projects',
  ];

  return (
    <div className="bg-deepNavy flex flex-col justify-center items-center h-screen gap-0 text-white">
      {texts.map((text, index) => (
        <motion.span
          key={index}
          initial={{
            y: (index + 1) * 100 - (index + 1) * (index + 1) * 8,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 0.75 }}
          className={
            index === 0 || index === texts.length - 1
              ? 'sm:text-4xl text-md font-black'
              : 'sm:text-2xl text-sm'
          }
        >
          {text}
        </motion.span>
      ))}
    </div>
  );
};
