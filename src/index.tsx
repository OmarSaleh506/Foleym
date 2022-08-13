import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MoviesPage from './pages/movies';
import TrendingPage from './pages/trending';
import NowPlayingPage from './pages/nowplaying';
import PopularPage from './pages/popular';
import TopRatedPage from './pages/toprated';
import UpcomingPage from './pages/upcoming';
import ProfilePage from './pages/profile';
import { initializeApp } from 'firebase/app';
import { config } from './firebase/firebase-config';
import LoginPage from './pages/login';

initializeApp(config.firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="movies" element={<MoviesPage />} />
			<Route path="trending" element={<TrendingPage />} />
			<Route path="nowplaying" element={<NowPlayingPage />} />
			<Route path="popular" element={<PopularPage />} />
			<Route path="toprated" element={<TopRatedPage />} />
			<Route path="upcoming" element={<UpcomingPage />} />
			<Route path="profile" element={<ProfilePage />} />
		</Routes>
	</BrowserRouter>
);
