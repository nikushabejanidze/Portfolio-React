import { useParams, useNavigate } from "react-router-dom";

function Post() {
  const { id } = useParams();
  const navigate = useNavigate();

  const posts = {
    1: {
      title: "GeoTiers",
      content: `ჩვენი Minecraft-ის მოთამაშეთა ტიერლისტი აფასებს მოთამაშეებს სხვადასხვა მინი-თამაშებში მათი შედეგების მიხედვით. 
      თითოეულ მოთამაშეს ენიჭება ტიერი (მაგალითად, HT1, LT5, RHT2) კონკრეტული მინი-თამაშისთვის, რომელშიც მონაწილეობა მიიღო. 
      ეს ინდივიდუალური ტიერები ჯამდება და განსაზღვრავს მოთამაშის საერთო ქულებს.`,
      link: "https://geotiers.fun",
      linkText: "ეწვიე GeoTiers ვებსაიტს",
    },
    2: {
      title: "EventMC",
      content: `EventMC არის Minecraft სერვერი, რომელიც ორგანიზებას უწევს სხვადასხვა ტიპის ღონისძიებებს: 
      Squid Game, UHC, Hunger Games და Battle Royale. 
      მოთამაშეებს შეუძლიათ იბრძოლონ, იასპარეზონ და მოიგონ რეალური პრიზები.`,
      link: "https://eventmc.netlify.app",
      linkText: "ეწვიე EventMC ვებსაიტს",
    },
  };

  const post = posts[id];

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">პოსტი ვერ მოიძებნა</h1>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          ← დაბრუნდი პოსტების გვერდზე
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
        ← დაბრუნდი პოსტების გვერდზე
      </button>
    </div>
  );
}

export default Post;
