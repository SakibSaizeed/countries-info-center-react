import React from "react";
import "./OnlyCountry.css";
const OnlyCountry = (props) => {
  //console.log(props.country);
  //const { name } = props;
  return (
    <div className="country-container">
      <h2>Name: {props?.country?.name?.common}</h2>
      <h4>Capital: {props?.country?.capital}</h4>
      <h5>Region: {props?.country?.region}</h5>
      <img src={props?.country?.flags?.png} alt="" srcset="" />
    </div>
  );
};

export default OnlyCountry;
