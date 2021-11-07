import { Route, Switch } from 'react-router'
import './App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PreLoader from './components/Preloader/PreLoader'
import About from './Pages/About'
import Home from './Pages/Home'
import Stills from './Pages/Stills'

function App() {
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
            {/* <PreLoader /> */}
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
