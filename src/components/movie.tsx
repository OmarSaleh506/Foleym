import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  originals: "/discover/tv",
};

export default function Movie() {
const [originals, setOriginals] = useState([]);

useEffect(() => {

   axios.get(`${URL}${endpoints.originals}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setOriginals(res.data.results));

}, []);

  return (
    <>
    <Banner movies={originals[Math.floor(Math.random() * originals.length)]}/>
      <Movies title='Movies' movies={originals} />
    </>
  )
}
 