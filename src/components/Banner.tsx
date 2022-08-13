export interface Props {
	movies: any;
}
export default function Banner({ movies }: Props) {
	return (
		<div className="hero-img-container">
			<img
				className="hero-img"
				key={movies?.id}
				src={'https://image.tmdb.org/t/p/original' + movies?.backdrop_path}
				alt={movies?.name}
			/>
			<h1 className="hero-text">{movies?.title}</h1>
			<p className="hero-description">{movies?.overview}</p>
		</div>
	);
}
