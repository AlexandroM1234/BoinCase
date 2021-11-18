import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoCard from "./CryptoCard";

const getData = () => {
  return axios
    .get("https://api.exchange.coinbase.com/currencies")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

const CryptoLists = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    getData().then((apiCryptos) => {
      setCryptos(apiCryptos);
    });
  }, []);
  return (
    <div>
      <p>Start Lists</p>
      {cryptos.map(({ id, name }) => {
        return <CryptoCard key={id} id={id} name={name} />;
      })}
    </div>
  );
};

export default CryptoLists;
