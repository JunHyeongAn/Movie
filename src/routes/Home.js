import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=year&minimum_rating=8.0")
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    }
  
    useEffect(() => {
         getMovies();
    }, []);
    return (
      <div>
      {loading ? <h1>Loading...</h1> : 
        <div>{movies.map((movie) => 
        <Movie
        key={movie.id} 
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        title_long={movie.title_long}
        summary={movie.summary}
        genres={movie.genres}
        />)}</div>}
      </div>
    );
}

export default Home;