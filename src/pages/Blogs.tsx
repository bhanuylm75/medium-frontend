import { useEffect, useState } from "react"
import Appbar from "../components/Appbar"
import Blogcard from "../components/Blogcard"
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Blogs = () => {
  const token=localStorage.getItem("token")
  const navigate=useNavigate()
  console.log(token)
  if (!token){
    navigate("/signin")
  }

  const [blogs ,setblogs]=useState([]);
  const allblogs= async ()=>{
    try{
      const response=await axios.get("https://medium-backend-qol0.onrender.com/api/getallblogs")
    console.log(response)
    const data=response?.data?.blogs
    setblogs(data)
    //console.log(blogs)
    }
    catch(e){
      console.log(e)
    }

  }

  useEffect(()=>{
    allblogs()
  },[])
  return (
    <div>
      <Appbar/>
      <div className="flex justify-center flex-col items-center">
      {blogs?.map((blog: { id: number; authorname: string; title: string; content: string 
}) => <Blogcard
                    id={blog.id}
                    authorName={blog?.authorname || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"2nd Feb 2024"}
                />)}
    </div>
      
    </div>
  )
}

export default Blogs