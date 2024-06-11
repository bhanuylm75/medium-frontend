/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import axios from "axios";
import Appbar from "./Appbar"
//import { Link} from "react-router-dom";
import Edit from "./Edit";
//import Blogdetails from "./Blogdetails";
import { Avatar } from "./Blogcard"
//import { PencilIcon, TrashIcon } from '@heroicons/react/solid';
import { useNavigate } from "react-router-dom";



const Fullblog = ({ blog }: {blog: any}) => {
    //console.log(blog)
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
      const handledelete = async () => {
        const res=await axios.delete(`https://medium-backend-qol0.onrender.com/api/delete/${blog?.id}`)
        console.log(res)
        if(res.status===200){
          navigate("/blogs")
        }
        
      
      };
    
      
  return (
    <div className="h-screen">
        <Appbar />
        {isEditing? <Edit blog={blog}/>: <div className=" md:flex justify-center">
            <div className="md:grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="  md:col-span-8">
                    <div className=" text-lg md:text-5xl font-extrabold">
                        {blog?.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Post on 2nd December 2023
                    </div>
                    <div className="md:pt-4">
                        {blog?.content}
                    </div>
                </div>
                <div className=" mt-5 md:col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="md:flex w-full">
                        <div className="md:pr-4 flex flex-col justify-center">
                            <Avatar size="big" name={blog?.author?.name || "Anonymous"} />
                        </div>
                        <div>
                            <div className="md:text-xl font-bold mt-1">
                                {blog?.author?.name || "Anonymous"}
                            </div>
                            <div className="md:pt-2 text-slate-500">
                                Random catch phrase about the author's ability to grab the user's attention
                            </div>
                            <div className="flex mt-4 justify-between">
        <button onClick={()=>setIsEditing(!isEditing)} className="flex items-center bg-white-500  text-black  rounded-full border-2 border-black-500 py-1 px-6">
          Edit
        </button>
        <button onClick={handledelete} className="flex items-center border-2 border-black-500 py-1 px-6  text-black    rounded-full">
          delete
        </button>
        </div>
                        </div>
                        
                    </div>  
                </div>
                
                
            </div>
            
        </div>}
        
    </div>
  )
}

export default Fullblog