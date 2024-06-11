import {  Route, Routes} from 'react-router-dom'
import  Signup  from './pages/Signup'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Signin from './pages/Signin'
import { Publish } from './pages/Publish'
import Pagenotfound from './components/Pagenotfound'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faEdit, faTrash);
//import { useState } from 'react'
function App() {
  
  return (
    <>
        <Routes>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />}/>
          <Route element={<Pagenotfound/>} />
        </Routes>
    </>
  )
}

export default App