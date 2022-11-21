import Link from "next/link"

const Search = () => {
    return (
      <div className="flex justify-center align-baseline">
          {alert("This webpage is under-construction.")}
          <blockquote>"Patience is the key to success"</blockquote>
          <p>This webpage is under construction. It will be available soon.</p>
          <Link href = "/"><button className="font-lg bg-gray-300 rounded-md p-3 mt-6 font-bold text-blue-900">Home</button></Link>
      </div>
      
    )
  }
  
  export default Search
  