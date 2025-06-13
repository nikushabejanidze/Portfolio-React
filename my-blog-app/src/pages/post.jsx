import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const posts = {
    1: {title: "GeoTiers", content: `ჩვენი Minecraft-ის მოთამაშეთა ტიერლისტი აფასებს მოთამაშეებს სხვადასხვა მინი-თამაშებში მათი შედეგებიდან გამომდინარე.`, link: "https://geotiers.fun", linkText: "ეწვიე GeoTiers ვებსაიტს",},
    2: {title: "EventMC", content: `EventMC არის Minecraft სერვერი, რომელიც მასპინძლობს სხვადასხვა ღონისძიებებს: Squid Game, UHC, Hunger Games და სხვა.`, link: "https://eventmc.netlify.app", linkText: "ეწვიე EventMC ვებსაიტს",},
  };

  const post = posts[id ];

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-red-600">
          {language === "ge" ? "პოსტი ვერ მოიძებნა" : "Post not found"}
        </h1>
        <button
          onClick={() => navigate("/posts")} 
          className="bg-blue-600 text-gray-50 py-2 px-4 rounded hover:bg-blue-700 mt-4">
          {language === "ge" ? "უკან" : "Back"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">
        {post.title}
      </h1>
      <p className="text-gray-700 whitespace-pre-line mb-4">
        {post.content}
      </p>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-semibold block mb-6">
        {post.linkText}
      </a>

      <button
        onClick={() => navigate("/posts")} 
        className="bg-blue-600 text-gray-50 py-2 px-4 rounded hover:bg-blue-700">
        {language === "ge" ? "უკან" : "Back"}
      </button>
    </div>
  );
}

export default Post;
