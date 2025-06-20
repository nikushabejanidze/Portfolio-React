import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "GeoTiers",
      description: t.geotiersDesc,
      tech: "TypeScript",
      category: "game",
      link: "https://geotiers.fun",
    },
    {
      id: 2,
      title: "EventMC",
      description: t.eventmcDesc,
      tech: "HTML / CSS / JS",
      category: "event",
      link: "https://eventmc.netlify.app",
    },
    {
      id: 3,
      title: "Tech Universe",
      description: t.techUniverseDesc,
      tech: "HTML / CSS",
      category: "beginner",
      link: "https://tech-universee.netlify.app",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.projects}</h1>

      {/* ფილტრაცია */}
      <div className="flex gap-2 mb-6 flex-wrap">
        <button
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("all")}
        >
          {t.all}
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "game" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("game")}
        >
          {t.games}
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "event" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("event")}
        >
          {t.events}
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "beginner" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("beginner")}
        >
          {t.firstProjects}
        </button>
      </div>

      {/* პროექტების ბარათები */}
      <ul className="grid gap-4 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <li
            key={project.id}
            className="bg-white border rounded-lg shadow p-4 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              🛠 {t.technologies}: {project.tech}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#2DAAFA] text-white rounded hover:bg-[#2383cc] transition"
            >
              {t.viewProject}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
