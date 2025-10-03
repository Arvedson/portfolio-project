"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaEnvelope,
  FaCode,
  FaCodeBranch,
  FaSync,
  FaChartLine,
  FaDatabase,
  FaChartBar,
  FaChartArea,
  FaServer,
  FaKey,
  FaLock,
  FaPlug,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiCss3,
  SiFigma,
  SiTypescript,
  SiGooglecloud,
  SiVercel,
  SiNpm,
  SiHtml5,
  SiDocker,
  SiFirebase,
  SiGit,
} from "react-icons/si";

import { Icon } from "@iconify/react"; // Importación de Iconify para NextAuth.js

const Technologies = () => {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

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

  const technologies = [
    {
      name: "React",
      icon: <FaReact className="text-blue-500" />,
      description: t("react_description"),
      level: 90,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs style={{ color: "var(--foreground)" }} />,
      description: t("nextjs_description"),
      level: 80,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      description: t("nodejs_description"),
      level: 80,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400" />,
      description: t("tailwindcss_description"),
      level: 85,
    },
    {
      name: "GitHub",
      icon: <FaGithub style={{ color: "var(--foreground)" }} />,
      description: t("github_description"),
      level: 90,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-500" />,
      description: t("javascript_description"),
      level: 85,
    },
    {
      name: "Python",
      icon: <SiPython className="text-blue-600" />,
      description: t("python_description"),
      level: 57,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-700" />,
      description: t("mongodb_description"),
      level: 62,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="text-blue-600" />,
      description: t("postgresql_description"),
      level: 75,
    },
    {
      name: "Prisma",
      icon: <SiPrisma style={{ color: "var(--foreground)" }} />,
      description: t("prisma_description"),
      level: 80,
    },
    {
      name: "CSS3",
      icon: <SiCss3 className="text-blue-500" />,
      description: t("css_description"),
      level: 90,
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-pink-600" />,
      description: t("figma_description"),
      level: 80,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600" />,
      description: t("typescript_description"),
      level: 80,
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud className="text-yellow-500" />,
      description: t("googlecloud_description"),
      level: 70,
    },
    {
      name: "Vercel",
      icon: <SiVercel style={{ color: "var(--foreground)" }} />,
      description: t("vercel_description"),
      level: 80,
    },
    {
      name: "NextAuth.js",
      icon: (
        <Icon
          icon="mdi:shield-lock"
          width="48"
          height="48"
          className="text-purple-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="NextAuth.js icon"
        />
      ),
      description: t("nextauth_description"),
      level: 75,
    },
    {
      name: "Neon Tech",
      icon: (
        <Icon
          icon="mdi:database"
          width="48"
          height="48"
          className="text-green-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Neon Tech icon"
        />
      ),
      description: t("neontech_description"),
      level: 70,
    },
    // Nuevas tecnologías del repositorio Arvedson-Art
    {
      name: "Stripe",
      icon: (
        <Icon
          icon="simple-icons:stripe"
          width="48"
          height="48"
          className="text-purple-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="Stripe icon"
        />
      ),
      description: t("stripe_description"),
      level: 85,
    },
    {
      name: "ESLint",
      icon: (
        <Icon
          icon="simple-icons:eslint"
          width="48"
          height="48"
          className="text-purple-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="ESLint icon"
        />
      ),
      description: t("eslint_description"),
      level: 80,
    },
    {
      name: "Prettier",
      icon: (
        <Icon
          icon="simple-icons:prettier"
          width="48"
          height="48"
          className="text-pink-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Prettier icon"
        />
      ),
      description: t("prettier_description"),
      level: 85,
    },
    {
      name: "Framer Motion",
      icon: (
        <Icon
          icon="simple-icons:framer"
          width="48"
          height="48"
          className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Framer Motion icon"
        />
      ),
      description: t("framer_motion_description"),
      level: 75,
    },
    {
      name: "Zod",
      icon: (
        <Icon
          icon="simple-icons:zod"
          width="48"
          height="48"
          className="text-red-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Zod icon"
        />
      ),
      description: t("zod_description"),
      level: 80,
    },
    {
      name: "SendGrid",
      icon: (
        <Icon
          icon="simple-icons:sendgrid"
          width="48"
          height="48"
          className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="SendGrid icon"
        />
      ),
      description: t("sendgrid_description"),
      level: 70,
    },
    {
      name: "React Query",
      icon: (
        <Icon
          icon="simple-icons:reactquery"
          width="48"
          height="48"
          className="text-red-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="React Query icon"
        />
      ),
      description: t("react_query_description"),
      level: 75,
    },
    {
      name: "Lucide",
      icon: <FaCode className="text-gray-600" />,
      description: t("lucide_description"),
      level: 85,
    },
    {
      name: "HTML5",
      icon: <SiHtml5 className="text-orange-500" />,
      description: t("html5_description"),
      level: 90,
    },
    {
      name: "Git",
      icon: <SiGit className="text-orange-600" />,
      description: t("git_description"),
      level: 85,
    },
    {
      name: "NPM",
      icon: <SiNpm className="text-red-500" />,
      description: t("npm_description"),
      level: 90,
    },
    {
      name: "Docker",
      icon: <SiDocker className="text-blue-500" />,
      description: t("docker_description"),
      level: 70,
    },
    {
      name: "AWS",
      icon: (
        <Icon
          icon="simple-icons:amazonaws"
          width="48"
          height="48"
          className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="AWS icon"
        />
      ),
      description: t("aws_description"),
      level: 65,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-yellow-500" />,
      description: t("firebase_description"),
      level: 70,
    },
    {
      name: "Supabase",
      icon: (
        <Icon
          icon="simple-icons:supabase"
          width="48"
          height="48"
          className="text-green-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Supabase icon"
        />
      ),
      description: t("supabase_description"),
      level: 75,
    },
    {
      name: "Redis",
      icon: (
        <Icon
          icon="simple-icons:redis"
          width="48"
          height="48"
          className="text-red-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="Redis icon"
        />
      ),
      description: t("redis_description"),
      level: 70,
    },
    {
      name: "Jest",
      icon: (
        <Icon
          icon="simple-icons:jest"
          width="48"
          height="48"
          className="text-red-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Jest icon"
        />
      ),
      description: t("jest_description"),
      level: 75,
    },
    {
      name: "Cypress",
      icon: (
        <Icon
          icon="simple-icons:cypress"
          width="48"
          height="48"
          className="text-green-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="Cypress icon"
        />
      ),
      description: t("cypress_description"),
      level: 70,
    },
    {
      name: "Webpack",
      icon: (
        <Icon
          icon="simple-icons:webpack"
          width="48"
          height="48"
          className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Webpack icon"
        />
      ),
      description: t("webpack_description"),
      level: 65,
    },
    {
      name: "Babel",
      icon: (
        <Icon
          icon="simple-icons:babel"
          width="48"
          height="48"
          className="text-yellow-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Babel icon"
        />
      ),
      description: t("babel_description"),
      level: 70,
    },
    {
      name: "Google Cloud",
      icon: <SiGooglecloud className="text-blue-500" />,
      description: t("googlecloud_description"),
      level: 75,
    },
    {
      name: "Google Maps API",
      icon: (
        <Icon
          icon="simple-icons:googlemaps"
          width="48"
          height="48"
          className="text-green-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Google Maps API icon"
        />
      ),
      description: t("google_maps_description"),
      level: 80,
    },
    {
      name: "Node Mailer",
      icon: <FaEnvelope className="text-orange-500" />,
      description: t("nodemailer_description"),
      level: 75,
    },
    {
      name: "Flask",
      icon: (
        <Icon
          icon="simple-icons:flask"
          width="48"
          height="48"
          className="text-gray-600 transition-transform duration-300 group-hover:scale-110"
          aria-label="Flask icon"
        />
      ),
      description: t("flask_description"),
      level: 70,
    },
    {
      name: "Cursor",
      icon: <FaCodeBranch className="text-blue-600" />,
      description: t("cursor_description"),
      level: 90,
    },
    {
      name: "VS Code",
      icon: (
        <Icon
          icon="simple-icons:visualstudiocode"
          width="48"
          height="48"
          className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="VS Code icon"
        />
      ),
      description: t("vscode_description"),
      level: 95,
    },
    {
      name: "Nodemon",
      icon: <FaSync className="text-green-600" />,
      description: t("nodemon_description"),
      level: 85,
    },
    {
      name: "Pandas",
      icon: <FaDatabase className="text-blue-500" />,
      description: t("pandas_description"),
      level: 80,
    },
    {
      name: "Backtrader",
      icon: <FaChartLine className="text-purple-600" />,
      description: t("backtrader_description"),
      level: 75,
    },
    {
      name: "NumPy",
      icon: <FaChartBar className="text-blue-600" />,
      description: t("numpy_description"),
      level: 85,
    },
    {
      name: "Matplotlib",
      icon: <FaChartArea className="text-orange-500" />,
      description: t("matplotlib_description"),
      level: 80,
    },
    {
      name: "Express.js",
      icon: <FaServer className="text-green-500" />,
      description: t("express_description"),
      level: 85,
    },
    {
      name: "dotenv",
      icon: <FaKey className="text-purple-500" />,
      description: t("dotenv_description"),
      level: 90,
    },
    {
      name: "python-dotenv",
      icon: <FaLock className="text-indigo-500" />,
      description: t("python_dotenv_description"),
      level: 85,
    },
    {
      name: "psycopg2-binary",
      icon: <FaPlug className="text-blue-700" />,
      description: t("psycopg2_description"),
      level: 80,
    },
    {
      name: "SQLAlchemy",
      icon: <FaLayerGroup className="text-red-500" />,
      description: t("sqlalchemy_description"),
      level: 75,
    },
    // Tecnologías de IA
    {
      name: "ChatGPT",
      icon: (
        <Icon
          icon="simple-icons:openai"
          width="48"
          height="48"
          className="text-green-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="ChatGPT icon"
        />
      ),
      description: t("chatgpt_description"),
      level: 90,
    },
    {
      name: "Claude",
      icon: (
        <Icon
          icon="simple-icons:anthropic"
          width="48"
          height="48"
          className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Claude icon"
        />
      ),
      description: t("claude_description"),
      level: 85,
    },
    {
      name: "Anthropic",
      icon: (
        <Icon
          icon="simple-icons:anthropic"
          width="48"
          height="48"
          className="text-purple-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Anthropic icon"
        />
      ),
      description: t("anthropic_description"),
      level: 80,
    },
    {
      name: "Gemini",
      icon: (
        <Icon
          icon="simple-icons:googlebard"
          width="48"
          height="48"
          className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="Gemini icon"
        />
      ),
      description: t("gemini_description"),
      level: 85,
    },
    {
      name: "DeepSeek",
      icon: (
        <Icon
          icon="mdi:brain"
          width="48"
          height="48"
          className="text-indigo-500 transition-transform duration-300 group-hover:scale-110"
          aria-label="DeepSeek icon"
        />
      ),
      description: t("deepseek_description"),
      level: 80,
    },
  ];

  const handleIconClick = (techName: string, techLevel: number) => {
    if (selectedTech === techName) {
      // Iniciar animación de cierre
      setIsClosing(true);
      setTimeout(() => {
        setSelectedTech(null);
        setProgress(0);
        setIsClosing(false);
      }, 300); // Duración de la animación de cierre
    } else {
      setSelectedTech(techName);
      setProgress(0); // Reseteamos el progreso antes de llenarlo
      // Llenamos la barra con una pequeña demora para que coincida con la animación
      setTimeout(() => setProgress(techLevel), 500); // Ajustado para coincidir con animate-progressFill
    }
  };

  return (
    <div className="container px-4 lg:px-12 py-8 pt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 w-full md:grid-cols-4 lg:grid-cols-5 gap-6 lg-12 mx-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={`tech-card flex flex-col items-center hover:scale-110 transition-transform cursor-pointer relative
          ${selectedTech === tech.name ? "selected-tech" : ""}`}
            onClick={() => handleIconClick(tech.name, tech.level)}
          >
            <div className="text-4xl lg:text-5xl mb-3">{tech.icon}</div>
            <p className="text-sm font-medium text-center leading-tight">
              {tech.name}
            </p>

            {selectedTech === tech.name && !isClosing && (
              <div className="mt-4 p-4 rounded shadow-lg text-center description-box animate-fadeInUp w-full">
                <p className="text-sm mb-3 animate-fadeIn">
                  {tech.description}
                </p>

                {/* Barra de nivel */}
                <div className="progress-container animate-slideIn">
                  <div
                    className="progress-bar"
                    style={{
                      width: `${progress}%`,
                      transition: "width 0.8s ease-out",
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2 animate-fadeIn">{`${tech.level}%`}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
