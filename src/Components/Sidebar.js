import React from 'react'
import logo from '../assets/Zag.png'
import setting from '../assets/Vector.png'
import stock from '../assets/stocks.png'
import grid from '../assets/Grid.png'

export default function Sidebar() {
  return (

    <aside class="sidebar w-64 bg-white p-4 rounded-2xl md:translate-x-0 md:shadow-md flex flex-col align-middle">
      <img src={logo} style={{width:"73px", height:"47px",position:'relative', left:"70px",top:"28px"}}  alt='zag-logo' className='block mb-8' ></img> 
      <div className='text-center font-medium text-sm mt-6 my-2  p-2  flex justify-start font-Inter rounded-lg gap-4 align-middle mx-4 h-11 w-48 hover:bg-blue-100' ><img src={stock} className='inline-block mr-6' alt='setting' style={{width:"25px", height:"15px"}}></img>Reports</div>
      <div className='text-center font-medium text-sm  my-2 p-2 flex justify-start gap-4  rounded-lg align-middle mx-4  h-11 w-48 hover:bg-blue-100 '><img src={grid} className='inline-block mr-2' alt='setting' style={{width:"30px", height:"30px"}}></img> Workspaces</div>
      <div className='text-center font-medium text-sm my-2  p-2  flex justify-start gap-4  rounded-lg align-middle mx-4  h-11 w-48 hover:bg-blue-100'><img src={setting} className='inline-block mr-6' alt='setting' style={{width:"20px", height:"20px"}}></img> settings</div> 
    </aside>
    
 
  )
}
