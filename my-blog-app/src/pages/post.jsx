import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  if (id === "1") {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">GeoTiers</h1>
        <p className="text-gray-700 mb-2">
          ჩვენი Minecraft-ის მოთამაშეთა ტიერლისტი აფასებს მოთამაშეებს სხვადასხვა მინი-თამაშებში მათი შედეგების მიხედვით.
        </p>
        <p className="text-gray-700 mb-2">
          თითოეულ მოთამაშეს ენიჭება ტიერი (მაგალითად, HT1, LT5, RHT2) კონკრეტული მინი-თამაშისთვის, რომელშიც მონაწილეობა მიიღო.
        </p>
        <p className="text-gray-700">
          ეს ინდივიდუალური ტიერები ჯამდება და განსაზღვრავს მოთამაშის საერთო ქულებს.
        </p>
        <p>
            თუ უფრო მეტი გაინტერესებთ ვებსაიტზე, გადადით ამ ლინკზე: <a href="https://geotiers.fun/home" className="text-2xl font-bold text-blue-500 underline">GeoTiers</a>
        </p>
      </div>
    );
  }

  if (id === "2") {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">EventMC-ის ისტორია</h1>
        <p className="text-gray-700 mb-2">
          EventMC შეიქმნა ორი მოთამაშის — Ikonik1234-ისა და MaybeBejo-ს მიერ.
        </p>
        <p className="text-gray-700 mb-2">
          ის დაფუძნებულია სპეციალურ ღონისძიებებზე, როგორებიცაა Squid Game, Hunger Games და UHC.
        </p>
        <p className="text-gray-700">
          სერვერმა მალევე მოიპოვა პოპულარობა ქართულ Minecraft საზოგადოებაში თავისი კრეატიული ღონისძიებებით და სამართლიანი ადმინისტრაციით.
        </p>
        <p>
                        თუ უფრო მეტი გაინტერესებთ ვებსაიტზე, გადადით ამ ლინკზე: <a href="https://eventmc.netlify.app" className="text-2xl font-bold text-blue-500 underline">EventMC</a>
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-2">პოსტი ვერ მოიძებნა</h1>
      <p className="text-gray-700">მითითებული პოსტი არ არსებობს ან ID არასწორია.</p>
    </div>
  );
}

export default Post;
