import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center w-full min-h-screen"
    >
<<<<<<< HEAD
      <div id="about" className="lg:pl-36 px-8">
=======
      <div className="px-8 lg:pl-36">
>>>>>>> db4f4b62f517d4913575ad3f59a7219d303b9fcf
        <h1 className="text-[#FF431A] font-BebasNeue font-[400] pb-2 text-[3vmax]">
          &gt;&gt; BATTLEBOTS
        </h1>
        <div className="flex flex-col-reverse justify-center gap-8 pt-8 lg:flex-row lg:gap-14 ">
          <div className="lg:w-[50%]">
            <motion.div
              key={2}
              initial={{
                opacity: 0,

                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-white lg:leading-6 lg:text-[16px] md:text-[14px] text-[12px] text-justify font-babasneue font-semibold opacity-[76%]">
                Lorem ipsum dolor sit amet consectetur. Ornare at elit ut ut
                arcu interdum. Curabitur imperdiet pretium mauris eu mattis
                pellentesque et imperdiet. Volutpat nisl in nunc in porttitor
                mauris morbi. Ultrices gravida augue posuere aliquam. Nibh
                malesuada tempor in.
              </p>
            </motion.div>
            <br />
            <motion.div
              key={2}
              initial={{
                opacity: 0,

                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <p className="text-white lg:leading-6 lg:text-[16px] md:text-[14px] text-[12px] text-justify font-babasneue font-semibold opacity-[76%]">
                Nullam scelerisque ut elit sed amet cursus convallis elit nec.
                Eget lectus sed nunc semper. Facilisis sem viverra vestibulum
                nunc nec sed. Et velit tempus diam a habitant faucibus. Tempus
                morbi nisl leo purus urna. Dui dolor ut arcu condimentum
                praesent vulputate. Tempor orci eget nt faucibus. Tempus morbi
                nisl leo purus urna. Dui dolor ut arcu.
              </p>
            </motion.div>
            <br />
            <motion.div
              key={2}
              initial={{
                opacity: 0,

                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="">
                <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
                  <span className="text-[#FF431A]">WEIGHT CATEGORY: </span>{" "}
                  15KGS
                </p>
                <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
                  <span className="text-[#FF431A]">VENUE: </span> CHANDIGARH
                  UNIVERSTIY, MOHALI, PUNJAB{" "}
                </p>
                <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
                  <span className="text-[#FF431A]">DATES:</span> 1 MAR - 3 MAR
                </p>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-[50%] flex justify-center">
            <motion.div
              key={2}
              initial={{
                opacity: 0,

                translateY: 50,
              }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <img
                src="/images/Mask group.png"
                className="lg:w-[80%] "
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
