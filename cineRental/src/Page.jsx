import Header from './Header'
import Sidebar from './Sidebar'
import MovieList from '../src/cine/MovieList'
import Footer from './Footer'
import { useContext } from 'react'
import { ThemeContext } from './context/index'

export default function Page() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
