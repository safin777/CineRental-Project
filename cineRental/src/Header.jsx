import Logo from './assets/logo.svg'
import Ring from './assets/ring.svg'
import Moon from './assets/icons/moon.svg'
import Sun from './assets/icons/sun.svg'
import ShoppingCart from './assets/shopping-cart.svg'
import { useState, useContext } from 'react'
import CartDetails from './cine/CartDetails'
import { MovieContext, ThemeContext } from './context/index'

export default function Header() {
  const [showCart, setShowCart] = useState(false)
  const handleCartShow = () => {
    showCart ? setShowCart(false) : setShowCart(true)
  }
  const { cartData } = useContext(MovieContext)
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  return (
    <header>
      {showCart && (
        <CartDetails cartData={cartData} onClose={() => setShowCart(false)} />
      )}
      <nav className="container flex items-center justify-between py-6 space-x-10">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="ring-icon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#" onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode?Sun:Moon} width="24" height="24" alt="moon icon" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={ShoppingCart}
                width="24"
                height="24"
                alt="cart icon"
                onClick={handleCartShow}
              />
              {cartData.length > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-white rounded-full bg-primary -top-2 -right-2">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
