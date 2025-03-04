import React from 'react'
import NavBar from './components/NavBar'
import Aprops from './components/Aprops'
import Parfums from './components/Parfums'
import PopUp from './components/PopUp'
import Footer from './components/Footer'
import PopUpContact from './components/PopUpContact'
import PopUpInscription from './components/PopUpInscription'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Aprops/>
      <Parfums/>
      <PopUp/>
      <Footer/>
      <PopUpContact/>
      <PopUpInscription/>

    </div>
  )
}

export default App
