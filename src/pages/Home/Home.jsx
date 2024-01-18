import FilterForm from "./../../components/Form/FilterForm";
import CountryList from "../../components/CountryList/CountryList";
import React, {useState} from 'react'

function Home() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('all');

  const regionChangeHandler = (e) => {
    setRegion(e.target.value)
  }

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  }

  return (
    <>
        <FilterForm onSearchChange={searchChangeHandler} onRegionChange = {regionChangeHandler}/>
        <CountryList search={search} region={region}/>
    </>
  )
}

export default Home