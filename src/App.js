import { Route, Switch } from 'react-router'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
// eslint-disable-next-line no-unused-vars
import PreLoader from './components/Preloader/PreLoader'
import About from './Pages/About'
import Home from './Pages/Home'
import Stills from './Pages/Stills'

function App() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   loading
  //     ? document.querySelector('body').classList.add('preloader')
  //     : document.querySelector('body').classList.remove('preloader')
  // }, [loading])

  return (
    <>
      <div className="App">
        <Header />
        <div className="page-divider home"></div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:page">
            <Stills />
          </Route>
          <Route exact path="/">
            <PreLoader />
            <Home />
          </Route>
        </Switch>
        <div className="page-divider home"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
