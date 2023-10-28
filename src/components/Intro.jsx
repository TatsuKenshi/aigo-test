import { lazy, Suspense } from "react";
import SectionLoading from "./SectionLoading";

const SlickCarousel = lazy(() => import("./SlickCarousel"));

const Intro = () => {
  return (
    <section className="px-8">
      {/* title div */}
      <div className="text-center my-8 max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">Gallery</h1>
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

      <div className="text-center mt-8 max-w-[1200px] mx-auto">
        <Suspense fallback={<SectionLoading />}>
          <SlickCarousel />
        </Suspense>
      </div>
    </section>
  );
};

export default Intro;
