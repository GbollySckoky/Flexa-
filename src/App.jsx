import React from 'react'
import Header from './components/Header/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Hero from './components/Home/Hero'

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Header />
      <Hero />

      <Routes>
        <Route  />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App