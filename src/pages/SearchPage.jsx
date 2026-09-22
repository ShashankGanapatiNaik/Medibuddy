import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MedicineCard from "../components/MedicineCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import { searchMedicines } from "../services/fdaApi";
import "./SearchPage.css";

function SearchPage({ onSelectMedicine }) {
  const [search, setSearch] = useState("");
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;
    setLoading(true);
    setError(false);
    setMedicines([]);
    try {
      const results = await searchMedicines(search);

      setMedicines(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <h1>Medicine Search</h1>
      <p className="subtitle">Search medicines by brand name</p>
      <SearchBar value={search} onChange={setSearch} onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <ErrorMessage />}
      {!loading && !error && search && medicines.length === 0 && (
        <p className="message">No results found.</p>
      )}
      <div className="medicine-list">
        {medicines.map((medicine, index) => (
          <MedicineCard
            key={index}
            medicine={medicine}
            onClick={() => onSelectMedicine(medicine)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
