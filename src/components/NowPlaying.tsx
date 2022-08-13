import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  now_playing: "/movie/now_playing",
};
export default function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(()=> {
    axios.get(`${URL}${endpoints.now_playing}`,{
      params: {
        api_key: API_KEY,
      },
    })
    .then((res) => setNowPlaying(res.data.results));
  },[])
  return (
    <>
    <Banner movies={nowPlaying[Math.floor(Math.random() * nowPlaying.length)]}/>
    <Movies title="Now Playing" movies={nowPlaying} />
    </>
  )
}
