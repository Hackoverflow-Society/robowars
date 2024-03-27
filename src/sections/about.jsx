import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full flex justify-center items-center"
    >
      <div id="about" className="lg:pl-36 px-8">
        <h1 className="text-[#FF431A] font-BebasNeue font-[400] pb-2 text-[3vmax]">
          &gt;&gt; BATTLEBOTS
        </h1>
        <div className="flex lg:flex-row flex-col-reverse justify-center lg:gap-14 gap-8 pt-8 ">
          <div className="lg:w-[50%]">
            <p className="flex flex-wrap text-white lg:leading-6 lg:text-[16px] md:text-[14px] text-[12px] text-justify font-babasneue font-semibold opacity-[76%]">
              Welcome to the electrifying world of BattleBots, where metal warriors clash in the ultimate test of engineering and strategy! This is your gateway to the adrenaline-fueled realm of robot combat, where teams of ingenious builders pit their custom creations against each other in fierce battles of wit and metal.
              <span className="pt-1">
                Explore the intricacies of the BattleBots arena, where every corner holds peril and every move could be the difference between victory and defeat. Engage with a passionate community of fans, share your thoughts, and connect with like-minded enthusiasts who share your love for all things robotic.
              </span>
              <span className="pt-1">
              Get ready to unleash your inner robot warrior and join us on an unforgettable journey into the heart of BattleBots!.
              </span>
            </p>
           
            <br />
            <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
              <span className="text-[#FF431A]">WEIGHT CATEGORY: </span> 15KGS
            </p>
            <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
              <span className="text-[#FF431A]">VENUE: </span> CHANDIGARH
              UNIVERSTIY, MOHALI, PUNJAB{" "}
            </p>
            <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] opacity-[76%] font-babasneue font-semibold">
              <span className="text-[#FF431A]">DATES:</span> 1 MAR - 3 MAR
            </p>
          </div>
          <div className="lg:w-[50%] flex justify-center">
            <img src="/images/Mask group.png" className="lg:w-[80%] " alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
