
import Quote from "../components/Quote"
import Authsign from "../components/Authsignin"

const Signin = () => {
  return (
    <div className=" flex justify-center items-center  md:grid grid-cols-2 h-screen w-full">
      <div className="flex justify-center items-center">
        <Authsign/>
      </div>
     <div className="hidden md:block h-screen">
      <Quote/>
     </div>
      </div>
  )
}

export default Signin