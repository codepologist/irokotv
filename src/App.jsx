import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <main className="section is-fullheight is-flex is-justify-content-center is-align-items-center overflow-hidden">
      <header>
        <section className="hero">
          <div className="hero-body">
            <h1 className="title has-text-white has-text-weight-bold has-text-centered">
              Find <span className="text-gradient">Nollywood Movies</span>{" "}
              You&apos;ll Love
              <br />
              Without the Hassle
            </h1>
            <Search
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
            />
            <h1 className="subtitle has-text-white has-text-centered">
              {searchKeyword}
            </h1>
          </div>
        </section>
      </header>
    </main>
  );
};

export default App;
