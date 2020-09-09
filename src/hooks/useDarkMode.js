import useLocalStorage from "./useLocalStorage";
import { useState } from 'react';


const useDarkMode = () => {

  const [value, setValue] = useLocalStorage('dark', false)

  const [darkMode, setDarkMode] = useState(false);

  

  const toggleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  

  return [value, setValue, darkMode, toggleDarkMode]

}

export default useDarkMode;