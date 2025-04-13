import { useState, useEffect } from "react";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import MenuItemCard from "../components/MenuItemCard";
import SideDishCard from "../components/SideDishCard";
import axios from "axios";

const Menu = ({ t }) => {
  // const { menuItemsShort, sideDishes } = useOutletContext();
  const [menuItems, setMenuItems] = useState([]);
  const [sides, setSides] = useState([]);
  const [addons, setAddons] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const menuItemsUrl = process.env.REACT_APP_MENU_ITEMS_URL;
  const sidesUrl = process.env.REACT_APP_SIDES_URL;
  const addonsUrl = process.env.REACT_APP_ADDONS_URL;
  const dessertsUrl = process.env.REACT_APP_DESSERTS_URL;

  const getAllMenuItems = async () => {
    try {
      const response = await axios.get(menuItemsUrl);
      const data = response.data.shortmenuitems;
      setMenuItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllSideItems = async () => {
    try {
      const response = await axios.get(sidesUrl);
      const data = response.data.sides;
      setSides(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllAddonItems = async () => {
    try {
      const response = await axios.get(addonsUrl);
      const data = response.data.addons;
      setAddons(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllDessertItems = async () => {
    try {
      const response = await axios.get(dessertsUrl);
      const data = response.data.desserts;
      setDesserts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Menu", srTitle: "Meni" });
    getAllMenuItems();
    getAllSideItems();
    getAllAddonItems();
    getAllDessertItems();
  }, [language, changeTitle]);

  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("MeniGlavnaJelaNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("MeniGlavnaJelaText")}</p>
        <p className="mt-4 text-justify">{t("MeniGlavnaJelaText2")}</p>
      </div>

      <div className="grid gap-4 lg:gap-8 max-w-[1200px] md:grid-cols-2 mx-auto">
        {menuItems.map((item) => {
          return <MenuItemCard key={item._id} {...item} />;
        })}
      </div>

      {/* title div */}
      <div className="text-center mt-16 mb-4 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("MeniPriloziNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("MeniPriloziText")}</p>
        <p className="mt-4 text-justify">{t("MeniPriloziText2")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto mb-8">
        {sides.map((item) => {
          return <SideDishCard key={item._id} {...item} />;
        })}
      </div>

      {/* title div */}
      <div className="text-center mt-16 mb-4 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("MeniDodaciNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("MeniDodaciText")}</p>
        <p className="mt-4 text-justify">{t("MeniDodaciText2")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto mb-8">
        {addons.map((item) => {
          return <SideDishCard key={item._id} {...item} />;
        })}
      </div>

      {/* title div */}
      <div className="text-center mt-16 mb-4 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("MeniDesertiNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("MeniDesertiText")}</p>
        <p className="mt-4 text-justify">{t("MeniDesertiText2")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto mb-8">
        {desserts.map((item) => {
          return <SideDishCard key={item._id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default withNamespaces()(Menu);
