import { useState } from 'react';
import './Country.css'
import CountryData from '../CountryData/CountryData';
import CountryDetail from '../CountryDetail/CountryDetail';

// flag-04
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {
   const {name, flags, population, area, cca3} = country;

   const [Visited, setVisited] = useState(false)
    
   const handleVisited = () => {
        setVisited(!Visited)
   }

    // console.log(handleVisitedCountry);

    // const passWithParams = () => {
    //     handleVisitedCountry(country);
    // }
    const passWithParams = () => handleVisitedCountry(country);
    

    return (
        <div className='country'>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>

            {/* flag-05 */}
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Flags</button>

            <br />

            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            {/* <button onClick={passWithParams}>Mark Visited</button> */}

            <br />

            <button onClick={handleVisited}>{Visited ? 'Visited': 'Going'}</button>
            {Visited ? 'I have visited this countries' : 'I want to visite'}

            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            ></CountryDetail>
        </div>
    );
};

export default Country;