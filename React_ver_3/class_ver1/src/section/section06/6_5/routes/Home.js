import { useEffect, useState } from "react";
import Movie from "../../6_5/components/Movie";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);//copy
  // 기존 fetch대신 async를 사용하기
  const getMovies = async () => {//API
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );

    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>{loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        {movies.map((movie) => <Movie
          key={movie.id}
          cover_image={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        //click_edit ={}
        ></Movie>)}
      </div>//CRUD
    )}
    </div>
  )
}