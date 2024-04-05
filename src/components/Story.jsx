import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import axios from "axios";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const Story = ({ t }) => {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const displayItem = items?.[index];
  const storyItemsUrl = process.env.REACT_APP_STORY_ITEMS_URL;

  const getAllStoryItems = async () => {
    try {
      const response = await axios.get(storyItemsUrl);
      const data = response.data.storyitems;
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
    getAllStoryItems();
  }, []);

  return (
    <section className="p-8">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("AigoStoryNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("AigoStoryText")}</p>
      </div>

      <article className="mt-8 max-w-[900px] mx-auto hover:shadow-lg">
        <div className="w-full mb-4 h-[250px] sm:h-[450px]">
          <img
            src={displayItem?.image}
            alt={displayItem?.name}
            className="w-full h-full"
          />
        </div>
        <div className="pt-2 pb-12">
          <button type="button" className="float-left" onClick={prevItem}>
            <FaChevronLeft size="3rem" className="fill-[#a62817]" />
          </button>
          <button type="button" className="float-right" onClick={nextItem}>
            <FaChevronRight size="3rem" className="fill-[#a62817]" />
          </button>
        </div>
        <div className="py-4 px-2 min-h-[300px] sm:min-h-[250px] md:min-h-[200px]">
          <p className="w-full mb-4 text-[#a62817] capitalize font-bold text-2xl">
            {displayItem?.name}
          </p>
          <p className="w-full text-md text-slate-800 text-justify">
            {displayItem?.textEng}
          </p>
        </div>
      </article>
    </section>
  );
};
export default withNamespaces()(Story);
