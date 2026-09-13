import "./globals.css";

export const metadata = {
  title: "Aisan Tafeem Amair | AI & ML Engineer · AI Agents · Automation",
  description:
    "Aisan Tafeem Amair is an AI & ML Engineer building AI agents, automation, and intelligent systems grounded in data and practical engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
