import "./globals.css";

export const metadata = {
  title: "Miodrag Strak | Product & Automation",
  description:
    "Product Manager specializing in automation, AI systems, and complex digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
