import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PreLoader from './components/Preloader/PreLoader'
import Home from './Pages/Home'

function App() {
  return (
    <>
      <PreLoader />
      <div className="Home">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
