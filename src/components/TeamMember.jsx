import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";

const TeamMember = ({ name, job, image, text }) => {
  return (
    <article className="bg-white hover:shadow-lg">
      <div className="w-full h-[45vw] sm:h-[50vw] md:h-[30vw] lg:h-[350px]">
        <ProgressiveImage src={image} placeholder={heroSmall}>
          {(src, loading) => (
            <img
              src={src}
              alt={name}
              className={`image${
                loading ? " loading" : " loaded"
              } w-full h-[45vw] sm:h-[50vw] md:h-[30vw] lg:h-[350px]`}
            />
          )}
        </ProgressiveImage>
      </div>
      <div className="p-2">
        <p className="mt-4 text-[#a62817] capitalize font-bold text-2xl">
          {name}
        </p>
        <p className="my-2 text-[#d75b3f] font-bold capitalize text-xl">
          {job}
        </p>
        <p className="my-2 text-md text-slate-800 h-content min-h-32 text-justify">
          {text}
        </p>
      </div>
    </article>
  );
};

export default TeamMember;
