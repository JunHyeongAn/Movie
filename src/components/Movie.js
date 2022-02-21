import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({
    medium_cover_image, title_long, summary, genres, id}) {
    return <div>
      <img src={medium_cover_image} alt={title_long}/>
      <h2><Link to={`/movie/${id}`}>{title_long}</Link></h2>
      <p>{summary}</p>
      <h4>genre</h4>
      <ul>
        {genres.map(genre => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <hr/>
    </div>;
}

Movie.propTypes = {
    id :Proptypes.number.isRequired,
    medium_cover_image : Proptypes.string.isRequired,
    title_long : Proptypes.string.isRequired,
    summary : Proptypes.string.isRequired,
    genres : Proptypes.arrayOf(Proptypes.string).isRequired
};

export default Movie;