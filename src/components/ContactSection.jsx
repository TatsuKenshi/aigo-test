import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-8 bg-[#ffffef]">
      {/* title div */}
      <div className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-[#9e1918] text-3xl font-extrabold">
          Let's connect
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

      <div className="w-full">
        {/* social links */}
        <ul className=" flex justify-center gap-4 text-[#ffffef] mt-8 mb-4">
          <li>
            <Link to="https://wwww.facebook.com" target="_blank">
              <FaFacebook size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://wwww.twitter.com" target="_blank">
              <FaTwitter size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
          <li>
            <Link to="https://wwww.instagram.com" target="_blank">
              <FaInstagram size="3.5rem" className="fill-[#9e1918]" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
