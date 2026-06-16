import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharon Lawal — Software Engineer & Project Manager",
  description: "Personal portfolio of Sharon Lawal, a Software Engineer and Project Manager specialising in frontend engineering and technical community leadership.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen theme-bg theme-text`}>
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}