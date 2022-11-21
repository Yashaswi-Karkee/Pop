import Image from "next/image"
import Link from "next/link"

const placecards =({ movie }) => {
  return (

    <Link href = {`/details/${movie.id}`}><div className="p-6 rounded-sm border-gray-500 cursor-pointer flex flex-col shadow-2xl hover:bg-blend-darken hover:scale-105">
        <div className="flex justify-center p-0">
            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} width = {250} height = {300} alt = {"Image of Movie"}/>
        </div>
        <div className="ml-10">
            <div className="text-xl font-bold flex justify-center">
                {movie.title}
            </div>
            <div className="text-gray-700 text-sm flex justify-center">{movie.release_date}</div>
        </div>
    </div></Link>
  )
}


export default placecards