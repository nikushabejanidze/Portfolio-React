import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Posts() {
  const { language } = useLanguage();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {language === "ge" ? "პოსტები" : "Posts"}
      </h1>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
          <Link to="/posts/1" className="text-blue-600 text-xl font-semibold hover:underline">
            📝 GeoTiers
          </Link>
          <p className="text-gray-700">
            {language === "ge"
              ? "გადადით ამ პოსტზე თუ გსურთ მეტი იცოდეთ ჩვენი პროექტის შესახებ."
              : "Visit this post if you'd like to know more about our project."}
          </p>
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
          <Link to="/posts/2" className="text-blue-600 text-xl font-semibold hover:underline">
            📝 EventMC
          </Link>
          <p className="text-gray-700">
            {language === "ge"
              ? "გადადთ ამ პოსტზე თუ გსურთ მეტი იცოდეთ ჩვენი პროექტის შესახებ."
              : "Visit this post if you'd like to know more about our project."}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
