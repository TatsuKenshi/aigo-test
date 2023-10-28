import { useNavigate } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";

const MenuPreviewCard = ({ img, name, price, desc }) => {
  const navigate = useNavigate();

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
          {desc}
        </p>
        <p className="mt-4 text-[#d75b3f]">{price} rsd</p>
        <div className="mt-4 flex gap-x-4">
          <button
            className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold"
            onClick={() => {
              navigate("/menu");
            }}
          >
            Go to Menu
          </button>
        </div>
      </div>
    </article>
  );
};

export default MenuPreviewCard;
