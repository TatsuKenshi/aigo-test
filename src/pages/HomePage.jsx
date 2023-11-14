import { useEffect, lazy, Suspense } from "react";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import SectionLoading from "../components/SectionLoading";

const Intro = lazy(() => import("../components/Intro"));
const MenuPreview = lazy(() => import("../components/MenuPreview"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const HomePage = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Home", srTitle: "Početna" });
  }, [language, changeTitle]);

  return (
    <section>
      <Suspense fallback={<SectionLoading />}>
        <Intro />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <MenuPreview />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Testimonials />
      </Suspense>
    </section>
  );
};

export default withNamespaces()(HomePage);
