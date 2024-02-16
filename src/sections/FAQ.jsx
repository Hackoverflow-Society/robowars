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
    <div key={idx} className="pb-2 relative">
      <div
        onClick={() => handleIconCLick(idx)}
        style={{ height: openedFaqIndex === idx ? "auto" : "fit-content" }}
        className="cursor-pointer px-4 border-[rgba(255,67,26,0.9)] border-[2px] bg-black flex flex-col justify-center py-4"
      >
        <div className="flex justify-between gap-2">
          <span className="w-full font-BebasNeue">Q: {faq.question}</span>
          <div className="w-6">
            <img
              onClick={() => handleIconCLick(idx)}
              src="\images\downIcon.png"
              className={
                openedFaqIndex === idx
                  ? "w-full grow aspect-square rotate-180"
                  : "w-full aspect-square cursor-pointer"
              }
            ></img>
          </div>
        </div>
        {openedFaqIndex === idx && (
          <div className="font-BebasNeue text-[#FF431A] mt-4">
            Ans: {faq.answer}
          </div>
        )}
      </div>
    </div>
  ));
  return (
    <motion.section
      initial={{ y: 500, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="min-h-[100vh]"
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
