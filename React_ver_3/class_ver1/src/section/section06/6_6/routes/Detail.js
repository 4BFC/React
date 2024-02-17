import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  // 이 방법 말고 다른 방법도 해볼 것
  // 내 방법대로 Detail 페이지를 구체화 해볼 것.
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
  };
  useEffect(() => {
    getMovie();
  }, [])
  return <h1>Detail</h1>;
}