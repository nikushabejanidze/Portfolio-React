import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();

  const linkClass = (path) =>
    `px-4 py-2 rounded-xl transition duration-200 text-sm md:text-base font-semibold ${
      location.pathname === path
        ? "bg-[#274BDB] text-gray-50"
        : "text-gray-50 hover:bg-[#3e61e7]"
    }`;

  return (
    <header className="bg-[#4169e1]">
      <nav className="flex justify-center items-center gap-3 px-4 py-4">
        <Link to="/" className={linkClass('/')}>
          🏡 {language === "ge" ? "მთავარი" : "Home"}
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          👤 {language === "ge" ? "ჩემს შესახებ" : "About"}
        </Link>
        <Link to="/contact" className={linkClass('/contact')}>
          📬 {language === "ge" ? "კონტაქტი" : "Contact"}
        </Link>
        <Link to="/posts" className={linkClass('/posts')}>
          📰 {language === "ge" ? "პოსტები" : "Posts"}
        </Link>

        {/* ენის გადართვა */}
        <button
          onClick={toggleLanguage}
          className="bg-gray-50 text-gray-900 px-3 py-1 rounded ml-4 font-semibold">
          {language === "ge" ? "English" : "ქართული"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
