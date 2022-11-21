import axios from "axios"
import MovieContainer from "../components/MovieContainer"

export default function Home({ details }) {
  return (
    <div>
      <MovieContainer movies = {details.results}/>
    </div>

  )
}

export async function getStaticProps(){
  const result = axios(`https://api.themoviedb.org/3/movie/popular?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1`) 
  const details = (await result).data

  return{
    props: {details}
  }
}
