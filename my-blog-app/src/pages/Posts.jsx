import { Link } from "react-router-dom";

function Posts() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">პოსტები</h1>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
          <Link to="/posts/1" className="text-blue-600 text-xl font-semibold hover:underline">
            📝 GeoTiers
          </Link>
          <p className="text-gray-700">გადადით ამ პოსტზე თუ გაინტერესებთ რაიმე ამ პროექტის შესახებ.</p>
        </li>
        <li className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition">
          <Link to="/posts/2" className="text-blue-600 text-xl font-semibold hover:underline">
            📝 EventMC
          </Link>
          <p className="text-gray-700">გადადით ამ პოსტზე თუ გაინტერესებთ რაიმე ამ პროექტის შესახებ.</p>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
