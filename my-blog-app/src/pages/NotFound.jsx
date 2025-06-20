import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">
        {t.notFoundMessage || "გვერდი არ მოიძებნა"}
      </p>
      <Link
        to="/"
        className="bg-[#2DAAFA] text-white px-6 py-2 rounded hover:bg-[#2383cc] transition"
      >
        {t.backHome || "მთავარ გვერდზე დაბრუნება"}
      </Link>
    </div>
  );
}

export default NotFound;
