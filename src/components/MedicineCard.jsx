function MedicineCard({ medicine, onClick }) {
  const info = medicine.openfda;

  return (
    <div className="medicine-card" onClick={onClick}>
      <h2>{info?.brand_name?.[0] || "Unknown medicine"}</h2>

      <p>
        <strong>Generic name:</strong> {info?.generic_name?.[0] || "N/A"}
      </p>

      <p>
        <strong>Manufacturer:</strong> {info?.manufacturer_name?.[0] || "N/A"}
      </p>

      <p>
        <strong>Product type:</strong> {info?.product_type?.[0] || "N/A"}
      </p>

      <p>
        <strong>Route:</strong> {info?.route?.[0] || "N/A"}
      </p>
    </div>
  );
}

export default MedicineCard;
