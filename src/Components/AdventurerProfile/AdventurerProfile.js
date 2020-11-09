import React from 'react';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';

const AdventurerProfile = (props) => {

  return (
    <article>
      <img alt='heart'/>
      <h3>{props.name}</h3>
      <img alt='skull'/>
      <h5>{props.chosenHeritage}</h5>
      <h5>{props.chosenClass}</h5>
      <h5>{props.chosenSubClass}</h5>
      <p>{props.personalInfo}</p>
    </article>
  )
}

export default AdventurerProfile;
