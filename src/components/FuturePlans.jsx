import React, { useState, useEffect } from "react";
import ProgressiveImage from "react-progressive-graceful-image";
import heroSmall from "../assets/images/hero-test-small.jpg";
import mission from "../assets/images/mission.png";
import vision from "../assets/images/vision.png";
import axios from "axios";

const FuturePlans = () => {
  const [missions, setMissions] = useState([]);
  const [plans, setPlans] = useState([]);
  const missionsUrl = process.env.REACT_APP_MISSIONS_URL;
  const plansUrl = process.env.REACT_APP_PLANS_URL;

  const getAllMissions = async () => {
    try {
      const response = await axios.get(missionsUrl);
      const data = response.data.missions;
      setMissions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllPlans = async () => {
    try {
      const response = await axios.get(plansUrl);
      const data = response.data.plans;
      setPlans(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMissions();
    getAllPlans();
  }, []);

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
            <ProgressiveImage src={missions?.[0]?.img} placeholder={heroSmall}>
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
              {missions?.[0]?.titleEng}
            </h2>
            <p className="my-2 text-md text-slate-800 text-justify">
              {missions?.[0]?.textEng}
            </p>
          </div>
        </article>

        <article className="hover:shadow-lg">
          <div className="p-2">
            <h2 className="text-[#a62817] capitalize font-bold text-2xl">
              {missions?.[1]?.titleSrb}
            </h2>
            <p className="my-2 text-md text-slate-800 text-justify">
              {missions?.[1]?.textSrb}
            </p>
          </div>
          <div className="w-full py-8 grid place-content-center">
            <ProgressiveImage src={missions?.[1]?.img} placeholder={heroSmall}>
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
          {plans.map((plan) => {
            return (
              <div key={plan._id}>
                <p className="mt-4 md:mt-0 text-[#a62817] font-bold text-xl">
                  {plan.titleEng}
                </p>
                <p className="text-md text-slate-800 text-justify">
                  {plan.textEng}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
