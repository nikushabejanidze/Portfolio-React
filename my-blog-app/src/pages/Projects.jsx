function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">პროექტები</h1>
      <p className="mb-2 text-gray-700">
        უკვე დიდიხანი გავიდა რაც მე პროგრამირება დავიწყე, 1 წელში სულ შევქმენი 2 დიდი პროექტი რომლითაც კმაყოფილი ვარ, ეს არის ჩემი პროექტების ჩამონათვალი და მათი ლინკები. 
      </p>
      <ul className="list-disc list-inside text-gray-800">
        <li className="font-bold"><link href="http://localhost:5174/posts/1" className="text-2xl text-blue-500 font-bold underline">GeoTiers</link> Made with TypeScript</li>
        <li className="font-bold"><link href="http://localhost:5174/posts/2" className="text-2xl text-blue-500 font-bold underline">EventMC</link> Made with html</li>
      </ul>
    </div>
  );
}

export default Projects;
