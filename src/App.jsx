import { useState } from "react";
import Search from "./components/Search";
import Navigation from "./components/Navigation";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
    <Navigation />
      <main className="section is-fullheight is-flex is-justify-content-center is-align-items-center overflow-hidden">
        <section className="hero">
          <div className="hero-body">
            <h1
              className="title is-size-1-mobile has-text-white has-text-weight-bold has-text-centered"
              style={{ fontSize: "5.5rem", lineHeight: "100%" }}
            >
              Find <span className="text-gradient">Nollywood Movies</span>
              <br /> You&apos;ll Love Without the Hassle
            </h1>
            <div className="is-flex is-justify-content-center is-align-items-center">
              <Search
                searchKeyword={searchKeyword}
                setSearchKeyword={setSearchKeyword}
              />
            </div>
            <h1 className="subtitle has-text-white has-text-centered">
              {searchKeyword}
            </h1>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
