import About from "./about/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="overflow-y-scroll h-screen overflow-x-hidden font-[family-name:var(--text-font)]">
      <main>
        <About />
        <div>
          <Skills />
        </div>
      </main>
    </div>
  );
}
