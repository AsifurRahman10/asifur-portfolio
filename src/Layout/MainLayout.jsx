import { Navbar } from "../Components/Navbar";
import { Hero } from "../Pages/Hero/Hero";
import { Technology } from "../Pages/Technology/Technology";
import Projects from "../Pages/Projects/Projects";
import { AboutMe } from "../Pages/AboutMe/AboutMe";
import Education from "../Pages/Education/Education";
import ContactUs from "../Pages/ContactUs/ContactUs";
import { Cursor } from "../Components/Cursor";
import { Parallax } from "../Pages/Parallax/Parallax";

export const MainLayout = () => {
  return (
    <>
      <Cursor />
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        {/* The fixed background */}
      </div>

      <main className="relative flex flex-col items-center gap-10">
        {/* Ensure the content is on top of the background */}
        <Navbar />
        {/* hero */}
        <Hero />

        {/* about me */}
        <AboutMe />

        {/* parallax */}
        {/* <Parallax /> */}

        {/* technology */}
        <Technology />

        {/* projects */}
        <Projects />

        {/* Education */}
        <Education />

        {/* Contact us */}

        <ContactUs />
      </main>
    </>
  );
};
