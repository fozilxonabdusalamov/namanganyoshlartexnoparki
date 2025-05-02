import React, { useState } from "react";
import "./Question.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// data.js
const faqData = [
  {
    question: "Dasturchi bo‘lmoqchi edim, matematika kerak bo‘ladimi?",
    answer: '"Yaxshi dasturchi" bo‘lish uchun matematikani bilish zarur.',
  },
  {
    question: "Kompyuterim yo‘q edi dasturlash o‘rgansam bo‘ladimi?",
    answer:
      "Ha, albatta! Andijon Yoshlar Texnoparkida barcha shart-sharoitlar tayyorlangan.",
  },
  {
    question: "O‘quv kurslari qanchadan?",
    answer:
      "O‘quv kurslari 600 ming so‘mdan, Office-Pro va Kompyuter savodxonligi kurslari esa 300 ming so‘mdan.",
  },
  {
    question: "O‘quv kurslari qanchadan?",
    answer:
      "O‘quv kurslari 600 ming so‘mdan, Office-Pro va Kompyuter savodxonligi kurslari esa 300 ming so‘mdan.",
  },
];

function Question() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="container">
      <h1 className="heading">
        <span>Tez-tez</span> beriladigan savollar
      </h1>
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div onClick={() => toggle(index)} className="accordion-question">
            {item.question}
            <span>
              {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {openIndex === index && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Question;
