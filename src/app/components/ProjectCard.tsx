// components/ProjectCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import useTheme from '../../hooks/useTheme';

interface ProjectCardProps {
  title: string;
  description: string;
  imageLight: string; // Imagen para el tema claro
  imageDark: string;  // Imagen para el tema oscuro
  url: string;
}

export default function ProjectCard({ title, description, imageLight, imageDark, url }: ProjectCardProps) {
  const theme = useTheme();
  const projectImage = theme === 'dark' ? imageDark : imageLight; // Selección de la imagen según el tema

  return (
    <div
      className="rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-lg"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)'
      }}
    >
      <Link href={url} passHref>
        <div>
          <div className="relative w-full h-48">
            <Image
              src={projectImage}
              alt={`${title} image`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-sm" style={{ color: 'var(--secondary)' }}>
              {description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
