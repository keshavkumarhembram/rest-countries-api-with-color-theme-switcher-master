import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from "./FilterForm.module.css";

function FilterForm({onRegionChange, onSearchChange}) {
  const mode = useSelector(state => state.theme.mode);
  return (
    <form className={`${styles.filter} ${mode === 'dark'? styles.dark: ''}`}>
      <div className={`${styles.search} ${mode === 'dark'? styles['search-dark']: ''}`}>
      <FontAwesomeIcon className={styles["search-icon"]} icon={faMagnifyingGlass} />
        <input name='country-search' id='country-search' type="search" placeholder='Search for a country...' onChange={onSearchChange} autoComplete='off'  />
        </div>
        <select name="region" id="region" onChange={onRegionChange} autoComplete='off'>
            <option value="all">Filter by Region</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select>
    </form>
  )
}

FilterForm.propTypes = {
  onRegionChange: PropTypes.func,
  onSearchChange: PropTypes.func
}

export default FilterForm;