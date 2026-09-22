import "./MedicineDetails.css";
function MedicineDetails({ medicine, onBack }) {
  if (!medicine) {
    return (
      <div className="details-page">
        <h2>Medicine information are not availabel</h2>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }
  const info = medicine.openfda;
  return (
    <div className="details-page">
      <button className="back-button" onClick={onBack}>
        Back
      </button>

      <div className="details-card">
        <h1>{info?.brand_name?.[0] || "Unknown medicine"}</h1>

        <div className="detail">
          <strong>Generic name</strong>
          <span>{info?.generic_name?.[0] || "N/A"}</span>
        </div>

        <div className="detail">
          <strong>Manufacturer</strong>
          <span>{info?.manufacturer_name?.[0] || "N/A"}</span>
        </div>

        <div className="detail">
          <strong>Product type</strong>
          <span>{info?.product_type?.[0] || "N/A"}</span>
        </div>

        <div className="detail">
          <strong>Route</strong>
          <span>{info?.route?.[0] || "N/A"}</span>
        </div>

        <div className="detail">
          <strong>Application number</strong>
          <span>{info?.application_number?.[0] || "N/A"}</span>
        </div>

        <div className="detail">
          <strong>Substance</strong>
          <span>{info?.substance_name?.[0] || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetails;
