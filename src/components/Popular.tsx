import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  popular: "/movie/popular",
};

export default function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(()=> {
    axios.get(`${URL}${endpoints.popular}`,{
      params: {
        api_key: API_KEY,
      },
    })
    .then((res)=> setPopular(res.data.results))

  },[])
  return (
    <>
    <Banner movies={popular[Math.floor(Math.random() * popular.length)]}/>
    <Movies title="Popular" movies={popular} />
    </>
  )
}
