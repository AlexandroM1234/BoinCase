import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const CryptoDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getData = () => {
    return axios
      .get(`https://api.exchange.coinbase.com/currencies/${id}`)
      .then((data) => {
        return data.data.details;
      })
      .catch((err) => {
        console.log("error getting crypto data", err);
      });
  };

  useEffect(() => {
    getData().then((data) => {
      setDetails(data);
    });
  }, []);

  console.log(details);
  return (
    <div>
      <p>detail id:{id}</p>
    </div>
  );
};

export default CryptoDetails;
