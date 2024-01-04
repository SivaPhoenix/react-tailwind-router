import React from 'react'
import { ReactDOM } from 'react'
import './App.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import Layout from './pages/layout'
import Blogs from './pages/blogs';
import Use from './pages/Use'
import Color from './pages/Color'
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/Use' element={<Use/>}/>
      <Route path='/Color' element={<Color/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
