import About from "./sections/about";
import Prize from "./sections/prize";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <main className="bg-custom bg-[#080808]">
        <Hero />
        <About />
        <Prize />
        <FAQ />
      </main>
    </>
  );
}

export default App;
