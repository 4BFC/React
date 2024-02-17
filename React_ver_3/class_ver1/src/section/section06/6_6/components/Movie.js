import PropTypes from "prop-types";
import { Link } from "react-router-dom"
export default function Movie({ id, cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={cover_image} />
      <h2>
        {/* link에서 id를 값을 받는다. */}
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  )
}

//PropTypes가 무엇인지 복기 해볼 것
//여기서 components를 나누는 기준은 페이지를 기준으로 나누었다.

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}