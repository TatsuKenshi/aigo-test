import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import i18next from "i18next";
import axios from "axios";

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState("");
  const navigate = useNavigate();
  const language = i18next.language;

  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    delayError: 1000,
    defaultValues: {
      // user_name: "",
      user_email: "",
      // message: "",
    },
  });

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       // Service ID
  //       "service_3egksr6",
  //       // Template ID
  //       "template_r9vccgt",
  //       form.current,
  //       // Public key
  //       "V8zB59DCrXsYkcmjt"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };

  const sendEmail = async (e) => {
    e.preventDefault();
    const myMail = getValues("user_email");
    console.log(myMail);

    const data = {
      email: myMail,
    };

    const response = await axios.post(
      "http://localhost:5000/api/sendemail",
      data
    );

    console.log(response.data);
  };

  return (
    <section className="max-w-[900px] mx-auto my-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // sendEmail(e);

          const myMail = getValues("user_email");
          console.log(myMail);

          const data = {
            email: myMail,
          };

          const response = axios.post(
            "http://localhost:5000/api/sendemail",
            data
          );

          console.log(response.data);

          setMessageSent(`
            ${
              language === "en"
                ? "Your message has been sent. You will be redirected to the home page shortly."
                : "Vaša poruka je poslata. Ubrzo ćete biti prebačeni na početnu stranu."
            }
          `);

          // setTimeout(() => {
          //   navigate("/");
          // }, 5000);
        }}
      >
        {/* name input section */}
        {/* <div className="mb-4 w-full mx-auto">
          <div>
            <label
              htmlFor="user_name"
              className="text-xl font-bold text-[#a62817]"
            >
              {language === "en" ? "Your name" : "Vaše ime i prezime"}
            </label>
          </div>
          <div>
            <input
              {...register("user_name", {
                required: `${
                  language === "en"
                    ? "This field is required."
                    : "Ime je obavezno polje."
                }`,
                minLength: {
                  value: 4,
                  message: `${
                    language === "en"
                      ? "The name is too short."
                      : "Ime je prekratko."
                  }`,
                },
              })}
              id="user_name"
              name="user_name"
              className="border-4 border-[#a62817] w-full h-12 rounded-lg px-2 text-xl"
            />
          </div> */}
        {/* error message paragraph */}
        {/* <p role="alert" className="text-xl font-bold text-[#a62817]">
            {errors?.user_name?.message}
          </p>
        </div> */}

        {/* email input section */}
        <div className="mb-4 w-full mx-auto">
          <div>
            <label
              htmlFor="user_email"
              className="text-xl font-bold text-[#a62817]"
            >
              {language === "en" ? "Your email" : "Vaš email"}
            </label>
          </div>
          <div>
            <input
              type="email"
              id="user_email"
              {...register("user_email", {
                required: `${
                  language === "en"
                    ? "Email is required."
                    : "Email je obavezno polje."
                }`,
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: `${
                    language === "en"
                      ? "Entered value does not match the email format."
                      : "Unesena vrednost nije u validnom email formatu."
                  }`,
                },
              })}
              aria-invalid={errors.user_email ? "true" : "false"}
              className="border-4 border-[#a62817] w-full h-12 rounded-lg px-2 text-xl"
              name="user_email"
            />
          </div>
          {/* error message paragraph */}
          <p role="alert" className="text-xl font-bold text-[#a62817]">
            {errors.user_email?.message}
          </p>
        </div>

        {/* message input section */}
        {/* <div className="mb-4 w-full mx-auto">
          <div>
            <label
              htmlFor="message"
              className="text-xl font-bold text-[#a62817]"
            >
              {language === "en" ? "Your message" : "Vaša poruka"}
            </label>
          </div>
          <div>
            <textarea
              rows={4}
              cols={50}
              {...register("message", {
                required: `${
                  language === "en"
                    ? "Message field is required."
                    : "Poruka je obavezno polje."
                }`,
                minLength: {
                  value: 4,
                  message: `${
                    language === "en"
                      ? "The message is too short."
                      : "Poruka je prekratka."
                  }`,
                },
              })}
              id="message"
              className="border-4 border-[#a62817] w-full h-40 rounded-lg px-2 text-xl"
              name="message"
            />
          </div> */}
        {/* error message paragraph */}
        {/* <p role="alert" className="text-xl font-bold text-[#a62817]">
            {errors?.message?.message}
          </p>
        </div> */}

        {/* submit button section */}
        <div className="mb-4 w-full mx-auto lg:text-center">
          <button
            type="submit"
            className="border-4 border-[#a62817] text-[#a62817] font-bold rounded-lg px-2 py-1 text-xl w-full lg:w-64"
            disabled={!isValid}
          >
            {language === "en" ? "Send" : "Pošalji"}
          </button>
        </div>

        {/* message sent section */}
        <div className="mb-4 w-full sm:w-10/12 md:w-8/12 mx-auto">
          <p className="text-xl font-bold text-[#a62817]">{messageSent}</p>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
