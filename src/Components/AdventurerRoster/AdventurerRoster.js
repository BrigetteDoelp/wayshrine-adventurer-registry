import React from 'react';
import { Component } from 'react';
import AdventurerProfile from '../AdventurerProfile/AdventurerProfile.js';
import App from '../App/App.js';


const AdventurerRoster = (props) => {
  const allProfiles = []

  props.roster.forEach(profile => {
    allProfiles.push(<AdventurerProfile {...profile} />)
  })

  return (
    <section className='profilearea'>
      { allProfiles }
    </section>
  )
}

export default AdventurerRoster;
