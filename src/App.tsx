import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Education } from "./pages/Education";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
// import { MediaBar } from "./components/MediaBar";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <main className="w-screen bg-zinc-900 text-gray-50 min-h-screen">
      <Header />
      {/* <MediaBar /> */}
      <section className="px-3 md:px-10 lg:px-10 pb-12 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
