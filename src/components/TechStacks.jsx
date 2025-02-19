import { motion } from 'framer-motion';

export const TechStacks = ({ techSections, icons }) => {
  return (
    <section
      id="techstacks"
      className="mx-auto max-w-5xl px-6 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="mb-10 sm:text-7xl text-5xl text-center font-stretch-expanded font-black uppercase text-zinc-50 border-b border-zinc-800 pb-6"
      >
        Tech Stack
      </motion.h1>
      {techSections.map((section, index) => (
        <>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.75 }}
            className="mb-10 sm:text-4xl text-2xl text-center font-black uppercase text-zinc-50"
            key={index}
          >
            {section}
          </motion.h1>
          <div className="flex flex-wrap justify-center">
            {icons[index].map(({ name, src }, index) => (
              <TechstackItem title={name}>
                <img
                  src={src}
                  alt={`${name} symbol`}
                  className="sm:w-2/6 w-4/6 grayscale group-hover:grayscale-0 duration-700 group-hover:scale-130"
                />
              </TechstackItem>
            ))}
          </div>
        </>
      ))}
    </section>
  );
};

const TechstackItem = ({ title, children = null, key }) => {
  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
      className="group mb-6 flex items-center justify-between px-3 pb-6"
      key={key}
    >
      <div
        className="flex flex-col items-center justify-center border border-zinc-800 p-6 rounded-2xl sm:w-36 sm:h-36 w-21 h-21 bg-zinc-950 group-
          hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),_0_1px_3px_rgba(0,0,0,0.06)] shadow-white duration-700"
      >
        {children}
        <p className="mt-1.5 sm:text-lg text-xs text-zinc-50">{title}</p>
      </div>
    </motion.div>
  );
};
