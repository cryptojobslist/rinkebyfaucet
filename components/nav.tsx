import Link from 'next/link'
import { FaGithub, FaRegMoon } from 'react-icons/fa'
import { CgSun } from 'react-icons/cg'
import { useTheme } from 'next-themes'
import { myProvider } from 'lib/contextApi'

export const ThemeSwitcher = () => {
  const { changeTheme }: any = myProvider()
  return (
    <button onClick={changeTheme} title='Change Theme Color'>
      <FaRegMoon className='dark:hidden' />
      <CgSun className='hidden dark:show' />
    </button>
  )
}

export default function Nav() {
  return (
    <nav className='flex items-center justify-between m-4 md:m-8'>
      <ul className='flex items-center justify-between space-x-8 dark:text-white'>
        <li>
          <a href='https://github.com/cryptojobslist/rinkebyfaucet' target='_blank' rel='noreferrer noopener'>
            <FaGithub className='inline mb-1 mr-1' />
            Github
          </a>
        </li>
        <li>
          <a href={`https://rinkeby.etherscan.io/address/${process.env.NEXT_PUBLIC_ADDRESS}`} target='_blank'>
            Donate Rinkeby ETH
          </a>
        </li>
      </ul>
      <ul className='flex items-center justify-between space-x-8'>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  )
}
