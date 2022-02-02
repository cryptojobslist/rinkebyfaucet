import Link from 'next/link'

export default function Nav() {
  return (
    <nav className='flex items-center justify-between p-8'>
      <ul className='flex items-center justify-between space-x-8'>
        <li>
          {/* <img
            src='./logo.svg'
            alt={process.env.appName + ' logo'}
            className='relative inline-block h-4 pt-1 mr-2 align-baseline'
          /> */}
        </li>
        <li>
          <Link href='https://github.com/cryptojobslist'>
            <a>Github</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
