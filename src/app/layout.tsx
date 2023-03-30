import "./globals.css";

export const metadata = {
  title: "Excalidraw React Challenge",
  description: "attempting to re-create the basic functionality of excalidraw using react and next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
