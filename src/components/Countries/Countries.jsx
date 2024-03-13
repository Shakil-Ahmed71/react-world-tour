import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([])
  // flag-01
  const [visitedFlags, setVisitedFlags] = useState([]);


  useEffect(() => {

    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = country =>{
    console.log("add this to your visited country")
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  // flag-02
  // flag-06
  const handleVisitedFlag = flag => {
    // console.log('flag adding')
    // 06
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlags(newVisitedFlags);
  }


  return (
    <div>
      <h3>Countries: {countries.length}</h3>

        {/* visited countries */}
      <div>
        <h5>Visited Countries : {visitedCountries.length}</h5>

        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>

          {/* flag-07 */}
      <div className="flag-container">
          {
            visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
          }
      </div>

          {/* display countries */}
      <div className="countries-container">
        {countries.map((country) => (<Country  
        key={country.cca3} 

        handleVisitedCountry={handleVisitedCountry}

          // flag-03
        handleVisitedFlag = {handleVisitedFlag}

        country={country}></Country>
        ))}

      </div>
    </div>
  );
};

export default Countries;
