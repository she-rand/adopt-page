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
    <Header title="Adopt a Doggo"/>
      <div className='cards'>
        <MyCard cardTitle="Barto" cardDescription="He is a friendly and young dogs who loves going for a walk." imageUrl={'./public/dog1.jpg'} buttonColor="primary" buttonText={"Retriever"}></MyCard>
        <MyCard cardTitle="Chocolo" cardDescription="He loves being pet and playing in the park" imageUrl={'./public/dog2.jpg'} buttonColor="danger" buttonText={"Mixed"}></MyCard>
        <MyCard cardTitle="Micky" cardDescription="She loves food and have a quiet time." imageUrl={'./public/dog3.jpg'} buttonColor="success" buttonText={"Spaniel"}></MyCard>
        <MyCard cardTitle="Daisy" cardDescription="She is a protective dog nice to kids." imageUrl={'./public/dog4.jpg'} buttonColor="warning" buttonText={"Bull Dog"}></MyCard>
      </div>
    <Footer text={"Explore our gallery to find the perfect buddy."}></Footer>
    </div>
    
    

    </>
  )
}

export default App
