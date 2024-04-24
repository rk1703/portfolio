import "./globals.css";

export const metadata = {
  title: "Ravikant | 3D Portfolio",
  description: "My Portfolio website",
  openGraph: {
    title: "Ravikant | 3D Portfolio",
    description: "My Portfolio website",
    url: "https://rkworld.me",
    siteName: "Ravikant | 3D Portfolio",
    images: [
      {
        url: "https://www.rkworld.me/seo-cover.png",
        width: 800,
        height: 600,
        alt: "Ravikant | 3D Portfolio",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravikant | 3D Portfolio",
    description: "My Portfolio website",
    creator: "@rkworld",
    images: "https://www.rkworld.me/seo-cover.png",
  },
  category: "technology",
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
