import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/logo-small.png";

const Footer = () => {
  return (
    <footer className="p-8 bg-[#d75b3f] text-white">
      {/* content section */}
      <section className="max-w-[1200px] mx-auto h-full flex flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Aigo Eat</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-100 bg-opacity-70 my-2"></div>
          <div>
            <img src={logo} alt="logo" className="w-16 h-16" />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>About</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-100 bg-opacity-70 my-2"></div>
          <p>
            Company Seat <br /> 1625 Washington Avenue
          </p>
          <p>
            Hours
            <br />
            Mon-Fri: 10-22
            <br />
            Sat: 12-20
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Contact</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-100 bg-opacity-70 my-2"></div>
          <p>
            Contact Phone <br />
            +381 66 426 624
          </p>
          <p>
            Contact Email
            <br />
            <a href="" className="underline">
              info@aigokoreanfood.rs
            </a>
            <br />
            <a href="" className="underline">
              mgmt@aigokoreanfood.rs
            </a>
          </p>
        </div>

        {/* links section */}
        <div className="w-full md:w-1/2 lg:w-1/4 mb-12 md:mb-8">
          <h4>Links</h4>
          <div className="h-[4px] w-full md:w-11/12 max-w-[1200px] bg-yellow-100 bg-opacity-70 my-2"></div>
          <p>
            <Link to="/">{"Home"}</Link>
          </p>
          <p>
            <Link to="/menu">{"Menu"}</Link>
          </p>
          <p>
            <Link to="/contact">{"Contact"}</Link>
          </p>
          <p>
            <Link to="/about">{"About"}</Link>
          </p>
        </div>
        <div className="h-[4px] w-full max-w-[1200px] bg-yellow-100 bg-opacity-70 mx-auto my-2"></div>
      </section>

      {/* copyright section */}
      <section className="max-w-[1200px] mx-auto text-center">
        {/* social links */}
        <ul className=" flex justify-center gap-4 text-[#ffffef] mt-8 mb-4">
          <li>
            <Link to="https://wwww.facebook.com" target="_blank">
              <FaFacebook size="2.5rem" className="hover:fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://wwww.twitter.com" target="_blank">
              <FaTwitter size="2.5rem" className="hover:fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://wwww.instagram.com" target="_blank">
              <FaInstagram size="2.5rem" className="hover:fill-[#9e1918]" />
            </Link>
          </li>
        </ul>
        <h5 className="mr-1">
          &copy; {new Date().getFullYear()}
          <span className="ml-1">Aigo Eat</span>
        </h5>
        <h5 className="ml-1">All rights reserved.</h5>
      </section>
    </footer>
  );
};

export default Footer;
