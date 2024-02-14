import React from 'react'
import { Article1, Brand, Cta, Feature, Navbar  } from './components'
import { Blog, Features, Footer, Header, Possibility, WhatGpt3 } from './containers'
import './App.css'
const App = () => {
  return (
    <div className='App'>

       <div className='gradient__bg'>
            <Navbar/>
            <Header/>
       </div>

       <Brand/>
       <WhatGpt3/>
       <Features/>
       <Possibility/>
       <Cta/>
       <Blog/>
       <Footer/>

    </div>
  )
}

export default App