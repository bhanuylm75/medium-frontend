import Quote from "../components/Quote"
import Auth from "../components/Auth"

const Signup = () => {
  return (
    <div className="flex justify-center items-center md:grid grid-cols-2 h-screen w-full">
      <div className="flex justify-center items-center">
        <Auth/>
      </div>
     <div className="hidden md:block h-screen">
      <Quote/>
     </div>
      </div>
  )
}

export default Signup