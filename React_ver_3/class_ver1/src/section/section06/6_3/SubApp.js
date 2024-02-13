import { useEffect, useState } from "react";
export default function SubApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // 기존 fetch대신 async를 사용하기
  const getMovies = async () => {
    // const res = await fetch(
    //   `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    // );

    //또 다른 방법
    const json = await (await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )).json();

    // const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });

  }, []);
  console.log(movies);
  return (
    <div>{loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image} />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map(g => <li key={g}>{g}</li>)}
            </ul>
          </div>
        ))}
      </div>
    )}
    </div>
  )
}