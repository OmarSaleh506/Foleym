import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  trending: "/trending/all/week",
};
export default function Trending() {
  const [trending, setTrending] = useState([]);
  useEffect(()=> {
    axios.get(`${URL}${endpoints.trending}`,{
      params: {
        api_key: API_KEY,
      },
    })
    .then((res)=> setTrending(res.data.results));
  },[])
  return (
    <>
    <Banner movies={trending[Math.floor(Math.random() * trending.length)]}/>
    <Movies title="Trending" movies={trending} />
    </>
  )
}
