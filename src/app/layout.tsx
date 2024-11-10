"use client";

import "./globals.css";
import Navbar from '../../src/app/components/Navbar';
import Footer from "./components/Footer";
import '/src/config/i18n';
// RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Contenedor del fondo animado */}
        <div className="background-container">
          <div className="night">
            {[...Array(7)].map((_, i) => {
              // Genera valores aleatorios para cada estrella
              const randomTop = Math.random() * 100;  // Valor entre 0% y 100% para top
              const randomLeft = Math.random() * 100; // Valor entre 0% y 100% para left
              const randomDelay = Math.random() * 5;  // Valor entre 0s y 5s para el retraso de la animación

              return (
                <div
                  key={i}
                  className="shooting_star"
                  style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    animationDelay: `${randomDelay}s`
                  }}
                ></div>
              );
            })}
          </div>
        </div>

        {/* Contenido principal de la aplicación */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
