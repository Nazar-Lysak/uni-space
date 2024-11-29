import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"body_content"}>
        <Header />
        <main className={"main_content"}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
