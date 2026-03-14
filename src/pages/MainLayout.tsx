import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-brand-darker">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
