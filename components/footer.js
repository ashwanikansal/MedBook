import React from 'react'

export default function Footer() {
  return (
<>
    <div className='max-width h-[25vh] bg-green-light flex justify-between py-10'>
      
       <div className='w-30'>
        <img src='logo.svg' className=''>

        </img>
        <p className='font-bold'>Decentralized electronic health records</p>
       </div>
       <ul>
        <li className='font-bold'>Features</li>
        <li>Secure</li>
        <li>decentralized</li>
        <li></li>
       </ul>
       <ul>
        <li className='font-bold'>FRONTEND</li>
        <li>Tailwind css</li>
        <li>next.js</li>
       </ul>
    </div>
    <div className='bg-green py-3'>
    <p className='flex justify-center text-light'>©MedBook</p>

    </div>
    </>
    
   
  )
}