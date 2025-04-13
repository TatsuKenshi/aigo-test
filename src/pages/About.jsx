import { useEffect, lazy, Suspense } from "react";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import SectionLoading from "../components/SectionLoading";

const Team = lazy(() => import("../components/Team"));
// const Story = lazy(() => import("../components/Story"));
const FuturePlans = lazy(() => import("../components/FuturePlans"));

const About = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "About", srTitle: "O nama" });
  }, [language, changeTitle]);

  return (
    <div>
      {/* <Suspense fallback={<SectionLoading />}>
        <Story></Story>
      </Suspense> */}
      <Suspense fallback={<SectionLoading />}>
        <Team></Team>
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <FuturePlans></FuturePlans>
      </Suspense>
    </div>
  );
};

export default withNamespaces()(About);
