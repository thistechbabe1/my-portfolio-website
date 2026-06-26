
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';



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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen theme-bg theme-text" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <ThemeProvider>
          <CustomCursor />
          <AnimatedBackground />
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