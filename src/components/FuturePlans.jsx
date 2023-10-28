import React from "react";
import { FaBeer } from "react-icons/fa";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";

const FuturePlans = () => {
  return (
    <section className="p-8 bg-[#ffffef]">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          Our mission and vision
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>
        <p className="mt-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          adipisci totam explicabo beatae, doloremque repellendus. Eveniet
          veniam dolore ad distinctio iusto sed provident eos in magni, vero
          reiciendis inventore quisquam? Maxime a sint mollitia tenetur ipsa
          tempora harum autem, ullam laborum est adipisci iste atque quas
          excepturi modi. Esse, magnam?
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8 mt-8">
        <article className="hover:shadow-lg">
          <div className="w-full py-8 grid place-content-center">
            <ProgressiveImage src={mission} placeholder={heroSmall}>
              {(src, loading) => (
                <img
                  src={src}
                  alt="mission"
                  className={`image${
                    loading ? " loading" : " loaded"
                  } w-[150px] h-[150px] md:-w-[200px] md-h-[200px] lg:w-[250px] lg:h-[250px] rounded-[100%]`}
                />
              )}
            </ProgressiveImage>
          </div>
          <div className="p-2">
            <h2 className="text-[#a62817] capitalize font-bold text-2xl">
              Our Mission
            </h2>
            <p className="my-2 text-md text-slate-800 text-justify">
              At Aigo, we're committed to bringing the best Korean dishes
              straight to you, so you can experience the flavors and traditions
              of this rich culinary heritage.
            </p>
          </div>
        </article>

        <article className="hover:shadow-lg">
          <div className="p-2">
            <h2 className="text-[#a62817] capitalize font-bold text-2xl">
              Our Vision
            </h2>
            <p className="my-2 text-md text-slate-800 text-justify">
              To share the joy of Korean cuisine with as many people as
              possible, by providing exceptional food and service that exceeds
              expectations.
            </p>
          </div>
          <div className="w-full py-8 grid place-content-center">
            <ProgressiveImage src={vision} placeholder={heroSmall}>
              {(src, loading) => (
                <img
                  src={src}
                  alt="vision"
                  className={`image${
                    loading ? " loading" : " loaded"
                  } w-[150px] h-[150px] md:-w-[200px] md-h-[200px] lg:w-[250px] lg:h-[250px] rounded-[100%]`}
                />
              )}
            </ProgressiveImage>
          </div>
        </article>
      </div>

      {/* title div */}
      <div className="max-w-[1200px] mx-auto mt-8">
        <h1 className="text-[#9e1918] text-3xl font-extrabold text-center ">
          What's in store
        </h1>
        <div className="h-1 w-48 bg-[#9e1918] mx-auto mt-1"></div>

        <div className="p-2 grid md:grid-cols-2 gap-8">
          <div>
            <p className="mt-4 md:mt-0 text-[#a62817] font-bold text-xl">
              Introduction of monthly specials
            </p>
            <p className="text-md text-slate-800 text-justify">
              Create monthly specials, starting in the first quarter of 2024.
              Create monthly specials, starting in the first quarter of 2024.
              Create monthly specials, starting in the first quarter of 2024.
            </p>
          </div>
          <div>
            <p className="text-[#a62817] font-bold text-xl">
              Create a loyalty program
            </p>
            <p className="text-md text-slate-800 text-justify">
              The program aims to enhance the dining experience, encourage
              repeat visits, and foster a sense of belonging within the Aigo
              community
            </p>
          </div>
          <div>
            <p className="text-[#a62817] font-bold text-xl">
              Open a physical store
            </p>
            <p className="text-md text-slate-800 text-justify">
              We want to open up our restaurant and expand our business
            </p>
          </div>
          <div>
            <p className="text-[#a62817] font-bold text-xl">
              Community Engagement
            </p>
            <p className="text-md text-slate-800 text-justify">
              Support local charities, host cultural workshops. Support local
              charities, host cultural workshops.
            </p>
          </div>
          <div>
            <p className="text-[#a62817] font-bold text-xl">Impact</p>
            <p className="text-md text-slate-800 text-justify">
              Elevate perception of Korean cuisine, promote sustainability in
              dining.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
