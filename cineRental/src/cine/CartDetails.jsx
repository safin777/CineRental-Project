import { getImageUrl } from '../utils/cine-utility'
import checkoutSvg from '../assets/icons/checkout.svg'
import deleteSvg from '../assets/delete.svg'
import { useContext } from 'react'
import { MovieContext } from '../context/index'
import { toast } from 'react-toastify'
// eslint-disable-next-line react/prop-types
export default function CartDetails({ onClose }) {
  const { state, dispatch } = useContext(MovieContext)

  function handleRemoveCartItem(e, item) {
    e.preventDefault()
    dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    toast.success(`Removed ${item.title} from cart`, {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            { state.cartData.length === 0 ? ( <p className="text-2xl font-bold text-center">No items in the cart</p> ) :
              state.cartData.map((movie) => (
              <div
                className="grid grid-cols-[1fr_auto] gap-4"
                key={movie.id}
                id={movie.id}
              >
                <div className="flex items-center gap-4">
                  <img
                    className="overflow-hidden rounded"
                    src={getImageUrl(movie.cover)}
                    alt=""
                    width="80"
                    height="40"
                  />
                  <div>
                    <h3 className="text-base font-bold md:text-xl">
                      {movie.title}
                    </h3>
                    <p className="max-md:text-xs text-[#575A6E]">
                      {movie.genre}
                    </p>
                    <span className="max-md:text-xs">${movie.price}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <button
                    className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    onClick={(e) => handleRemoveCartItem(e, movie)}
                  >
                    <img className="w-5 h-5" src={deleteSvg} alt="" />
                    <span className="max-md:hidden">Remove</span>
                  </button>
                </div>
              </div>
              ))
            }
            
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkoutSvg} width="24" height="24" alt="checkout" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
