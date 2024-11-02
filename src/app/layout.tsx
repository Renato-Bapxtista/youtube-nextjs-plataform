import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const ninito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codarse! o melhor app de cursos gratis",
  description: "Codarse plataforma gratuita de curso online para o melhot aprendisagem e foco."
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IRootLayout extends Readonly<{ children: React.ReactNode }> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-BR">
      <body className={ninito.className}>
        {children}
      </body>
    </html>
  );
}