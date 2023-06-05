import React, { useState, useEffect } from "react";

// function Countries() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => setCountries(data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <Header />
//       <h2>List of Countries</h2>
//       <ul>
//         {countries.map((country) => (
//           <li key={country.cca3}>{country.name.common}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import countries from "./countriesAll.json";
// import countriesAll from "./countriesAll.json";

function CountriesTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(countries);
  }, []);

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
          {data.map((country) => (
            <tr key={country.alpha3Code}>
              <td>{country.name}</td>
              <td>{country.capital}</td>
              <td>{country.population}</td>
              <td>{country.region}</td>
              <td>{country.subregion}</td>
              <td>{country.languages.map((lan) => `${lan.name}, `)}</td>
              <td>
                <timg>{country.flag}</timg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CountriesTable;
