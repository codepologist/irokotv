import irokotv from "../assets/images/irokotv_logo.svg";
import search from "../assets/images/search.svg";

const Navigation = () => {
  return (
    <>
      <header>
        <div className="container px-6 py-4">
          <nav className="navbar is-clipped" aria-label="main navigation">
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
                <a className="navbar-item">Movies</a>
                <a className="navbar-item">TV Series</a>
                <a className="navbar-item">
                  <img src={search} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navigation;
