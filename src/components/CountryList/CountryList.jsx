import axios from "axios";
import PropTypes from 'prop-types';
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";

import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryList.module.css";

function CountryList({region, search}) {
  const mode = useSelector(state => state.theme.mode);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCountryData() {
      if(search !== '') {
        const countryData = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
        setData(countryData.data);
        return;
      }
      if(region === 'all') {
        const countryData = await axios.get("https://restcountries.com/v3.1/all");
        setData(countryData.data);
      } else {
        const countryData = await axios.get(`https://restcountries.com/v3.1/region/${region}`);
        setData(countryData.data);
      }
    }
    getCountryData();
  }, [region, search]);

  return (
    <div className={`${styles["country-list"]} ${mode === 'dark'? styles.dark: ''}`}>
      {data.map((country) => (
        <CountryCard
          key={country.name.common}
          flag={country.flags.svg}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          alphaCode={country.cca2}
        />
      ))}
    </div>
  );
}

CountryList.propTypes = {
  region: PropTypes.string,
  search: PropTypes.string
}

export default CountryList;
