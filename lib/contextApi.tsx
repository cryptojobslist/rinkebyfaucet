import { FaGithub, FaRegMoon } from 'react-icons/fa'
import { CgSun } from 'react-icons/cg'
import { useTheme } from 'next-themes'

import { createContext, useEffect, useContext } from 'react'

export const Context = createContext()

export const myProvider = () => useContext(Context)

export const NextContextProvider = ({ children }) => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const value = {
    theme: theme,
    changeTheme: changeTheme,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
