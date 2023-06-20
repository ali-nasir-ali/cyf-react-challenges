import React, { useState, useEffect } from "react";
import countries from "../Data/countriesAll.json";

function CountriesTable({ searchVal }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(countries);
  }, []);

  const filteredCountries = data.filter((country) => country.name.toLowerCase().includes(searchVal.toLowerCase()));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Region</th>
            <th>Subregion</th>
            <th>Languages</th>
          </tr>
        </thead>
        <tbody>
          {filteredCountries.map((country) => (
            <tr key={country.alpha3Code}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
              <td>{country.subregion}</td>
              <td>{country.languages.map((lan) => `${lan.name}, `)}</td>
              <td>{/* <img src={country.flag} alt="flag"></img> */}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CountriesTable;
