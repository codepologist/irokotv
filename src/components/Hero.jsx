import { useEffect, useState } from "react";
import Search from "./Search/";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Hero = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [errorMessge, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      // Add the API URL to the fetch function
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage(
        "An error occurred while fetching movies. Please try again later."
      );
    }
  };

  useEffect(() => {}, []);
  return (
    <>
      <main className="section is-small is-flex is-justify-content-center is-align-items-center overflow-hidden">
        <section className="hero">
          <div className="hero-body">
            <h1
              className="title is-size-1-mobile has-text-white has-text-weight-bold has-text-centered"
              style={{ fontSize: "5.5rem", lineHeight: "100%" }}
            >
              Find <span className="text-gradient">Movies</span> You&apos;ll
              Love Without the Hassle
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
            <p className="help has-text-centered" style={{ color: "#FF0000" }}>
              This email is invalid
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
