import React, { useState } from "react";
import faqs from "../data/faqs";

function FAQ() {
  const [openedFaqIndex, setOpenedFaqIndex] = useState(null);

  const handleIconCLick = (idx) => {
    const currnetIdx = idx == openedFaqIndex ? null : idx;
    setOpenedFaqIndex(currnetIdx);
  };

  const FAQs = faqs.map((faq, idx) => (
    <div key={idx} className="pb-2 relative">
      <div
        onClick={() => handleIconCLick(idx)}
        style={{ height: openedFaqIndex === idx ? "auto" : "50px" }}
        className="cursor-pointer px-4 border-[rgba(255,67,26,0.9)] border-[2px] bg-black flex flex-col justify-center py-4"
      >
        <span>Q: {faq.question}</span>
        {openedFaqIndex === idx && <div>Ans: {faq.answer}</div>}
      </div>
      <div>
        <img
        onClick={() => handleIconCLick(idx)}
          src="\public\images\downIcon.png"
          className={
            openedFaqIndex === idx
              ? "absolute top-0 translate-y-1/2 right-1 rotate-180"
              : "absolute top-0 translate-y-1/2 right-1 cursor-pointer"
          }
        ></img>
      </div>
    </div>
  ));
  return (
    <section className="bg-black min-h-[100vh]">
      <div className="lg:px-24 sm:px-[8px] pt-2">
        <h1 className="text-white pb-2">{">>"} FAQ</h1>
        <div className="text-white">{FAQs}</div>
      </div>
    </section>
  );
}

export default FAQ;
