import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="section is-small is-flex is-justify-content-center is-align-items-center overflow-hidden">
        <Hero />

      </main>
    </>
  );
};

export default App;
