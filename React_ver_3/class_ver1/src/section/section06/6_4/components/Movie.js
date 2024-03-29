import PropTypes from "prop-types";
export default function Movie({ cover_image, title, summary, genres }) {
  return (
    <div>
      <img src={cover_image} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
    </div>
  )
}

//PropTypes가 무엇인지 복기 해볼 것
//여기서 components를 나누는 기준은 페이지를 기준으로 나누었다.

Movie.protoType = {
  cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}