import { useState, useEffect } from "react";
import { FaChevronUp, FaPhone } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollToTopButton, setScrollToTopButton] = useState("invisible");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollToTopButton("");
      } else {
        setScrollToTopButton("invisible");
      }
    });

    return () =>
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setScrollToTopButton("");
        } else {
          setScrollToTopButton("invisible");
        }
      });
  }, []);

  return (
    <section className="fixed bottom-16 right-2 md:right-4 lg:right-8 z-[50]">
      <div className="mb-2">
        <a href="+38167333444">
          <button className="p-2 rounded-full bg-white border-4 border-[#9e1918] lg:hidden">
            <FaPhone className="w-8 h-8 fill-[#9e1918]" />
          </button>
        </a>
      </div>

      <div>
        <button
          className={`${scrollToTopButton} p-2 rounded-full bg-white border-4 border-[#9e1918]`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FaChevronUp className="w-8 h-8 fill-[#9e1918]" />
        </button>
      </div>
    </section>
  );
};

export default ScrollToTop;
