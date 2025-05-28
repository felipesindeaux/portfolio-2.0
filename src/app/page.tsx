import About from "./about/page";

export default function Home() {
  return (
    <div className="overflow-y-scroll h-screen overflow-x-hidden font-[family-name:var(--text-font)]">
      <main>
        <About />
        <div className="w-full h-screen bg-black">
          Teste Scroll
        </div>
      </main>
    </div>
  );
}
