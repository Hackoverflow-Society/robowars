import { useState } from "react";
import faqs from "../data/faqs";
import { motion } from "framer-motion";

export function FAQ() {
  const [openedFaqIndex, setOpenedFaqIndex] = useState(null);

  const handleIconCLick = (idx) => {
    const currnetIdx = idx == openedFaqIndex ? null : idx;
    setOpenedFaqIndex(currnetIdx);
  };

  const FAQs = faqs.map((faq, idx) => (
    <div key={idx} className="relative pb-2">
      <motion.div
        key={idx}
        initial={{
          opacity: 0,

          translateY: 50,
        }}
        whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          layout
          onClick={() => handleIconCLick(idx)}
          style={{ height: openedFaqIndex === idx ? "auto" : "fit-content" }}
          className="cursor-pointer px-4 border-[rgba(255,67,26,0.9)] border-[2px] bg-black flex flex-col justify-center py-4"
        >
          <div className="flex justify-between gap-2">
            <span className="w-full font-BebasNeue">{faq.question}</span>
            <div className="w-6">
              <img
                onClick={() => handleIconCLick(idx)}
                src="\images\downIcon.png"
                className={
                  openedFaqIndex === idx
                    ? "w-full grow aspect-square transition-all duration-300 rotate-180"
                    : "w-full aspect-square cursor-pointer"
                }
              ></img>
            </div>
          </div>

          {openedFaqIndex === idx && (
            <>
              <hr className="mt-2 w-[100%] border-[#6e6e6e]"></hr>
              <div className="mt-4 text-gray-300 font-BebasNeue">
                {faq.answer}
              </div>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  ));
  return (
    <motion.section
      initial={{ y: 300, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="h-auto"
    >
      <div className="lg:px-36 p-8 pt-2">
        <h1 className="text-[#FF431A] font-BebasNeue font-[400] pb-2 text-[3vmax]">
          {">>"} FAQ
        </h1>
        <div className="text-white">{FAQs}</div>
      </div>
    </motion.section>
  );
}
