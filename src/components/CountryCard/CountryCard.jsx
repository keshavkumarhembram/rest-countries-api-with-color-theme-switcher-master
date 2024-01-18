import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './CountryCard.module.css';

function CountryCard({flag, name, population, region, capital, alphaCode}) {
    const mode = useSelector(state => state.theme.mode);

  return (
      <Link className={`${styles['country-card--link']} ${mode === 'dark'? styles.dark: ''}`} to={alphaCode} >
    <div className={styles["country-card"] }>
        <img src={flag} />
        <div className={styles["country-details"]}>
            <h2>
                {name}
            </h2>
            <div>
                <p>Population: <span>{population}</span></p>
                <p>Region: <span>{region}</span></p>
                <p>Capital: <span>{capital}</span></p>
            </div>
        </div>
    </div>
        </Link>
    
  )
}

CountryCard.propTypes = {
    flag: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.array,
    alphaCode: PropTypes.string
}

export default CountryCard