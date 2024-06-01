import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MenuItem from "@/components/MenuItem";
import Providers from "@/app/Providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb NextJs App",
  description: "by Shivam Mishra",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
