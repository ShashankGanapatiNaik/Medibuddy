import "./MedicineCard.css";

function MedicineCard({ medicine, onClick }) {
  const info = medicine.openfda;

  return (
    <div className="medicine-card" onClick={onClick}>
      <h2>{info?.brand_name?.[0] || "Unknown Medicine"}</h2>

      <p>
        <strong>Generic:</strong> {info?.generic_name?.[0] || "N/A"}
      </p>

      <p>
        <strong>Manufacturer:</strong> {info?.manufacturer_name?.[0] || "N/A"}
      </p>

      <p>
        <strong>Product Type:</strong> {info?.product_type?.[0] || "N/A"}
      </p>

      <p>
        <strong>Route:</strong> {info?.route?.[0] || "N/A"}
      </p>
    </div>
  );
}

export default MedicineCard;
