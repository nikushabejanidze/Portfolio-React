import { useLanguage } from "../context/LanguageContext";
import { useRef } from "react";

function Contact() {
  const { language } = useLanguage();

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    console.log("სახელი:", name);
    console.log("მეილი:", email);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {language === "ge" ? "კონტაქტი" : "Contact"}
      </h1>
      <p className="mb-4 text-gray-700">
        {language === "ge"
          ? "დაგვიტოვეთ თქვენი სახელი და ელ.ფოსტა"
          : "Please leave your name and email"}
      </p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder={language === "ge" ? "თქვენი სახელი" : "Your Name"}
          ref={nameRef}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          placeholder={language === "ge" ? "თქვენი ელ.ფოსტა" : "Your Email"}
          ref={emailRef}
          className="w-full px-4 py-2 border rounded"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-gray-50 px-4 py-2 rounded hover:bg-blue-700">
          {language === "ge" ? "გაგზავნა" : "Send"}
        </button>
      </div>
    </div>
  );
}

export default Contact;
