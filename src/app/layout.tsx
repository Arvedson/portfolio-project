"use client"; // Esto asegura que el archivo se ejecute en el cliente (Client Component)

import "./globals.css";
import Navbar from '../../src/app/components/Navbar';
import '/src/config/i18n'; // Importamos la configuración de i18n

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
