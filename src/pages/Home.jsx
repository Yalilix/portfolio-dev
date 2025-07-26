import { CenterImage } from "../components/CenterImage";
import { Nav } from "../components/Nav";
import ReactLenis from "lenis/react";
import { Intro } from "../components/Intro";
import { Projects } from "../components/Projects";
import { TechStacks } from "../components/TechStacks";
import { backendIcons, frontendIcons, otherIcons } from "../TechIcons";
import SplashCursor from "../components/SplashCursor";

const Home = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-zinc-950 via-blue-950 to-zinc-900">
      <SplashCursor />
      <div className="relative z-10">
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            // infinite: true,
            // syncTouch: true,
          }}
        >
          <Nav />
          <StartContent />
          <Projects />
          <TechStacks
            techSections={["Frontend", "Backend", "Others"]}
            icons={[frontendIcons, backendIcons, otherIcons]}
          />
          <Intro />
          <Footer />
        </ReactLenis>
      </div>
    </div>
  );
};

export default Home;

const SECTION_HEIGHT = 1700;

const StartContent = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage SECTION_HEIGHT={SECTION_HEIGHT} />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-600 text-center py-8">
      <p className="text-md">
        © {new Date().getFullYear()} Yanlin Li. All rights reserved.
      </p>
    </footer>
  );
};
