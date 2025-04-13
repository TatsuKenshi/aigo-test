import MenuPreviewCard from "./MenuPreviewCard";
import axios from "axios";
import { withNamespaces } from "react-i18next";
import { useState, useEffect } from "react";

const MenuPreview = ({ t }) => {
  const [items, setItems] = useState([]);
  const menuPreviewImagesUrl = process.env.REACT_APP_MENU_PREVIEW_IMAGES_URL;

  const getAllMenuPreviews = async () => {
    try {
      const response = await axios.get(menuPreviewImagesUrl);
      const data = response.data.menupreviews;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMenuPreviews();
  }, []);

  return (
    <section className="py-8 px-8 bg-white">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("AigoBestsellersNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("AigoBestsellersText")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-4">
        {items.map((item) => {
          const id = item._id;
          return <MenuPreviewCard key={id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default withNamespaces()(MenuPreview);
