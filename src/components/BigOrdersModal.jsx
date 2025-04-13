import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withNamespaces } from "react-i18next";
import { FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo-small.png";
import google from "../assets/images/google.jpg";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import wolt from "../assets/images/wolt-logo.png";
import glovo from "../assets/images/glovo-logo.png";
import english from "../assets/images/english.png";
import serbian from "../assets/images/serbian.png";
import { useLanguageContext } from "../context/LanguageContext";
import i18n from "../i18n";

const BigOrdersModal = ({ t }) => {
  const [modalVisibility, setModalVisibility] = useState(
    JSON.parse(sessionStorage.getItem("bigOrdersModalVisibility")) || "visible"
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const { setCurrentLanguage } = useLanguageContext();

  return (
    // visibility wrapper
    <main className={modalVisibility}>
      {/* 100 width & height wrapper */}
      <section className="fixed w-[100vw] h-[100vh] bg-slate-400 z-10 opacity-95">
        {/* modal content wrapper - red field */}
        <div className="bg-[#fffeff] z-11 rounded-xl w-[96vw] md:w-[70vw] lg:w-[40vw] h-[96vh] md:h-[80vh] lg:h-[70vh] mt-[2vh] md:mt-[10vh] lg:mt-[15vh] mx-auto flex flex-col justify-between">
          {/* logo and toggle button bar section */}
          {/* logo */}
          <div className="flex justify-between items-center px-8 h-24 bg-[#fffeff] rounded-t-xl">
            <div>
              <span className="text-3xl font-bold">
                <img
                  src={logo}
                  className="w-12 rounded-full"
                  alt="company logo"
                />
              </span>
            </div>
            {/* end of logo */}

            {/* language buttons */}
            <section className="flex justify-center">
              <div className="w-6 h-6 mr-2 md:mr-4 lg:mr-8">
                <button
                  onClick={() => {
                    changeLanguage("en");
                    setCurrentLanguage("en");
                  }}
                  className="rounded-full"
                >
                  <img src={english} alt="english" />
                </button>
              </div>

              <div className="w-6 h-6 ml-2">
                <button
                  onClick={() => {
                    changeLanguage("sr");
                    setCurrentLanguage("sr");
                  }}
                  className="rounded-full"
                >
                  <img src={serbian} alt="serbian" />
                </button>
              </div>
            </section>
            {/* end of language buttons */}

            {/* close button */}
            <div>
              <button
                type="button"
                className="float-right"
                disabled="true"
                onClick={() => {
                  setModalVisibility("invisible");
                  sessionStorage.setItem(
                    "bigOrdersModalVisibility",
                    JSON.stringify("invisible")
                  );
                }}
              >
                <FaTimes className="fill-[#9e1918] h-8 w-8" />
              </button>
            </div>
          </div>
          {/* end of close button */}
          {/* end of logo and button section */}

          {/* text & image content section */}
          <div className="text-center mx-auto px-8 mb-4">
            <h1 className="text-[#9e1918] text-2xl font-extrabold">
              {t("BigOrderBannerNaslov")}
            </h1>
            <div className="h-1 w-48 bg-[#a62817] mx-auto mt-1"></div>
            <p className="mt-4 text-justify">{t("BigOrderBannerText")}</p>
          </div>


          <div className="text-center mx-auto px-8">
            <div className="flex justify-center">
              <a
                href="https://www.google.com/search?q=aigo+korean+food"
                rel="noreferrer"
                target="_blank"
              >
                <img src={google} alt="logo" className="w-12 h-12 mr-4" />
              </a>
              <a
                href="https://glovoapp.com/rs/sr/beograd/aigo-eat-korean-restaurant-beg/"
                rel="noreferrer"
                target="_blank"
                className="mr-4"
              >
                <img src={glovo} alt="logo" className="w-12 h-12" />
              </a>
              <a
                href="https://wolt.com/en/srb/belgrade/restaurant/aigoeat"
                rel="noreferrer"
                target="_blank"
              >
                <img src={wolt} alt="logo" className="w-12 h-12" />
              </a>
            </div>
          </div>

          <div className="text-center mx-auto px-8 mb-4">
            <p className="mt-4 text-justify">{t("BigOrderBannerText2")}</p>
          </div>

          <div>
            <ul className=" flex justify-center gap-4 text-[#9e1918] mt-8 mb-4">
              <li>
                <Link to="https://www.instagram.com/aigo_eat" target="_blank">
                  <FaInstagram size="2.5rem" className="hover:fill-[#d75b3f]" />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.facebook.com/profile.php?id=61553023137564"
                  target="_blank"
                >
                  <FaFacebook size="2.5rem" className="hover:fill-[#d75b3f]" />
                </Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/@aigo_eat" target="_blank">
                  <FaTiktok size="2.5rem" className="hover:fill-[#d75b3f]" />
                </Link>
              </li>
            </ul>
          </div>


          {/* end of text & image content section */}
        </div>
      </section>
    </main>
  );
};

export default withNamespaces()(BigOrdersModal);
