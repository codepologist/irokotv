import searchIcon from "../assets/images/search.svg";

// eslint-disable-next-line react/prop-types
const Search = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <div className="search">
      <div>
        <p className="control has-icons-left">
          <input
            className="input is-medium is-radiusless"
            type="text"
            placeholder="Search for any latest nollywood movie"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
          <span className="icon is-small is-left">
            <img src={searchIcon} alt="Search Icon" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Search;
