import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
// import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Slider from "react-slick";

const SlickCarousel = () => {
  // const { introImages } = useOutletContext();
  const [items, setItems] = useState([]);
  const introImagesUrl = process.env.REACT_APP_INTRO_IMAGES_URL;

  const getAllIntroImages = async () => {
    try {
      const response = await axios.get(introImagesUrl);
      const data = response.data.introimages;
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllIntroImages();
  }, []);

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
        {items.map((item) => {
          const { _id, image, name } = item;
          return (
            <article key={_id}>
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
