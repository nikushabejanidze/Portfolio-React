import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {language === "ge" ? "ჩემს შესახებ" : "About Me"}
      </h1>
      <p className="text-gray-700 mb-2">
        {language === "ge"
          ? "მე ვარ ნიკოლოზ ბეჟანიძე, დამწყები ვებ დეველოპერი და დიზაინერი."
          : "I am Nikoloz Bejanidze, a junior web developer and designer."}
      </p>
      <p className="text-gray-700">
        {language === "ge"
          ? "სულ რაღაც 1 წელი დამიდგა დეველოპმენტში და უკვე შევძელი მრავალი პროექტის შექმნა."
          : "I've been developing for just a year and I already have several small and large projects under my belt."}
      </p>
    </div>
  );
}

export default About;
