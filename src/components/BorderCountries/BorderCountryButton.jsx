import PropTypes from 'prop-types';
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function BorderCountryButton({border}) {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    useEffect(function () {
        async function getCountry() {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
          );
          const data = await res.json();
          setName(data[0].name.common);
        }
        getCountry();
      }, [border]);
  return (
    <button onClick={() => navigate(`/${border}`)}>{name}</button>
  )
}

BorderCountryButton.propTypes = {
    border: PropTypes.string
}

export default BorderCountryButton