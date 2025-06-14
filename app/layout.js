import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharon Lawal Portfolio",
  description: "Sharon Lawal's personal portfolio website showcasing her skills and projects.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}