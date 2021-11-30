import React from "react";
import { Link } from "react-router-dom";
const CryptoCard = ({ id, name }) => {
  return (
    <div>
      <Link to={`/${id}`}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default CryptoCard;
