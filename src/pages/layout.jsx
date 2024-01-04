import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
export default function layout() {
  return (
    <>
    <Navbar className='mt-3'>
        <div className='flex gap-6 justify-evenly w-[100%] bg-slate-500 gap-3'>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/Use">Use</Link>
        <Link to="/Color">Color</Link>
        </div>
      </Navbar>
      <Outlet/>
    </>
  )
}
