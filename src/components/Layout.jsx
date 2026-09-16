import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

/**
 * Navbar + Footer sab pages me fixed rehta hai.
 * Sirf <Outlet /> (center content) page ke hisaab se badalta hai.
 */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      {/* pt = navbar ki height, taaki content navbar ke neeche na chhupe */}
      <main className="flex-1 pt-[68px] lg:pt-[76px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
