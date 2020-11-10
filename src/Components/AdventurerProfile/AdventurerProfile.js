import React from 'react';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';
import './AdventurerProfile.css';
import { PropTypes } from 'prop-types';
import skull from '../../Assets/danger.png';
import heart from '../../Assets/love.png';

const AdventurerProfile = (props) => {

  return (
    <article className='profileCard'>
      <section className='top'>
        <img data-testid='heart' className='heart' alt='heart' src={heart}/>
        <div className='nameArea'>
          <h3 className='name'>{props.name}</h3>
        </div>
        <img data-testid='skull' className='skull' alt='skull' src={skull}/>
      </section>
      <section className='heritageArea'>
        <h5 className='heritage'>{props.chosenHeritage}</h5>
      </section>
      <section className='classes'>
        <h5 className='class'>{props.chosenClass}</h5>
        <h5 className='subclass'>{props.chosenSubClass}</h5>
      </section>
      <p className='personalInfo'>{props.personalInfo}</p>
    </article>
  )
}

AdventurerProfile.proptype = {
    chosenClass: PropTypes.string,
    chosenHeritage: PropTypes.string,
    chosenSubClass: PropTypes.string,
    id: PropTypes.any,
    loaded: PropTypes.any,
    name: PropTypes.string,
    personalInfo: PropTypes.string,
}

export default AdventurerProfile;
