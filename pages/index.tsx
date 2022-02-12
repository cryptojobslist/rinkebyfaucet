import { useEffect } from 'react'
import { fetch } from 'lib/fetch'
import Link from 'next/link'
import RequestForm from 'components/requestForm'
import { FaGithub } from 'react-icons/fa'

export default function IndexPage({ error, ...props }) {
  return (
    <div className='min-h-screen'>
      <nav className='flex items-center justify-between p-8'>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            {process.env.appName}
            {/* <img
              src='./logo.svg'
              alt={process.env.appName + ' logo'}
              className='relative inline-block h-4 pt-1 mr-2 align-baseline'
            /> */}
          </li>
        </ul>
        <ul className='flex items-center justify-between space-x-4'>
          <li>
            <a href='https://github.com/cryptojobslist/rinkebyfaucet' target='_blank'>
              <FaGithub className='inline' /> GitHub
            </a>
          </li>
        </ul>
      </nav>
      <div className='m-8'>
        <h1 className='text-left title'>{process.env.appName}</h1>
        <p>Get your Rinkeby ETH for development and testing here.</p>
        <RequestForm />
      </div>
    </div>
  )
}
