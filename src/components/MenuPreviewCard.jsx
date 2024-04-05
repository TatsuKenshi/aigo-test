import { useNavigate } from "react-router-dom";
import i18n from "../i18n";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";

const MenuPreviewCard = ({ img, name, price, descEng, descSrb }) => {
  const navigate = useNavigate();

  const language = i18n.language;

  return (
    <article className="bg-[#ffffef] rounded-t-lg hover:shadow-lg">
      <ProgressiveImage src={img} placeholder={heroSmall}>
        {(src, loading) => (
          <img
            src={src}
            alt={name}
            className={`image${
              loading ? " loading" : " loaded"
            } w-full rounded-t-lg h-[60vw] sm:h-96 md:h-40 lg:h-52`}
          />
        )}
      </ProgressiveImage>
      <div className="py-4 px-2">
        <p className="text-[#a62817] capitalize mb-2 font-bold">{name}</p>
        <p className="text-md text-slate-800 tracking-wide mb-4 text-justify">
          {language === "en"
            ? descEng.substring(0, 200)
            : descSrb.substring(0, 200)}
          ...
        </p>
        <p className="mt-4 text-[#d75b3f]">{price} rsd</p>
        <div className="mt-4 flex gap-x-4">
          <button
            className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold"
            onClick={() => {
              navigate("/menu");
            }}
          >
            {language === "en" ? "Go to Menu" : "Pogledajte Meni"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuPreviewCard;
