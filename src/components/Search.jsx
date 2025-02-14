import searchIcon from "../assets/images/search.svg";

// eslint-disable-next-line react/prop-types
const Search = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="search">
      <div className="field has-addons">
        <div className="control has-icons-left">
          <input
            className="input is-radiusless is-large"
            style={{ border: "none" }}
            type="text"
            placeholder="Search movies"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <span className="icon is-small is-left">
            <img src={searchIcon} alt="Search Icon" />
          </span>
        </div>
        <div className="control">
          <button className="button is-large" style={{ borderColor: "none" }}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
