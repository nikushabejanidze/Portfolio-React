import { useLanguage } from "../context/LanguageContext";

function Home() {
  const { t } = useLanguage();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.home}</h1>
      <p className="text-gray-700 mb-2">{t.homeText1}</p>
      <p className="text-gray-700">{t.homeText2}</p>
    </div>
  );
}

export default Home;
