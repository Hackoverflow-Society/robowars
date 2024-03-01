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
            <p className="text-white lg:leading-6 lg:text-[16px] md:text-[14px] text-[12px] text-justify font-babasneue font-semibold opacity-[76%]">
              Lorem ipsum dolor sit amet consectetur. Ornare at elit ut ut arcu
              interdum. Curabitur imperdiet pretium mauris eu mattis
              pellentesque et imperdiet. Volutpat nisl in nunc in porttitor
              mauris morbi. Ultrices gravida augue posuere aliquam. Nibh
              malesuada tempor in.
            </p>
            <br />
            <p className="text-white lg:leading-6 lg:text-[16px] md:text-[14px] text-[12px] text-justify font-babasneue font-semibold opacity-[76%]">
              Nullam scelerisque ut elit sed amet cursus convallis elit nec.
              Eget lectus sed nunc semper. Facilisis sem viverra vestibulum nunc
              nec sed. Et velit tempus diam a habitant faucibus. Tempus morbi
              nisl leo purus urna. Dui dolor ut arcu condimentum praesent
              vulputate. Tempor orci eget nt faucibus. Tempus morbi nisl leo
              purus urna. Dui dolor ut arcu.
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
