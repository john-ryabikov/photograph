import Script from "next/script";
import { Montserrat } from "next/font/google";
import "@styles/globals.scss";

import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const mont = Montserrat({ 
  subsets: ["cyrillic", "latin"],
  preload: true,
  variable: "--mont"
});

export const metadata = {
  title: "Portfolio for photographer",
  description: "Сайт реализован с помощью Next.js",
  authors: [{name: 'Just-site.ru'}],
  openGraph: { images: [
      { url: 'http://localhost:3000/og-image.png'}
    ] 
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={mont.variable}>
          <Header/>
          <main className="main">{children}</main>
          <Footer/>
          <Script src="js/configs.js"/>
      </body>
    </html>
  );
}
