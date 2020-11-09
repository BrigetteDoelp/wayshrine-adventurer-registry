import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css'
import gsap from 'gsap';

const WelcomePage = () => {

  return (
    <section className='welcomePage'>
      <h1 className='pageName'>Adventurer Registry</h1>
      <Link to='/registry'>
        <button>Move to Registry</button>
      </Link>
    </section>
  )
}

export default WelcomePage;
