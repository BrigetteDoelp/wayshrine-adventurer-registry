import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needThis: 'idk'
    }
  }


  render() {
    return (
      <BrowserRouter >
        <main className='App'>
          <Switch>
            <Route path='/registry'>
              <AdventurerRegistry />
              <AdventurerRoster />
            </Route>
            <Route path='/'>
              <WelcomePage />
            </Route>
          </Switch>
        </main>


    )
  }





}
