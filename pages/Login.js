import Meta from "../components/Meta"
import Link from "next/link"

const Login = () => {
  return (
    <div>
      <Meta title={"Log In"}/>
        <div className="flex justify-center shadow-md p-6">
            <form action="#">
                 <label for ="uname">UserName</label><br></br>
                 <input type= "text" id = "uname" placeholder = "Enter username" className="border-2 border-double  rounded-md m-2"></input><br></br>
                 <label for ="pass">Password</label><br></br>
                 <input type= "password" id = "pass" placeholder = "Enter password" className="border-2 border-double  rounded-md m-2"></input><br></br>
                 <button className="bg-black text-white rounded-md h-15.8 w-20 text-sm">Log In</button>
            </form> 
        </div>
        {alert("This webpage is under-construction.")}
        <blockquote>"Patience is the key to success"</blockquote>
        <p>This webpage is under construction. It will be available soon.</p>
        <Link href = "/"><button className="font-lg bg-gray-300 rounded-md p-3 mt-6 font-bold text-blue-900">Home</button></Link>
    </div>
    
  )
}

export default Login
