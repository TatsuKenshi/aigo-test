import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import axios from "axios";
import i18n from "../i18n";
import { useLanguageContext } from "../context/LanguageContext";
import glovo from "../assets/images/glovo-logo.png";
import wolt from "../assets/images/wolt-logo.png";

const SingleMenuItem = () => {
  const [item, setItem] = useState({});
  const [sides, setSides] = useState([]);
  const [bigImage, setBigImage] = useState("");
  const myID = useParams();
  const navigate = useNavigate();
  const fullMenuItemUrl = process.env.REACT_APP_FULL_MENU_ITEM_URL;
  const sidesUrl = process.env.REACT_APP_SIDES_URL;
  let language = i18n.language;
  const { currentLanguage } = useLanguageContext();

  const getSingleMenuItem = async () => {
    try {
      const response = await axios.get(`${fullMenuItemUrl}${myID?.id}`);
      const data = response?.data?.menuitem;
      setBigImage(data?.bigImg);
      setItem(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSideItems = async () => {
    try {
      const response = await axios.get(sidesUrl);
      const data = response?.data?.sides;
      setSides(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleMenuItem();
    getAllSideItems();
  }, []);

  return (
    <div className="mx-8 my-16 grid md:grid-cols-2 lg:max-w-[1200px] lg:mx-auto lg:px-8">
      <div className="">
        <ProgressiveImage src={bigImage} placeholder={heroSmall}>
          {(src, loading) => (
            <img
              src={bigImage}
              alt={item?.name}
              className={`image${
                loading ? " loading" : " loaded"
              } w-full mb-2 sm:mb-4 h-[50vw] md:h-[35vw] lg:h-[350px]`}
            />
          )}
        </ProgressiveImage>
        <div className="flex justify-between">
          {item?.imgs &&
            item?.imgs.map((image, index) => {
              return (
                <button
                  key={index}
                  className="w-[18%] h-[12vw] md:h-[6vw] lg:h-[60px] overflow-hidden"
                  onClick={() => {
                    setBigImage(item?.imgs[index]);
                  }}
                >
                  <img src={image} alt={image} className="w-full h-full" />
                </button>
              );
            })}
        </div>
      </div>

      <div className="mt-2 md:mt-0 md:pl-8">
        <p className="text-[#a62817] text-xl capitalize font-bold mb-4 lg:text-2xl">
          {item?.name}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4 text-justify">
          <span className="text-[#9e1918] font-bold">
            {currentLanguage === "en" ? "Description: " : "Opis: "}
          </span>{" "}
          {currentLanguage === "en" ? item?.descEng : item?.descSrb}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#9e1918] font-bold">
            {" "}
            {currentLanguage === "en" ? "Options: " : "Opcije: "}{" "}
          </span>
          {item?.options?.map((option, index) => {
            return (
              <button
                key={index}
                className="py-1 px-1 text-white bg-[#a62817] mx-2 my-2 rounded-lg cursor-default"
              >
                {option}
              </button>
            );
          })}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-[#a62817] text-xl font-bold mb-4 lg:text-2xl text-justify">
          <span className="text-[#9e1918]">
            {" "}
            {currentLanguage === "en" ? "Price: " : "Cena: "}
          </span>{" "}
          {item?.price} rsd
        </p>

        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#9e1918] font-bold">
            {" "}
            {currentLanguage === "en" ? "Side dishes: " : "Prilozi: "}{" "}
          </span>
          {sides.map((dish, index) => {
            return (
              <button
                key={index}
                className="py-1 px-1 text-white bg-[#a62817] mx-2 my-2 rounded-lg cursor-default"
              >
                {dish.name}
              </button>
            );
          })}
        </p>

        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-2xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#9e1918] font-bold">
            {" "}
            {currentLanguage === "en" ? "Order on: " : "Naručite na: "}{" "}
          </span>
          <div className="flex">
            <a
              href="https://glovoapp.com/rs/sr/beograd/aigo-eat-korean-restaurant-beg/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={glovo} alt="logo" className="w-12 h-12 mr-4" />
            </a>
            <a
              href="https://wolt.com/en/srb/belgrade/restaurant/aigoeat"
              target="_blank"
              rel="noreferrer"
            >
              <img src={wolt} alt="logo" className="w-12 h-12" />
            </a>
          </div>
        </p>

        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mt-8">
          {currentLanguage === "en"
            ? " Side dishes, as well as options marked with an asterisk (*), are charged extra."
            : "Prilozi i opcije označeni zvezdicom (*) se dodatno naplaćuju."}
        </p>

        <button
          className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold mt-4"
          onClick={() => {
            navigate("/menu");
          }}
        >
          {language === "en" ? "Back to menu" : "Nazad na meni"}
        </button>
      </div>
    </div>
  );
};

export default SingleMenuItem;
