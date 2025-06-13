import { useLanguage } from "../context/LanguageContext";

function Home() {
  const { language } = useLanguage();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">
        {language === "ge" ? "მთავარი გვერდი" : "Home"}
      </h1>
      <p className="text-gray-700 mb-2">
        {language === "ge"
          ? "აქ შეგიძლიათ იხილოთ ჩვენი პროექტები, სტატიები და სიახლეები."
          : "Here you can view our projects, articles, and news."}
      </p>
      <p className="text-gray-700">
        {language === "ge"
          ? "შეიქმნა React-ისა და Tailwind CSS-ის გამოყენებით."
          : "Built with React and Tailwind CSS."}
      </p>
    </div>
  );
}

export default Home;
