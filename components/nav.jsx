
import React from 'react'
import '@/styles/globals.css'
import Image from 'next/image'

const Nav = () => {
  return (
        <div className='Navbar row ' dir='rtl'>
              <div className='col-md-6 d-flex justify-content-between my-2'>
                  <div className='d-flex align-items-center me-4'>
                      <div className='daire1'></div>
                      <span className='ml-2 me-2 text-white'> اهلا وسهلا بك محمد محمد</span>
                  </div>
                  <div className=' my-2 px-2'>
                      <Image className='' src="/logo-rem.png" alt="logo" width={65} height={50} />
                  </div>
              </div>
                  
        </div>
  )
}

export default Nav

