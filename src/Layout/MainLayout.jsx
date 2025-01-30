import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export const MainLayout = () => {
  return (
    <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <main className="flex flex-col items-center">
        <Navbar />
        {/* outlet */}
        <Outlet />

        {/* footer */}
        <Footer />
      </main>
      {/* </div>
    </div> */}
    </div>
  );
};
