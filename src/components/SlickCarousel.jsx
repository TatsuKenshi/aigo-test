import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import { useOutletContext } from "react-router-dom";

import Slider from "react-slick";

const SlickCarousel = () => {
  const { introImages } = useOutletContext();

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {introImages.map((introImage) => {
          const { id, image, name } = introImage;
          return (
            <article key={id}>
              <ProgressiveImage src={image} placeholder={heroSmall}>
                {(src, loading) => (
                  <img
                    src={src}
                    alt={name}
                    className={`image${
                      loading ? " loading" : " loaded"
                    } w-full h-full max-h-[650px]`}
                  />
                )}
              </ProgressiveImage>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
