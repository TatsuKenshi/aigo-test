import { NavLink } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import hero from "../assets/images/hero-test.jpg";
import logoBig from "../assets/images/logo-big-4.png";
import glovo from "../assets/images/glovo-logo.png";
import mrd from "../assets/images/mrd-logo.png";
import wolt from "../assets/images/wolt-logo.png";

const Hero = () => {
  return (
    <div className="w-full h-[350px] lg:h-[400px] overflow:hidden">
      <ProgressiveImage src={hero} placeholder={heroSmall}>
        {(src, loading) => (
          <img
            src={src}
            alt="hero"
            className={`image${
              loading ? " loading" : " loaded"
            } object-cover h-full min-w-full`}
          />
        )}
      </ProgressiveImage>
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="relative">
          <span className="h-24 absolute bottom-60 right-0 lg:bottom-64 xl:right-0">
            <NavLink to="/">
              <img src={logoBig} alt="logo" className="w-20" />
            </NavLink>
          </span>
          <h2 className="absolute bottom-12 right-0 text-white text-2xl font-extrabold lg:bottom-12 lg:text-3xl xl:right-0">
            Takeout & Delivery
          </h2>
          <span className="absolute bottom-3 right-0 flex">
            <a href="https://glovoapp.com/" target="_blank" rel="noreferrer">
              <img src={glovo} alt="logo" className="w-8 h-8 mr-4" />
            </a>
            <a href="https://misterd.rs/" target="_blank" rel="noreferrer">
              <img src={mrd} alt="logo" className="w-8 h-8 mr-4" />
            </a>
            <a href="https://wolt.com/sr/srb" target="_blank" rel="noreferrer">
              <img src={wolt} alt="logo" className="w-8 h-8" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
