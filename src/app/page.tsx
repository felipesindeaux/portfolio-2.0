import About from "./about/page";
import Contact from "./contact/page";
import RoadMap from "./roadmap/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div id="page-container" className="overflow-y-scroll h-screen overflow-x-hidden font-[family-name:var(--text-font)] [&::-webkit-scrollbar]:hidden scrollbar-none">
      <main>
        <About />
        <Skills />
        <RoadMap />
        <Contact />
      </main>
    </div>
  );
}
