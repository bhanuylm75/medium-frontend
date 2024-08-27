import Fullblog from "../components/Fullblog"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useParams} from "react-router-dom";

export interface Blog {
  "content": string;
  "title": string;
  "id": number
  "author": {
      "name": string
  }
}
const Blog = () => {
  const token=localStorage.getItem("token")
  const navigate=useNavigate()
  console.log(token)
  if (!token){
    navigate("/signin")
  }

  const { id } = useParams();
  console.log(id)
  const [blog,setblog]=useState<Blog | undefined>(undefined);
  const getblog= async()=>{
   try{
    const response=await axios.get(`https://broklyn.onrender.com/api/singleblog/${id}`)
    console.log(response?.data)
    setblog(response?.data)
   }
   catch(e){
    console.log(e)
   }
    

  }
  useEffect(()=>{
    getblog()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])


  return (
    <div><Fullblog blog={blog}/></div>
  )
}

export default Blog