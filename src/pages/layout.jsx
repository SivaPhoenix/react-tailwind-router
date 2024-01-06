import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import  Navbar  from 'react-bootstrap/Navbar';
export default function layout() {
  return (
    <>
    <nav class="bg-gray-50 dark:bg-gray-700">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>
                </li>
                <li>
                    <Link to="/contact" class="text-gray-900 dark:text-white hover:underline">Contact</Link>
                </li>
                <li>
                    <Link to="/Use" class="text-gray-900 dark:text-white hover:underline">UseState</Link>
                </li>
                <li>
                    <Link to="/Color" class="text-gray-900 dark:text-white hover:underline">Color</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
<Outlet/>
    </>
  )
}
