import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";
import { Hero } from "../Pages/Hero/Hero";
import { Technology } from "../Pages/Technology/Technology";
import Projects from "../Pages/Projects/Projects";

export const MainLayout = () => {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* The fixed background */}
      </div>

      <main className="relative flex flex-col items-center min-h-screen">
        {/* Ensure the content is on top of the background */}
        <Navbar />
        {/* hero */}
        <Hero />

        {/* technology */}
        <Technology />

        {/* projects */}
        <Projects />

        {/* footer */}
        <Footer />
      </main>
    </>
  );
};
