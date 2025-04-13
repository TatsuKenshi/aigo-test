import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { withNamespaces } from "react-i18next";

const ContactSection = ({ t }) => {
  return (
    <section className="py-8 bg-[#ffffef]">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          {t("PovezimoSeNaslov")}
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">{t("PovezimoSeText")}</p>
      </div>

      <div className="w-full">
        {/* social links */}
        <ul className=" flex justify-center gap-4 text-[#ffffef] mt-8 mb-4">
          <li>
            <Link
              to="https://www.facebook.com/profile.php?id=61553023137564"
              target="_blank"
            >
              <FaFacebook size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://www.tiktok.com/@aigo_eat" target="_blank">
              <FaTiktok size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://www.instagram.com/aigo_eat" target="_blank">
              <FaInstagram size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default withNamespaces()(ContactSection);
