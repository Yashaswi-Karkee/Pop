import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import Meta from "../../../components/Meta"


export default function Details({detail}){
  console.log(detail)
    return (
      <>
      <div className="flex justify-center border-double">
        <Meta title={`${detail.title} | Overview`}/>
        <div className="flex flex-col items-center">
          <Image src= {`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} alt = {`${detail.title} image`} width = {400} height = {500}/>
          <h2 className="text-xl font-bold">
            {detail.title}
          </h2>
          <p className="w-3/12">{detail.overview}</p>
          <p><span className="font-bold">Genres: </span><span>{detail.genres.map(genre => genre.name).join(", ")}</span></p>
        </div>
      </div>
      <Link href = "/" className="flex justify-center"><button className="font-lg bg-gray-300 rounded-md p-3 mt-6 font-bold text-blue-900">Home</button></Link>
      </>
      
    )
  }

  export async function getStaticProps(context){
    const {id} = context.params 
    const result = axios(`https://api.themoviedb.org/3/movie/${id}?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1`) 
    const detail = (await result).data
  
    return{
      props: {detail}
    }
  }

  export async function getStaticPaths(){
    const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=7f4278b49b0dad56afbecf67d0b4a002&language=en-US&page=1`) 
    const details = res.data.results

    const ids = details.map(detail => detail.id)
    const paths = ids.map(id =>({params:{id:id.toString()}}))
  
    return{
      paths, fallback: false
    }
  }

  