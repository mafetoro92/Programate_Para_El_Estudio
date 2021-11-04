import React from 'react';
import Nav from '../../container/Nav/Nav';

const Home = () => {

  const saludar = () => {
    console.log('Hello World');
  };

  return (
    <>
      <Nav text='Hello' saludar={saludar} />
    </>
  );
};

export default Home;
