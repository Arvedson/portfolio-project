"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import i18next from "i18next";
import {
  FaCode,
  FaRocket,
  FaCogs,
  FaGraduationCap,
  FaTrophy,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";

export default function About() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const skills = [
    { name: "Frontend Development", level: 95, icon: <FaCode /> },
    { name: "Backend Development", level: 90, icon: <FaCogs /> },
    { name: "Mobile Development", level: 85, icon: <FaMobile /> },
    { name: "Database Design", level: 88, icon: <FaDatabase /> },
    { name: "Cloud Services", level: 82, icon: <FaCloud /> },
    { name: "DevOps", level: 80, icon: <FaRocket /> },
  ];

  const achievements = [
    {
      title: "Full-Stack Developer",
      description: "3+ years building scalable web applications",
      icon: <FaTrophy />,
    },
    {
      title: "Modern Technologies",
      description: "Expert in React, Next.js, Node.js, and TypeScript",
      icon: <FaLightbulb />,
    },
    {
      title: "Team Collaboration",
      description: "Experienced in agile methodologies and code reviews",
      icon: <FaUsers />,
    },
    {
      title: "Global Projects",
      description: "Worked with international teams and clients",
      icon: <FaGlobe />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <div className="card-style2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="/pp.png"
                alt="Profile Picture"
                width={200}
                height={200}
                className="rounded-full shadow-2xl border-4 border-[var(--primary)]"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {t("about_title")}
              </h1>
              <h2 className="text-2xl font-semibold mb-4 text-[var(--secondary)]">
                {t("about_subtitle")}
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                {t("about_description")}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="px-4 py-2 bg-[var(--primary)] bg-opacity-20 rounded-full border border-[var(--primary)]">
                  <span className="text-sm font-medium">
                    Full-Stack Developer
                  </span>
                </div>
                <div className="px-4 py-2 bg-[var(--accent)] bg-opacity-20 rounded-full border border-[var(--accent)]">
                  <span className="text-sm font-medium">React Expert</span>
                </div>
                <div className="px-4 py-2 bg-[var(--secondary)] bg-opacity-20 rounded-full border border-[var(--secondary)]">
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{t("skills_title")}</h2>
          <p className="text-lg text-[var(--secondary)]">
            {t("skills_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card-style">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">{skill.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <div className="w-full bg-[var(--secondary)] bg-opacity-20 rounded-full h-2 mt-2">
                    <div
                      className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-[var(--secondary)]">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">{t("achievements_title")}</h2>
          <p className="text-lg text-[var(--secondary)]">
            {t("achievements_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="card-style">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-xl">{achievement.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-[var(--secondary)]">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-4xl mx-auto">
        <div className="card-style2 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">{t("cta_title")}</h2>
            <p className="text-lg text-[var(--secondary)] mb-6 max-w-2xl mx-auto">
              {t("cta_description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[var(--secondary)] hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              {t("contact_me")}
            </a>

            <a
              href="/projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 hover:shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              {t("view_projects")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
