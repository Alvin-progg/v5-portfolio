"use client";
import { useState } from "react";
import { collapsible } from "@/constants/collapsible";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);
  const faqData = collapsible;

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-col items-center justify-center gap-4 text-center"
      >
        <p className="font-semibold text-indigo-600 text-lg tracking-wide">
          Have any Questions?
        </p>
        <h2 className="text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="flex justify-center my-12 max-lg:my-8 gap-12 max-lg:gap-8 max-md:flex-col max-md:items-center px-8 max-lg:px-6 max-sm:px-4">
        <div className="my-8 max-md:my-6 max-w-3xl w-full">
          {faqData.map((item, index) => (
            <div
              data-aos="fade-ups" data-aos-duration="500"
              key={index}
              className="border-b border-gray-200 py-5 max-md:py-4 bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                aria-label="collapsible button"
                onClick={() => toggleItem(index)}
                className="w-full text-left flex items-center justify-between px-4"
              >
                <h2 className="flex gap-4 items-center text-xl max-lg:text-lg max-md:text-base font-semibold text-gray-800">
                  <MdKeyboardArrowDown
                    className={`text-indigo-600 text-2xl flex-shrink-0 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  {item.question}
                </h2>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100 mt-4"
                    : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div className="px-12 max-md:px-8 max-sm:px-6">
                  <p className="text-gray-600 text-base max-md:text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
