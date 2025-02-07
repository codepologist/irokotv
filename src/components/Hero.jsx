import { useState } from "react";
import Search from "./Search/";

const Hero = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <section className="hero">
      <div className="hero-body">
        <h1
          className="title is-size-1-mobile has-text-white has-text-weight-bold has-text-centered"
          style={{ fontSize: "5.5rem", lineHeight: "100%" }}
        >
          Find <span className="text-gradient">Movies</span> You&apos;ll Love
          Without the Hassle
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
  );
};

export default Hero;
