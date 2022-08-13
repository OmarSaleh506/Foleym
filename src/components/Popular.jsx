import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import Youtube from 'react-youtube';
import Banner from './Banner';

export default function Popular() {
	const MOVIE_API = 'https://api.themoviedb.org/3/';
	const SEARCH_API = MOVIE_API + 'search/movie';
	const DISCOVER_API = MOVIE_API + 'movie/popular';
	const API_KEY = '321343ac9c276ea1d026ed9f0b1a8d94';
	const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

	const [playing, setPlaying] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const [movies, setMovies] = useState([]);
	const [searchKey, setSearchKey] = useState('');
	const [movie, setMovie] = useState({ title: 'Loading Movies' });

	useEffect(() => {
		fetchMovies();
	}, []);

	const fetchMovies = async (event) => {
		if (event) {
			event.preventDefault();
		}

		const { data } = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
			params: {
				api_key: API_KEY,
				query: searchKey,
			},
		});

		console.log(data.results[0]);
		setMovies(data.results);
		setMovie(data.results[0]);

		if (data.results.length) {
			await fetchMovie(data.results[0].id);
		}
	};

	const fetchMovie = async (id) => {
		const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
			params: {
				api_key: API_KEY,
				append_to_response: 'videos',
			},
		});

		if (data.videos && data.videos.results) {
			const trailer = data.videos.results.find((vid) => vid.name === 'Official Trailer');
			setTrailer(trailer ? trailer : data.videos.results[0]);
		}

		setMovie(data);
	};

	const selectMovie = (movie) => {
		fetchMovie(movie.id);
		setPlaying(false);
		setMovie(movie);
		window.scrollTo(0, 0);
	};

	const renderMovies = () => movies.map((movie) => <Movie selectMovie={selectMovie} key={movie.id} movie={movie} />);

	return (
		<>
			<Banner movies={movies[Math.floor(Math.random() * movies.length)]} />
			<div className="App">
				<header className="search-header-in">
					<form className="form" onSubmit={fetchMovies}>
						<input
							className="search"
							type="text"
							id="search"
							onInput={(event) => setSearchKey(event.target.value)}
						/>
						<button className="submit-search" type="submit"></button>
					</form>
				</header>
				{movies.length ? (
					<main>
						{movie ? (
							<div
								className="poster"
								style={{
									backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${BACKDROP_PATH}${movie.backdrop_path})`,
								}}
							>
								{playing ? (
									<>
										<Youtube
											videoId={trailer.key}
											className={'youtube'}
											containerClassName={'youtube-container'}
											opts={{
												width: '562%',
												height: '600px',
												playerVars: {
													autoplay: 1,
													controls: 1,
													cc_load_policy: 1,
													fs: 1,
													iv_load_policy: 0,
													modestbranding: 0,
													rel: 0,
													showinfo: 0,
												},
											}}
										/>
										<button onClick={() => setPlaying(false)} className={'button close-video'}>
											Close
										</button>
									</>
								) : (
									<div className="center-max-size">
										<div className="poster-content">
											{trailer ? (
												<button
													className={'button play-video'}
													onClick={() => setPlaying(true)}
													type="button"
												>
													Play
												</button>
											) : (
												'Sorry, no trailer available'
											)}
										</div>
									</div>
								)}
							</div>
						) : null}
						<h1 className="Originals-title">Popular</h1>
						<div className={'center-max-size container'}>{renderMovies()}</div>
					</main>
				) : (
					'Sorry, no movies found'
				)}
			</div>
		</>
	);
}
