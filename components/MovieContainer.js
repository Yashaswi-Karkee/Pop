import Placecards from "../components/placecards"

const MovieContainer = ({movies}) => {
    return (
        <div className="flex flex-col cursor-pointer">
            <div className="text-2xl font-bold m-10 flex justify-center">
                Popular Movies
            </div>
            <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-col-5">
                {movies.map(movie => <Placecards movie = { movie } key = {movie.id}/>)}
            </div>
        </div>
    )
  }
  export default MovieContainer
  