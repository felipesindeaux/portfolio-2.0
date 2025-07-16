import About from "./about/page";
import RoadMap from "./roadmap/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div id="page-container" className="overflow-y-scroll h-screen overflow-x-hidden font-[family-name:var(--text-font)] [&::-webkit-scrollbar]:hidden scrollbar-none">
      <main>
        <About />
        <Skills />
        <RoadMap />
        <div className="h-[100vh]"/>
      </main>
    </div>
  );
}
