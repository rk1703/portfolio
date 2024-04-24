import "./globals.css";

export const metadata = {
  title: "Ravikant | 3D Portfolio",
  description: "My Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
