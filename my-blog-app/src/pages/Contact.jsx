import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t } = useLanguage();
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();

    console.log("Name:", name);
    console.log("Email:", email);
    alert("Message sent!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">{t.contactHeading}</h1>
      <p className="mb-4 text-gray-700">{t.contactSub}</p>

      <div className="space-y-4">
        <input
          type="text"
          placeholder={t.namePlaceholder}
          ref={nameRef}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          required
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          placeholder="t.emailPlaceholder"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-gray-50 px-4 py-2 rounded hover:bg-blue-700"
        >
          {t.send}
        </button>
      </div>
    </div>
  );
}

export default Contact;
