import React from "react";
import data from "../../data/data";
import { useNavigate } from "react-router-dom";

function ProductInfo() {
  const navigate = useNavigate();

  return (
    <>
      <div className="prduct-view">
        <div
          onClick={() => {
            navigate("/shop");
          }}
        >
          Back to Shop
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
