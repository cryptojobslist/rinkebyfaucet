import { useEffect } from 'react'
import { fetch } from 'lib/fetch'
import Link from 'next/link'
import Router from 'next/router'

export default function IndexPage({ error, ...props }) {
  return (
    <>
      <nav className='flex items-center justify-between p-8'>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            {/* <img
              src='./logo.svg'
              alt={process.env.appName + ' logo'}
              className='relative inline-block h-4 pt-1 mr-2 align-baseline'
            /> */}
          </li>
        </ul>
      </nav>
      <div className='m-8'>
        <h1 className='text-left title'>Welcome to {process.env.appName}</h1>
        <input type='text' placeholder='0x123…' />
      </div>
    </>
  )
}
