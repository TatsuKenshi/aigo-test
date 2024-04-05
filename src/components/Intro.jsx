import { lazy, Suspense } from "react";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import SectionLoading from "./SectionLoading";

const SlickCarousel = lazy(() => import("./SlickCarousel"));

const Intro = ({ t }) => {
  const language = i18n.language;

  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("GalerijaNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("GalerijaText")}</p>
        <p className="mt-4 text-justify">{t("GalerijaText2")}</p>
      </div>

      <div className="text-center mt-8 max-w-[1200px] mx-auto">
        <Suspense fallback={<SectionLoading />}>
          <SlickCarousel />
        </Suspense>
      </div>
    </section>
  );
};

export default withNamespaces()(Intro);
