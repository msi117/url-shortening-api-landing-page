import React from 'react'
import ArticleComponent from './ArticleComponent'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import HeroSection from './HeroSection'


function Main() {
  return (
    <div>
        <Header />
        <HeroSection />
        <ArticleComponent />
        <Aside />
        <Footer />
    </div>
  )
}

export default Main