import { Key } from "react";

  export interface Props{
    title : any;
    movies: any;
    
}
const Img_url = "https://image.tmdb.org/t/p/w300";
function Movies({ title, movies }: Props) {
  console.log(movies)
    return (
    <div className="movies-container">
        <div className="movies-row">{title}</div>
        <div className="movies-poster">
          <div className="movies-poster-row">
          {movies.map((movies: { id: Key | null | undefined; poster_path: string; name: string | undefined; }) => (
                <>
                <img className="movies-img"
                  key={movies.id}
                  src={Img_url+ movies.poster_path}
                  alt={movies.name}
                />
                </>
              ))} 
          </div>
        </div>
    </div>
    );
  }
  
  export default Movies;

  