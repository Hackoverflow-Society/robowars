import About from "./sections/about";
import Prize from "./sections/prize";
import Hero from "./sections/Hero";
import { FAQ } from "./sections/FAQ";
import Timeline from "./sections/Timeline";
function App() {
  return (
    <>
      <main className="bg-custom bg-[#080808] h-full">
        <Hero />
        <About />
        <Timeline />
        <Prize />
        <FAQ />
      </main>
    </>
  );
}

export default App;
