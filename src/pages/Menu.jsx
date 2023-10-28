import { useEffect, lazy, Suspense } from "react";
import { useOutletContext } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import SectionLoading from "../components/SectionLoading";
import { withNamespaces } from "react-i18next";

const MenuItemCard = lazy(() => import("../components/MenuItemCard"));
const SideDishCard = lazy(() => import("../components/SideDishCard"));

const Menu = () => {
  const { menuItemsShort, sideDishes } = useOutletContext();
  console.log(sideDishes);

  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Menu", srTitle: "Meni" });
  }, [language, changeTitle]);

  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">Main Courses</h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <div className="grid gap-4 lg:gap-8 max-w-[1200px] md:grid-cols-2 mx-auto">
        {menuItemsShort.map((item) => {
          return (
            <Suspense fallback={<SectionLoading />}>
              <MenuItemCard key={item.id} {...item} />
            </Suspense>
          );
        })}
      </div>

      {/* title div */}
      <div className="text-center mt-16 mb-4 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">Side Dishes</h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto mb-8">
        {sideDishes.map((item) => {
          return (
            <Suspense fallback={<SectionLoading />}>
              <SideDishCard key={item.id} {...item} />
            </Suspense>
          );
        })}
      </div>
    </section>
  );
};

export default withNamespaces()(Menu);
