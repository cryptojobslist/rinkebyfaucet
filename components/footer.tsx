import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='md:w-4/5 mx-auto w-full'>
        <hr />
        <div className='text-center m-4 md:m-8'>
          <p>{new Date().getFullYear()}&copy; All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
