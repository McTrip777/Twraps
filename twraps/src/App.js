import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles/allStyles.scss'
// import Canvas from './components/Canvas'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  )
}
export default App
