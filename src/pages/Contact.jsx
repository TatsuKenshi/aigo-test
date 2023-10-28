import { useEffect, lazy, Suspense } from "react";
import usePageTitle from "../hooks/usePageTitle";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
// import ContactForm from "../components/ContactForm";
// import Map from "../components/Map";
// import ContactSection from "../components/ContactSection";
import SectionLoading from "../components/SectionLoading";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Map = lazy(() => import("../components/Map"));
const ContactSection = lazy(() => import("../components/ContactSection"));

const Contact = () => {
  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;
  console.log(language);

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Contact", srTitle: "Kontakt" });
  }, [language, changeTitle]);

  return (
    <div className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          Send us an email
        </h1>
        <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
        <p className="mt-4  text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <Suspense fallback={<SectionLoading />}>
        <ContactForm />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <Map />
      </Suspense>
      <Suspense fallback={<SectionLoading />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default withNamespaces()(Contact);
