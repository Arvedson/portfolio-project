// components/ProjectCard.tsx

import Image from "next/image";
import Link from "next/link";
import useTheme from "../../hooks/useTheme";

interface ProjectCardProps {
  title: string;
  description: string;
  imageLight: string; // Imagen para el tema claro
  imageDark: string; // Imagen para el tema oscuro
  url: string;
}

export default function ProjectCard({
  title,
  description,
  imageLight,
  imageDark,
  url,
}: ProjectCardProps) {
  const theme = useTheme();
  const projectImage = theme === "dark" ? imageDark : imageLight; // Selección de la imagen según el tema

  return (
    <div
      className="rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 h-full flex flex-col"
      style={{
        // Fondo translúcido según el tema
        backgroundColor:
          theme === "dark"
            ? `rgba(var(--secondary-dark-rgb), 0.4)` // Fondo oscuro translúcido
            : `rgba(var(--tertiary-light-rgb), 0.6)`, // Fondo claro translúcido

        // Color de texto según el tema
        color:
          theme === "dark"
            ? "var(--foreground-dark)"
            : "var(--foreground-light)",

        // Borde dinámico según el tema
        border:
          theme === "dark"
            ? `1px solid var(--foreground-dark)`
            : `1px solid var(--foreground-light)`,

        // Sombra ajustada según el tema
        boxShadow:
          theme === "dark"
            ? `0 4px 8px var(--box-shadow-dark)`
            : `0 4px 8px var(--box-shadow-light)`,
      }}
    >
      <Link href={url} passHref>
        <div>
          {/* Contenedor de la imagen */}
          <div className="relative w-full h-48">
            <Image
              src={projectImage}
              alt={`${title} image`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          {/* Contenido del card */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm" style={{ color: "var(--secondary)" }}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
