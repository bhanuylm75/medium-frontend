import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export interface Blog {
  "content": string;
  "title": string;
  "id": number
  "author": {
      "name": string
  }
}

const Edit = ({ blog }: {blog: Blog}) => {
  console.log(blog)
  const navigate = useNavigate();
  const [title, setTitle] = useState(blog?.title);
  const [description, setDescription] = useState(blog?.content);
  const save= async()=>{
    console.log(title,description)
    try{
      const res=await axios.put("http://localhost:3009/api/updateblog/",{id:blog?.id,title:title,description:description})
      console.log(res)
      if (res?.status==200){
        console.log("bb")
        navigate("/blogs")
      }

    }
    catch(e){
      console.log(e)

    }

  }
  return (
    <div className="flex justify-center w-full pt-8">
            <div className="max-w-screen-lg w-full">
              <textarea onChange={(e) => {
                    setTitle(e.target.value)
                }}  rows={1}  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {title}

              </textarea>
              <textarea onChange={(e) => {
                    setDescription(e.target.value)
                }}  rows={9}  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                {description}

              </textarea>
            
                <button onClick={save}  type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Save 
                </button>
            </div>
        </div>
  )
}

export default Edit