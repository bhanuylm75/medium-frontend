import { ChangeEvent, useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
const Authsign = () => {
  const [postinputs,setpostinputs]=useState({"email": "",
  "password": ""})
  const navigate = useNavigate();
  async function sendRequest() {
    console.log(postinputs)
    try {
        const response = await axios.post("https://medium-backend-qol0.onrender.com/api/signin", postinputs);
        const data = response?.data;
        console.log(response)
        if(response.status===200){
          console.log("bdb")
          localStorage.setItem("token", data?.token);
          localStorage.setItem("userid", data?.userid);
          navigate("/blogs",{replace:true});

        }
    } catch(e) {
        alert("Error while signing up")
        // alert the user here that the request failed
    }
}

  return (
    <div>
      <h1 className="text-3xl flex font-extrabold text-center">Signin into the account</h1>
      <h4 className="mt-2 text-center text-slate-500">Don't have an account <Link className="" to="/signup">Signup?</Link></h4>
      <LabelledInput onChange={(e: { target: { value: string; }; })=>{setpostinputs({...postinputs,email:e.target.value})}}label="Username" placeholder="harkirat@gmail.com"/>
      <LabelledInput onChange={(e: { target: { value: string; }; })=>{setpostinputs({...postinputs,password:e.target.value})}}  label="password" placeholder="passowrd"/>
      <button  onClick={sendRequest}  type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >Login</button>
      
    </div>
  )
}
export default Authsign
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