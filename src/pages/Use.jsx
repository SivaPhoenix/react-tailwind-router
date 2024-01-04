import React from 'react'
import { useState } from 'react'
export default function Use() {
    const [count,setCount]=useState(0);
    const [color,setColor]=useState('red');
  return (
    <>
    <p className='text-xl m-3'>Total click count : {count} times</p>
    <button className='bg-blue-500 p-4 rounded m-3 h-[3rem] w-[7rem] text-center justify-evenly' onClick={
        ()=>setCount(count+1)
    }>Click Me</button>

    <p className={`text-xl m-3 bg-${color}-500 h-10 rounded-sm pl-5 pt-1`}>Background color</p>
    <button className='bg-red-500 p-4 rounded m-3 h-[3rem] w-[7rem] text-center justify-evenly' onClick={
        ()=>setColor('slate')
    }>Click me!!</button>
    </>
  )
}
