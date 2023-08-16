import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Form from "./Components/form/Form"
import Header from './Components/header/Header'



function App() {
  return(
    
    <>
      <Header/>
      <main className='main'>
      <section>  
      <h1>Contanos de vos</h1>
      </section>
      <Form />
      </main>
    </>
   
  );

}

export default App
