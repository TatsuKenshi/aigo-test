import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/loading-small.jpeg";
import i18n from "../i18n";

const MenuItemCard = ({ _id: id, img, name, price, descEng, descSrb }) => {
  const { setItem } = useOutletContext();
  const language = i18n.language;

  return (
    <article className="hover:shadow-lg p-1">
      <div className="w-full max-h-[60vw] sm:max-h-[400px] md:max-h-[300px] lg:max-h-[400px]">
        <ProgressiveImage src={img} placeholder={heroSmall}>
          {(src, loading) => (
            <img
              src={src}
              alt={name}
              className={`image${
                loading ? " loading" : " loaded"
              } w-full rounded-t-md h-[60vw] sm:h-[50vw] md:h-[30vw] lg:max-h-[400px]`}
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="my-2 text-lg font-extrabold">
        <p className="text-[#a62817] capitalize">{name}</p>
        <p className="text-[#9e1918]">{price} rsd</p>
      </div>
      <div className="h-content md:h-56 lg:h-44 xl:h-40">
        <p className="text-xl text-slate-800 text-justify">
          {language === "en"
            ? descEng.substring(0, 250)
            : descSrb.substring(0, 250)}
          ...
        </p>
      </div>
      <Link to={`/menuitem/${id}`}>
        <button
          type="button"
          className="w-full py-3 bg-[#a62817] rounded-md text-white mt-2"
          onClick={() => setItem(id)}
        >
          {language === "en" ? "More info" : "Više informacija"}
        </button>
      </Link>
    </article>
  );
};

export default MenuItemCard;
