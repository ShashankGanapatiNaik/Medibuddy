import "./SearchBar.css";
function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search medicine"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
