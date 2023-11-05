import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import MyCard from './components/MyCard'
import  '../src/index.css'
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
    <Header title="Adopt a doggo"/>
      <div className='cards'>
        <MyCard cardTitle="Barto" cardDescription="asdf" imageUrl={'../public/dog1.jpg'} buttonColor="primary" buttonText={"Husky"}></MyCard>
        <MyCard cardTitle="Chocolo" cardDescription="asdf" imageUrl={'../public/dog2.jpg'} buttonColor="danger" buttonText={"Husky"}></MyCard>
        <MyCard cardTitle="Micky" cardDescription="asdf" imageUrl={'../public/dog3.jpg'} buttonColor="success" buttonText={"Husky"}></MyCard>
        <MyCard cardTitle="Daisy" cardDescription="asdf" imageUrl={'../public/dog4.jpg'} buttonColor="warning" buttonText={"Husky"}></MyCard>
      </div>
    <Footer text={"Explora nuestra galería de imagenes para encontrar al compañero perfecto"}></Footer>
    </div>
    
    

    </>
  )
}

export default App
