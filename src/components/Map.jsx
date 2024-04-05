import i18n from "../i18n";
import { withNamespaces } from "react-i18next";

const Map = ({ t }) => {
  return (
    <section className="">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("MapaNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("MapaText")}</p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11321.42131448125!2d20.4243859!3d44.8143253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a65d8c222aa0d%3A0xf898147ec93450ba!2sAigo.eat!5e0!3m2!1sen!2srs!4v1697824746430!5m2!1sen!2srs"
            className="h-[60vw] sm:h-96 lg:h-[450px] inherit w-full"
            style={{
              border: 0,
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Map);
