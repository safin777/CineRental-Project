//import css
import './App.css'
import './index.css'

import { MovieContext, ThemeContext } from './context/index'
import { useState } from 'react'
import Page from './Page'
function App() {
  const [cartData, setCartData] = useState([]) //initialize the cartData state with an empty array
  const [darkMode,setDarkMode]=useState(true)
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
