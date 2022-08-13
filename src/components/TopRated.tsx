import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  top_rated: "/movie/top_rated",
};
export default function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(()=> {
    axios.get(`${URL}${endpoints.top_rated}`,{
      params: {
        api_key: API_KEY,
      },
    })
    .then((res)=> setTopRated(res.data.results));
  }, [])
  return (
    <>
    <Banner movies={topRated[Math.floor(Math.random() * topRated.length)]}/>
    <Movies title="Top Rated" movies={topRated} />
    </>
  )
}
