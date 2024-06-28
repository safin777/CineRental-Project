import Movie1 from '../assets/movie-covers/avatar.png'
import Star from '../assets/star.svg'
export default function MovieList() {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        
        <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
          <img className="object-cover w-full" src={Movie1} alt="" />
          <figcaption className="pt-4">
            <h3 className="mb-1 text-xl">Iron Man</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center mb-5 space-x-1">
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </a>
          </figcaption>
        </figure>

        <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
          <img className="object-cover w-full" src={Movie1} alt="" />
          <figcaption className="pt-4">
            <h3 className="mb-1 text-xl">Iron Man</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center mb-5 space-x-1">
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </a>
          </figcaption>
        </figure>

        <figure className="p-4 border shadow-sm border-black/10 dark:border-white/10 rounded-xl">
          <img className="object-cover w-full" src={Movie1} alt="" />
          <figcaption className="pt-4">
            <h3 className="mb-1 text-xl">Iron Man</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              Action/Adventure/Sci-fi
            </p>
            <div className="flex items-center mb-5 space-x-1">
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
              <img src={Star} width="14" height="14" alt="" />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$100 | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
        
      </div>
    </div>
  )
}
