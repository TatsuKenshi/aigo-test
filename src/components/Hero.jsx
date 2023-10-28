import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import hero from "../assets/images/hero-test.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[400px] lg:h-[500px] overflow:hidden">
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
    </div>
  );
};

export default Hero;
