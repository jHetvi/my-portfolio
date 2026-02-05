import { createElement, useRef } from "react";
import { content } from "../Content";
import { useLocalization } from "../contexts/LocalizationContext";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { CONTACT_CONSTANTS, EMAIL_CONSTANTS, SECTION_IDS } from "../constants/textConstants";

const Contact = () => {
  const { Contact } = content;
  const { t } = useLocalization();
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    // Get form values
    const fromName = form.current.from_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    // Prepare template parameters
    const templateParams = {
      from_name: fromName,
      message: message,
      from_email: userEmail,
      to_email: EMAIL_CONSTANTS.DEFAULT_RECIPIENT,
      reply_to: userEmail
    };

    emailjs
      .send(
        EMAIL_CONSTANTS.SERVICE_ID,
        EMAIL_CONSTANTS.TEMPLATE_ID,
        templateParams,
        EMAIL_CONSTANTS.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success(EMAIL_CONSTANTS.SUCCESS_MESSAGE);
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-dark_primary text-white" id={SECTION_IDS.CONTACT}>
      <Toaster />
      <div className="md:container px-5 py-10 sm:py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {t(CONTACT_CONSTANTS.TITLE)}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {t(CONTACT_CONSTANTS.SUBTITLE)}
        </h4>
        <br />
        <div className="flex gap-6 md:gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-4 sm:gap-5"
          >

            <input
              type="text"
              name="from_name"
              placeholder={t(CONTACT_CONSTANTS.NAME)}
              required
              className="border border-slate-600 p-3 rounded text-dark_primary"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder={t(CONTACT_CONSTANTS.EMAIL)}
              required
              className="border border-slate-600 p-3 rounded text-dark_primary"
            />
            <textarea
              name="message"
              placeholder={t(CONTACT_CONSTANTS.MESSAGE)}
              className="border border-slate-600 p-3 rounded h-32 sm:h-44 text-dark_primary"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-white text-dark_primary text-sm sm:text-base"
            >
              {t(CONTACT_CONSTANTS.SUBMIT)}
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-4 sm:gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins text-sm sm:text-base break-all" href={content.link} target="_blank">
                  {t(`${CONTACT_CONSTANTS.SOCIAL_TEXTS}.${i}`)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
