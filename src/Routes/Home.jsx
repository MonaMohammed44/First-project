import React from 'react'
import Header from '../Components/Header/Header';
import TopHome from '../Components/Header/TopHome/TopHome';
import Country from '../Components/Country/Country';
import Footer from '../Components/Footer/Footer';


function Home() {
  return (
    <div>
      <Header/>
     <TopHome/>
      <Country/>
      <Footer/>
    </div>
  )
}

export default Home
