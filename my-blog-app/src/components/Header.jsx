import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Header() {
  const location = useLocation();
  const { language, changeLanguage, t } = useLanguage();

  const isActive = (path) =>
    location.pathname === path
      ? "bg-[#2383cc] text-white"
      : "bg-white text-gray-900 hover:bg-[#1a73c1] hover:text-white transition";

  return (
    <header className="bg-[#2DAAFA] shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4 flex-wrap gap-3">
        <p className="text-xl font-bold text-white">💼 {t.portfolioTitle || "My Portfolio"}</p>
        <nav className="flex flex-wrap items-center gap-3">
          <Link to="/">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/")}`}>
              🏠 {t.home}
            </button>
          </Link>
          <Link to="/about">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/about")}`}>
              👤 {t.about}
            </button>
          </Link>
          <Link to="/projects">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/projects")}`}>
              💼 {t.projects}
            </button>
          </Link>
          <Link to="/skills">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/skills")}`}>
              🛠 {t.skills}
            </button>
          </Link>
          <Link to="/contact">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/contact")}`}>
              📬 {t.contact}
            </button>
          </Link>
          <Link to="/posts">
            <button className={`px-4 py-2 rounded font-medium ${isActive("/posts")}`}>
              📰 {t.posts}
            </button>
          </Link>

          <button
            onClick={() => changeLanguage(language === "ka" ? "en" : "ka")}
            className="bg-white text-[#2DAAFA] px-3 py-1 rounded font-semibold hover:bg-gray-200 transition"
          >
            {language === "ka" ? "English" : "ქართული"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
