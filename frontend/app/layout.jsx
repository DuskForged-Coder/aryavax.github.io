import "./globals.css";

export const metadata = {
  title: "ARYAVAX | Aditya Narayan Rautaray",
  description:
    "A futuristic personal brand and cybersecurity command center for Aditya Narayan Rautaray."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
