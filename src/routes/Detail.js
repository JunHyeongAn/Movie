import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, [])
    return (
        <div>
            <h1>Detail</h1>
            {loading ? <h3>Loading...</h3> : 
                <div>
                    <img src={movie.medium_cover_image} alt={movie.title_long}/>
                    <h2>{movie.title_long}</h2>
                    <p>summary</p>
                    <p>{movie.description_full}</p>
                    <h3>genre</h3>
                    <ul>
                        {movie.genres.map(genre => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>
            }
        </div>
        
    );
}

export default Detail;