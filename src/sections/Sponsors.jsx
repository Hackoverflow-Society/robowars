import sponsorData from "../data/Sponsors";
import { motion } from "framer-motion";
const Sponsors = () => {
  return (
    <>
      <motion.section
        initial={{ y: 300, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="h-[50vh] md:h-auto w-auto font-BebasNeue"
      >
        <h1 className="text-5xl text-center text-white ">SPONSORS</h1>
        <div className="flex flex-wrap items-center justify-around gap-10 p-6 mt-5 text-white max-md:gap-8">
          {sponsorData.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,

                translateY: 20,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                key={index}
                src={sponsor.img}
                alt={sponsor.alt}
                className="w-32 transition duration-300 grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Sponsors;
