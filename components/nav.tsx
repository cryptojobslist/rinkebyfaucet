import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between p-8'>
      <ul className='flex items-center justify-between space-x-8'>
        <li>
          <a href='https://github.com/cryptojobslist/rinkebyfaucet' target='_blank'>
            <FaGithub className='inline mb-1 mr-1' />
            Github
          </a>
        </li>
      </ul>
      <ul className='flex items-center justify-between space-x-8'>
        <li></li>
      </ul>
    </nav>
  )
}
