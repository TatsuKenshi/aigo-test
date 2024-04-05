import { useState, useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import axios from "axios";
import i18n from "../i18n";

const SingleMenuItem = () => {
  const [item, setItem] = useState({});
  const [sides, setSides] = useState([]);
  const [bigImage, setBigImage] = useState("");
  const myID = useParams();
  const navigate = useNavigate();
  const fullMenuItemUrl = process.env.REACT_APP_FULL_MENU_ITEM_URL;
  const sidesUrl = process.env.REACT_APP_SIDES_URL;
  const language = i18n.language;
  console.log(language);

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
          <span className="text-[#d75b3f] font-bold">Description: </span>{" "}
          {language === "en" ? item?.descEng : item?.descSrb}
        </p>
        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#d75b3f] font-bold">Options: </span>
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
          <span className="text-[#d75b3f]">Price: </span> {item?.price} rsd
        </p>

        <div className="w-full h-[1px] bg-slate-400 mb-4"></div>
        <p className="text-xl text-slate-800 tracking-wide mb-4">
          <span className="text-[#d75b3f] font-bold">Side Dishes: </span>
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

        <button
          className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold mt-4"
          onClick={() => {
            navigate("/menu");
          }}
        >
          Back to Menu
        </button>
        <p className="text-xl text-slate-800 tracking-wide mt-8">
          Side dishes, as well as options marked with an asterisk (*), are
          charged extra.
        </p>
      </div>
    </div>
  );
};

export default SingleMenuItem;
