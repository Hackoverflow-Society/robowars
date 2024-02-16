import { motion } from "framer-motion";

export default function Prize() {
  return (
    <motion.section
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="min-h-[50vh] lg:min-h-screen w-auto"
    >
      <div className="text-white lg:px-36 p-8">
        <h1 className="text-[3vmax] text-[#FF431A] font-BebasNeue ">
          &gt;&gt; PRIZES
        </h1>
        <h1 className="lg:text-[16px] md:text-[14px] font-BebasNeue ">
          CONQUER THE BATTLEGROUND AND ERAN YOUR MEDALS
        </h1>
      </div>
      <div className="flex flex-col lg:pt-10 ">
        <div className="flex flex-col items-center">
          <img src="\images\1st.png" className="w-[12vw]" alt="" />
          <h1 className="text-white lg:text-[30px] text-center font-BebasNeue ">
            1ST PRIZE
          </h1>
          <h1 className="text-[#FF431A] lg:text-[40px] text-center font-BebasNeue font-[400] ">
            &#8377;XX,XXX
          </h1>
        </div>
        <div className="flex justify-center lg:gap-x-[40rem] md:gap-60 gap-28 -translate-y-[40%]">
          <div className="flex flex-col items-center ">
            <img src="\images\3rd.png" className="w-[12vw]" alt="" />
            <h1 className="text-white lg:text-[30px] text-center font-BebasNeue ">
              3RD PRIZE
            </h1>
            <h1 className="text-[#FF431A] lg:text-[40px] text-center font-BebasNeue font-[400]">
              &#8377;XX,XXX
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <img src="\images\2nd.png" className="w-[15vw]" alt="" />
            <h1 className="text-white lg:text-[30px] text-center font-BebasNeue ">
              2ND PRIZE
            </h1>
            <h1 className="text-[#FF431A] lg:text-[40px] text-center font-BebasNeue font-[400]">
              &#8377;XX,XXX
            </h1>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
