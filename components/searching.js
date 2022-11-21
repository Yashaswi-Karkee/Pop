import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"


const searching = () => {
  return (
    <form action = "#">
      <div className="flex justify-center">
        <div className="p-1 w-200">
        <input type = "text" placeholder = "Search" className="h-10 w-1000 rounded-md border-2 border-double"></input>
          <button className="ml-5 w-12 h-10 bg-gray-200 rounded-md"><Link href ="/search"><FontAwesomeIcon icon = { faSearch }/></Link></button>
        </div>
        <div>
            <button className="p-1 w-20 rounded-md bg-black text-white h-10 mt-1 font-semibold"><Link href ="/Login">Log In</Link></button>
        </div>
      </div>
    </form>
  )
  
}

export default searching