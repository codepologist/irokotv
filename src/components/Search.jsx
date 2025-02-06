import searchIcon from "../assets/images/search.svg";

// eslint-disable-next-line react/prop-types
const Search = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="search">
      <div className="field">
        <div className="control has-icons-left">
          <input
            className="input is-radiusless is-large"
            type="text"
            placeholder="Search for any latest nollywood movie"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <span className="icon is-small is-left">
            <img src={searchIcon} alt="Search Icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Search;
