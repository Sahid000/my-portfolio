import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Toaster } from "sonner";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="bg-primary-color">
        <div className="fixed top-0 z-50 w-full">
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
};

export default MainLayout;
