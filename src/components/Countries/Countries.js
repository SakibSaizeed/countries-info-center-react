import React, { useEffect, useState } from "react";
import OnlyCountry from "../OnlyCountry/OnlyCountry";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);

  return (
    <div>
      <h1>Welcome To Country DATA CENTER </h1>
      <div>
        {countries.map((country) => (
          <OnlyCountry country={country}></OnlyCountry>
        ))}
      </div>
    </div>
  );
};

export default Countries;
