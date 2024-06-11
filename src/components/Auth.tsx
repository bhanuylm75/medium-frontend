import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
const Auth = () => {
  const [postinputs,setpostinputs]=useState({"name":"","email": "",
  "password": ""})
  const navigate = useNavigate();


  async function sendRequest() {
    console.log(postinputs)
    try {
        const response = await axios.post("https://medium-backend-qol0.onrender.com/api/signup", postinputs);
        console.log(response)
        const data = response?.data;
        console.log(data)
        if(response.status===200){
          console.log("bdb")
          localStorage.setItem("token", data?.token);
          localStorage.setItem("userid", data?.userid);
          navigate("/blogs",{replace:true});
  
        }
    } catch(e) {
        alert("Error while signing up")
    }
}

  return (
    <div>
      <h1 className="text-3xl flex font-extrabold text-center">Create an account</h1>
      <h4 className="mt-2 text-center text-slate-500">Already have an account <Link className="" to="/signin">Login?</Link></h4>
      <LabelledInput onChange={(e: { target: { value: string; }; })=>{setpostinputs({...postinputs,name:e.target.value})}}  label="Username" placeholder="name"/>
      <LabelledInput onChange={(e: { target: { value: string; }; })=>{setpostinputs({...postinputs,email:e.target.value})}}  label="email" placeholder="bhanu@gmail.com"/>
      <LabelledInput onChange={(e: { target: { value: string; }; })=>{setpostinputs({...postinputs,password:e.target.value})}}  label="passowrd" placeholder="password"/>
      <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Signup</button>
      
    </div>
  )
}
export default Auth

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
  return <div>
      <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
      <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
  </div>
}