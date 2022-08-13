import { useEffect, useState } from "react";
import {BiSearch} from "react-icons/bi"
import { IoNotificationsSharp} from "react-icons/io5"
import { Link } from "react-router-dom";
export default function Header() {
  const [Scrolled, setScrolled] = useState(false);
  useEffect(() => {
      const handelScrolled = () =>{
        if (window.scrollY >0) {
          setScrolled(true)
        }else {
          setScrolled(false)
        }
      }
      window.addEventListener("scroll",handelScrolled);
      return () => {
        window.removeEventListener('scroll',handelScrolled)
      }
  },[])
  return (
    <header className={`${Scrolled && "bg"}`}>
        <div className="container-header space space2">
          <p className="name-fo">Foleym</p>
          <ul className="container-pages">
            <Link to="/movies" className="header-link">
            <li className="headerLink home">Movies</li>
            </Link>
            <Link to="/trending" className="header-link">
            <li className="headerLink">Trending</li>
            </Link>
            <Link to="/nowplaying" className="header-link">
            <li className="headerLink">Now Playing</li>
            </Link>
            <Link to="/popular" className="header-link">
            <li className="headerLink">Popular</li>
            </Link>
            <Link to="/toprated" className="header-link">
            <li className="headerLink">Top Rated</li>
            </Link>
            <Link to="/upcoming" className="header-link">
            <li className="headerLink">Upcoming</li>
            </Link>
            <Link to="/mylist" className="header-link">
            <li className="headerLink">My List</li>
            </Link>
          </ul>
        </div>
        <div className="container-item">
          <BiSearch size={30} className="BiSearch"/>
          <IoNotificationsSharp size={30} className="notification"/>
          <Link to="/profile">
             <img
               src="https://rb.gy/g1pwyx"
               alt=""
               className="img-account"
             />
          </Link>
        </div>
    </header>
  )
}
