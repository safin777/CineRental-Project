/* eslint-disable react/prop-types */
import { getImageUrl } from '../utils/cine-utility'
import Rating from '../cine/Rating'
import { useState } from 'react'
import MovieDetailsModal from './MovieDetailsModal'
import { useContext } from 'react'
import { MovieContext } from '../context/index'
import { toast } from 'react-toastify'

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const { state,dispatch  } = useContext(MovieContext)

  const handleModalClose = () => {
    setSelectedMovie(null)
    setShowModal(false)
  }
  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const handleAddToCart = (movie, e) => {
    e.stopPropagation()

    const found = state.cartData.find((item) => item.id === movie.id)

    if (!found) {
      dispatch({ type: 'ADD_TO_CART', payload: {
        ...movie,
      } })
      toast.success('Added to cart',{
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      
      })
    } else {
      toast.error(`This ${movie.title} Already in cart`,{
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      
      
      })
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="object-cover w-full"
            src={getImageUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="mb-1 text-xl">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center mb-5 space-x-1">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(movie, e)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  )
}
