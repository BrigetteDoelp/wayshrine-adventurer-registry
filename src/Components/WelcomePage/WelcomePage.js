import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'

const WelcomePage = () => {

  return (
    <section className='welcomePage'>
      <h1 data-testid='pageName' className='pageName'>Adventurer Registry</h1>
      <Link to='/registry'>
        <button data-testid='toRegistryButton' className='toRegistryButton'>Move to Registry</button>
      </Link>
    </section>
  )
}

export default WelcomePage;
