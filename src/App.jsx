import About from "./sections/about";
import Prize from "./sections/prize";
import Hero from "./sections/Hero";
import { FAQ } from "./sections/FAQ";
import Timeline from "./sections/Timeline";
import Footer from "./sections/Footer";
import Sponsors from "./sections/Sponsors";

import "./App.css";
import Contacts from "./sections/Contact";

function App() {
  return (
    <>
      <main className="bg-custom bg-[#080808] h-full">
        <Hero />
        <About />
        <Timeline />
        <Prize />
        <Sponsors />
        <FAQ />
        <Contacts />

        <Footer />
      </main>
    </>
  );
}

export default App;
