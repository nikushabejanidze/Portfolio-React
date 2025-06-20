import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

function Post() {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = {
    1: {
      title: "GeoTiers",
      content: t.geotiersContent,
      link: "https://geotiers.fun",
      linkText: t.visitGeotiers,
    },
    2: {
      title: "EventMC",
      content: t.eventmcContent,
      link: "https://eventmc.netlify.app",
      linkText: t.visitEventMC,
    },
  };

  const post = posts[id];

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">{t.postNotFound}</h1>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          ← {t.backToPosts}
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 whitespace-pre-line mb-4">{post.content}</p>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-semibold block mb-6"
      >
        {post.linkText}
      </a>

      <button
        onClick={() => navigate("/posts")}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        ← {t.backToPosts}
      </button>
    </div>
  );
}

export default Post;
