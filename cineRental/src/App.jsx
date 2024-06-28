//import css
import './App.css'
import './index.css'
import Header from './Header'
import Sidebar from './Sidebar'
import MovieList from '../src/cine/MovieList'

function App() {
  return (
    <>
      <Header />
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </>
  )
}

export default App
