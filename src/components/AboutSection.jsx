import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";

const AboutSection = () => {
  const { people } = useOutletContext();
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const navigate = useNavigate();

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  return (
    <section className="py-8 px-8 bg-white">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">Team Aigo</h1>
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

      <article className="mt-8 max-w-[500px] mx-auto bg-white">
        <div className="w-full mb-4 h-[250px] sm:h-[300px]">
          <ProgressiveImage src={image} placeholder={heroSmall}>
            {(src, loading) => (
              <img
                src={src}
                alt={name}
                className={`image${
                  loading ? " loading" : " loaded"
                } w-full h-full`}
              />
            )}
          </ProgressiveImage>
        </div>
        <div className="pt-2 pb-12">
          <button type="button" className="float-left" onClick={prevPerson}>
            <FaChevronLeft size="3rem" className="fill-[#a62817]" />
          </button>
          <button type="button" className="float-right" onClick={nextPerson}>
            <FaChevronRight size="3rem" className="fill-[#a62817]" />
          </button>
        </div>
        <div className="py-4 px-2">
          <p className="mb-4 text-[#a62817] capitalize font-bold text-2xl">
            {name}
          </p>
          <p className="mb-4 text-[#d75b3f] font-bold capitalize text-xl">
            {job}
          </p>
          <p className="text-md text-slate-800 mb-4 text-justify">{text}</p>

          <div className="mt-4 flex gap-x-4">
            <button
              className="w-full py-4 bg-[#a62817] rounded-lg text-white font-bold"
              onClick={() => {
                navigate("/about");
              }}
            >
              Go to About Page
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default AboutSection;
