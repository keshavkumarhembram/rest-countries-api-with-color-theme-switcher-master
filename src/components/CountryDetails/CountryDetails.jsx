import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import BorderCountries from "../BorderCountries/BorderCountries";
import styles from "./CountryDetails.module.css";

function CountryDetails() {
  const mode = useSelector(state => state.theme.mode);
  const {name} = useParams();
  const [country, setCountry] = useState(false);

  useEffect(function () {
    async function getCountry() {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha/${name}`
      );
      const data = await res.json();
      setCountry(data[0]);
    }
    getCountry();
  }, [name]);

  return (
    <>
      {country != false && (
        <div className={`${styles["country-details"]} ${mode === 'dark'? styles.dark: ''}`}>
          <img src={country.flags.svg} alt={`Flag of ${country.name}`} />
          <div className={styles.details}>
            <h1>{country.common}</h1>
            <div className={styles["details-container"]}>
              <p>
                Native Name: <span>{Object.values(country.name.nativeName).map(name => name.common).join(", ")}</span>
              </p>
              <p>
                Population: <span>{country.population}</span>
              </p>
              <p>
                Region: <span>{country.region}</span>
              </p>
              <p>
                Sub Region: <span>{country.subregion}</span>
              </p>
              <p>
                Capital: <span>{country.capital}</span>
              </p>
              <p>
                Top Level Domain: <span>{country.tld.join(", ")}</span>
              </p>
              <p>
                Currencies:{" "}
                <span>
                  {Object.values(country.currencies).map(currency => currency.name).join(', ')}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {Object.values(country.languages).join(", ")};
                </span>
              </p>
            </div>
            <BorderCountries borders={country.borders} />
          </div>
        </div>
      )}
    </>
  );
}

export default CountryDetails;
