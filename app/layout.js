import "./globals.css";

export const metadata = {
  title: "Aisan Tafeem Amair | Data Scientist · ML Engineer · AI Solutions",
  description:
    "Aisan Tafeem Amair is a Data Scientist, Machine Learning Engineer, and AI Solutions Freelancer helping businesses turn data, AI, and automation into practical solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
