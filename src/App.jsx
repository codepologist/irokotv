import { useState } from "react";
import Search from "./components/Search";
import irokotv from "../src/assets/images/irokotv_logo.svg";
import search from "../src/assets/images/search.svg";

const App = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <header>
        <div className="container px-6 py-4">
          <nav
            className="navbar is-clipped is-transparent"
            aria-label="main navigation"
          >
            <div className="navbar-brand px-4">
              <a className="navbar-item">
                <img src={irokotv} width="112" height="28" alt="IrokoTV" />
              </a>
              <a
                role="button"
                className="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div className="navbar-menu px-4">
              <div className="navbar-end">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Contact</a>
                <a className="navbar-item">
                  <img src={search} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className="section is-fullheight is-flex is-justify-content-center is-align-items-center overflow-hidden">
        <section className="hero">
          <div className="hero-body">
            <h1
              className="title has-text-white has-text-weight-bold has-text-centered"
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
