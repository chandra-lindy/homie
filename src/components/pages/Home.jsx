import React from 'react'
import Navbar from '../Navbar';
import Board from '../Board';
import Button from '../Button';



const Home = () => {
  const source = [
    '../../images/home01.jpeg',
    '../../images/home02.jpeg',
    '../../images/home03.jpeg',
    '../../images/home04.jpeg',
    '../../images/home05.jpeg',
    '../../images/home06.jpeg',
    '../../images/home07.jpeg',
    '../../images/home08.jpeg',
    '../../images/home09.jpeg'
  ];


  function handleImageClick(i) {
    console.log("Home: " + i + " clicked");
  }

  return (
    <>
      <Navbar />
        <Board path={source} handleImageClick={handleImageClick} />
        <Button />
      <div></div>
    </>
  )
}

export default Home
