import React, { useState, useEffect } from "react";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";

const Testimonials = ({ t }) => {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const displayItem = items?.[index];
  const testimonialsUrl = process.env.REACT_APP_TESTIMONIALS_URL;

  const language = i18n.language;

  const getAllTestimonials = async () => {
    try {
      const response = await axios.get(testimonialsUrl);
      const data = response.data.testimonials;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const nextItem = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % items.length;
      return newIndex;
    });
  };

  const prevItem = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + items.length) % items.length;
      return newIndex;
    });
  };

  useEffect(() => {
    getAllTestimonials();
  }, []);

  return (
    <section className="p-8">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("TestimonialsNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("TestimonialsText")}</p>
        <p className="mt-4 text-justify">{t("TestimonialsText2")}</p>
      </div>

      <article className="mt-8 max-w-[900px] mx-auto hover:shadow-lg">
        <div className="w-full my-4 flex justify-between">
          <button type="button" className="float-left" onClick={prevItem}>
            <FaChevronLeft size="3rem" className="fill-[#a62817]" />
          </button>
          {/* <img
            src={displayItem?.image}
            alt={displayItem?.name}
            className="w-32 h-32 rounded-full"
          /> */}
          <button type="button" className="float-right" onClick={nextItem}>
            <FaChevronRight size="3rem" className="fill-[#a62817]" />
          </button>
        </div>
        <div className="py-4 px-2 min-h-[300px] sm:min-h-[100px] md:min-h-[100px]">
          <p className="w-full mb-4 text-[#a62817] capitalize font-bold text-2xl">
            {displayItem?.name}
          </p>
          <p className="w-full text-md text-slate-800 text-justify">
            {language === "en" ? displayItem?.quoteEng : displayItem?.quoteSrb}
          </p>
        </div>
      </article>
    </section>
  );
};

export default withNamespaces()(Testimonials);
