import { useState, useEffect } from 'react';
import axios from 'axios';
import Movies from "./Movies";
import Banner from './Banner';
const URL = "https://api.themoviedb.org/3";
const API_KEY = "321343ac9c276ea1d026ed9f0b1a8d94";
const endpoints = {
  upcoming: "/movie/upcoming",
};

export default function Upcoming() {
    const [upcoming, setUpcoming] = useState([]);
    useEffect(()=> {
        axios.get(`${URL}${endpoints.upcoming}`, {
            params: {
                api_key: API_KEY,
            },
        })
        .then((res)=> setUpcoming(res.data.results))
    }, [])
  return (
    <>
    <Banner movies={upcoming[Math.floor(Math.random() * upcoming.length)]}/>
    <Movies title="Upcoming" movies={upcoming} />
    </>
  )
}
