import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import i18n from "../i18n";

const SideDishCard = ({ img, name, price, descEng, descSrb }) => {
  const language = i18n.language;

  return (
    <article className="flex justify-between flex-wrap py-4 hover:shadow-lg">
      <div className="w-full md:w-4/12 max-h-[60vw] sm:max-h-[400px] md:max-h-[200px]">
        <ProgressiveImage src={img} placeholder={heroSmall}>
          {(src, loading) => (
            <img
              src={src}
              alt={name}
              className={`image${
                loading ? " loading" : " loaded"
              } w-full h-[60vw] sm:h-[400px] md:h-[200px]`}
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="my-4 md:w-8/12 md:my-0 md:pl-4 md:max-h-[200px] relative">
        <p className="text-[#a62817] capitalize text-lg font-extrabold">
          {name}
        </p>
        <p className="text-lg text-slate-800 mb-4 text-justify">
          {language === "en" ? descEng : descSrb}
        </p>
        <p className="text-[#d75b3f] text-lg font-bold float-right md:float-left md:bottom-0 absolute">
          {price} rsd
        </p>
      </div>
    </article>
  );
};

export default SideDishCard;
