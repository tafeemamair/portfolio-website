import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aisan-tafeem.vercel.app"),
  title: "Aisan Tafeem Amair | AI & ML Engineer · AI Agents · Automation",
  description:
    "Aisan Tafeem Amair is an AI & ML Engineer building AI agents, automation, and intelligent systems grounded in data and practical engineering.",
  alternates: {
    canonical: "https://aisan-tafeem.vercel.app/",
  },
  openGraph: {
    title: "Aisan Tafeem Amair | AI & ML Engineer · AI Agents · Automation",
    description:
      "Aisan Tafeem Amair is an AI & ML Engineer building AI agents, automation, and intelligent systems grounded in data and practical engineering.",
    url: "https://aisan-tafeem.vercel.app/",
    siteName: "Aisan Tafeem Amair Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aisan Tafeem Amair - AI & ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aisan Tafeem Amair | AI & ML Engineer · AI Agents · Automation",
    description:
      "Aisan Tafeem Amair is an AI & ML Engineer building AI agents, automation, and intelligent systems grounded in data and practical engineering.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aisan Tafeem Amair",
  jobTitle: "AI & ML Engineer",
  url: "https://aisan-tafeem.vercel.app/",
  description:
    "Aisan Tafeem Amair is an AI & ML Engineer building AI agents, automation, and intelligent systems grounded in data and practical engineering.",
  sameAs: [
    "https://github.com/tafeemamair",
    "https://www.linkedin.com/in/aisan-tafeem-amair-721400147/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
