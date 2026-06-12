import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Configure the premium sans-serif font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Configure the elegant serif headline font
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: "Jenny Lane Coaching | Premium Client Conversion Systems",
  description: "Helping ambitious coaches install predictable client acquisition pipelines and scale their revenue.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}