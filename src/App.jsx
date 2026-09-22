import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import MedicineDetails from "./pages/MedicineDetails";

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  if (selectedMedicine) {
    return (
      <MedicineDetails
        medicine={selectedMedicine}
        onBack={() => setSelectedMedicine(null)}
      />
    );
  }

  return <SearchPage onSelectMedicine={setSelectedMedicine} />;
}

export default App;
