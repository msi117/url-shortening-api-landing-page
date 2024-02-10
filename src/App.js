import Boost from "./components/boost/Boost";
import Footer from "./containers/footer/Footer";
import Hero from "./containers/hero/Hero";
import MainSection from "./containers/mainsection/MainSection";
import Navbar from "./containers/navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <MainSection />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;
