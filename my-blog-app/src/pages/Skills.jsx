import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Skills() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");

  const allSkills = [
    { name: "HTML", level: t.advanced, type: "hard" },
    { name: "CSS", level: t.advanced, type: "hard" },
    { name: "JavaScript", level: t.intermediate, type: "hard" },
    { name: "React", level: t.intermediate, type: "hard" },
    { name: "Java", level: t.intermediate, type: "hard" },
    { name: "Teamwork", level: t.good, type: "soft" },
    { name: "Communication", level: t.good, type: "soft" },
    { name: "Problem Solving", level: t.veryGood, type: "soft" },
  ];

  const filteredSkills =
    filter === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.type === filter);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.skills}</h1>

      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${
            filter === "all" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
        >
          {t.all}
        </button>
        <button
          onClick={() => setFilter("hard")}
          className={`px-4 py-2 rounded ${
            filter === "hard" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
        >
          {t.hardSkills}
        </button>
        <button
          onClick={() => setFilter("soft")}
          className={`px-4 py-2 rounded ${
            filter === "soft" ? "bg-[#2DAAFA] text-white" : "bg-gray-200"
          }`}
        >
          {t.softSkills}
        </button>
      </div>

      <ul className="space-y-2">
        {filteredSkills.map((skill, index) => (
          <li
            key={index}
            className="bg-gray-100 rounded px-4 py-2 shadow-sm flex justify-between"
          >
            <span>{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.level}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://your-cv-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-medium block"
      >
        📄 {t.viewCV}
      </a>

      <div className="flex gap-4 items-center py-5">
        <a
          href="https://github.com/nikushabejanidze"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-[#2DAAFA]"
        >
          <FaGithub className="text-2xl" />
          GitHub
        </a>

        <a
          href="https://github.com/nikushabejanidze"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-800 hover:text-[#2DAAFA]"
        >
          <FaLinkedin className="text-2xl" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Skills;
