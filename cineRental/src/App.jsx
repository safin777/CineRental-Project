//import css
import './App.css'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MovieContext, ThemeContext } from './context/index'
import { useState,useReducer } from 'react'
import Page from './Page'
import { CartReducer,initialState } from './reducer/CartReducer'
function App() {
  //const [cartData, setCartData] = useState([]) //initialize the cartData state with an empty array
  const [darkMode,setDarkMode]=useState(true)
  const [state, dispatch] = useReducer(CartReducer, initialState)
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
