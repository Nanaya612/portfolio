import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Contato from "./components/Contatos";


export const metadata: Metadata = {
  title: "Portfólio",
  description: "Meu Portfólio Profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Contato/>
      </body>
    </html>
  );
}
