import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function AppLayout({ children }) {
  return (
    <>
      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
