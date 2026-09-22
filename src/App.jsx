import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import MedicineDetails from "./pages/MedicineDetails";

function App() {
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  // return <h1>Hello</h1>;
  if (selectedMedicine) {
    return (
      <MedicineDetails
        medicine={selectedMedicine}
        onBack={() => setSelectedMedicine(null)}
      />
    );
  }
}

export default App;
