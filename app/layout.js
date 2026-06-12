import "./globals.css";

export const metadata = {
  title: "Jenny Lane Coaching",
  description: "Build a consistent coaching business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}