import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './BorderCountries.module.css';
import BorderCountryButton from './BorderCountryButton';

function BorderCountries({ borders }) {
    const mode = useSelector(state => state.theme.mode);
  return (
    <div><div className={`${styles["border-countries"]} ${mode === 'dark'? styles['border-countries-dark']:''}`}>
    <div>Border Countries:</div>
    {borders && <div>
      {borders.map((border) => (
        <BorderCountryButton key={border} border={border} />
      ))}
    </div>}
  </div></div>
  )
}

BorderCountries.propTypes = {
    borders: PropTypes.array,
}

export default BorderCountries