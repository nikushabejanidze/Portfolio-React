import { useLanguage } from "../context/LanguageContext";

function About() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col md:flex-row p-6 gap-8 items-center md:items-start">
      <div className="md:w-100 w-full flex justify-center">
        <img
          src="src/pages/aboutme-photo.png "
          alt="ნიკოლოზ ბეჟანიძე"
          className="w-72 h-72 object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="text-3xl font-bold mb-4">{t.about}</h1>

        <p className="text-gray-700 mb-4">{t.aboutText1}</p>
        <p className="text-gray-700 mb-4">{t.aboutText2}</p>

        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>{t.aboutPoint1}</li>
          <li>{t.aboutPoint2}</li>
          <li>{t.aboutPoint3}</li>
        </ul>

        <a
          href="/skills"
          className="inline-block bg-[#2DAAFA] text-white px-5 py-2 rounded hover:bg-[#1b91db] transition"
        >
          {t.viewSkills}
        </a>
      </div>
    </div>
  );
}

export default About;
