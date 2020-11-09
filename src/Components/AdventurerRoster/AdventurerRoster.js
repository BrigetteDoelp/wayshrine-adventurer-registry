import React from 'react';
import { Component } from 'react';
import AdventurerProfile from '../AdventurerProfile/AdventurerProfile.js';
import App from '../App/App.js';
import './AdventurerRoster.css'
import skull from '../../Assets/danger.png';
import heart from '../../Assets/love.png';


const AdventurerRoster = (props) => {
  const allProfiles = []

  props.roster.forEach(profile => {
    allProfiles.push(<AdventurerProfile {...profile} />)
  })

  return (
    <section className='rosterarea'>
      <h2 className='rostertitle'>Active Adventurer Roster</h2>
      <section className='profilearea'>
        { allProfiles }
      </section>
    </section>
  )
}

export default AdventurerRoster;
