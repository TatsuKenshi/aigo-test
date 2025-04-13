import { NavLink, Link } from "react-router-dom";
import { FaTimes, FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { useNavigationContext } from "../context/NavigationContext";
import { useLanguageContext } from "../context/LanguageContext";
import logo from "../assets/images/logo-small.png";
import i18n from "../i18n";
import { withNamespaces } from "react-i18next";
import english from "../assets/images/english.png";
import serbian from "../assets/images/serbian.png";

const Sidebar = ({ t }) => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const {
    sidebarStatus,
    rotateSidebarButton,
    setSidebarStatus,
    setRotateMenuButton,
    setRotateSidebarButton,
  } = useNavigationContext();

  const { setCurrentLanguage } = useLanguageContext();

  return (
    <aside
      className={`z-[100] h-full w-full text-white bg-[#9e1918]  bg-opacity-95 fixed top-0 right-0 sm:w-10/12 md:w-8/12 lg:hidden ${
        sidebarStatus === "hidden" ? "translate-x-full" : "translate-x-0"
      } ease-in-out duration-1000`}
    >
      {/* logo and toggle button section */}
      <section className="flex justify-between items-center px-8 h-24 bg-[#9e1918] ">
        <div>
          <NavLink
            to="/"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold">
              <img
                // src={logoTransparentan}
                src={logo}
                className="w-16 rounded-full sm:hidden "
                alt="company logo"
              />
            </span>
          </NavLink>
        </div>
        <div>
          <button
            type="button"
            className="lg:hidden float-right"
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <FaTimes className={`fill-[#fff] h-8 w-8 ${rotateSidebarButton}`} />
          </button>
        </div>
      </section>

      {/* links section */}
      <section className="text-center text-2xl">
        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/"
            // className={({ isActive }) =>
            //   isActive
            //     ? "text-[#9e1918] font-bold"
            //     : "hover:text-[#9e1918]  font-bold"
            // }
            className={({ isActive }) =>
              isActive
                ? "text-[#d75b3f] font-bold"
                : "text-[#fff] hover:text-[#d75b3f] font-bold"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold">{t("Početna")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/menu"
            // className={({ isActive }) =>
            //   isActive
            //     ? "text-[#9e1918] font-bold"
            //     : "hover:text-[#9e1918]  font-bold"
            // }
            className={({ isActive }) =>
              isActive
                ? "text-[#d75b3f] font-bold"
                : "text-[#fff] hover:text-[#d75b3f] font-bold"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold">{t("Meni")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/contact"
            // className={({ isActive }) =>
            //   isActive
            //     ? "text-[#9e1918] font-bold"
            //     : "hover:text-[#9e1918]  font-bold"
            // }
            className={({ isActive }) =>
              isActive
                ? "text-[#d75b3f] font-bold"
                : "text-[#fff] hover:text-[#d75b3f] font-bold"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold">{t("Kontakt")}</span>
          </NavLink>
        </div>

        <div className="w-full py-2 px-auto mt-8">
          <NavLink
            to="/about"
            // className={({ isActive }) =>
            //   isActive
            //     ? "text-[#9e1918] font-bold"
            //     : "hover:text-[#9e1918]  font-bold"
            // }
            className={({ isActive }) =>
              isActive
                ? "text-[#d75b3f] font-bold"
                : "text-[#fff] hover:text-[#d75b3f] font-bold"
            }
            onClick={() => {
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
          >
            <span className="text-3xl font-bold"> {t("O nama")}</span>
          </NavLink>
        </div>
      </section>

      {/* language buttons section */}
      <section className="flex justify-center mt-8">
        <div className="w-8 h-8 mr-6">
          <button
            onClick={() => {
              changeLanguage("en");
              setCurrentLanguage("en");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={english} alt="english" />
          </button>
        </div>

        <div className="w-8 h-8 ml-6">
          <button
            onClick={() => {
              changeLanguage("sr");
              setCurrentLanguage("sr");
              setSidebarStatus("hidden");
              setRotateSidebarButton("animate-[spin_0.4s_1]");
              setRotateMenuButton("");
            }}
            className="rounded-full"
          >
            <img src={serbian} alt="serbian" />
          </button>
        </div>
      </section>
      {/* social links */}
      <div>
        <ul className="mt-8 mx-auto justify-center gap-8 flex text-[#ffffef]">
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
          <li>
            <Link to="https://www.instagram.com/aigo_eat" target="_blank">
              <FaInstagram size="2.5rem" className="hover:fill-[#d75b3f]" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default withNamespaces()(Sidebar);
