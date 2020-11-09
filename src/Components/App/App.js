import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage.js';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      roster: [],
    }
  }

  updateRoster = (profile) => {
    let newProfile = {...profile, id: Date.now()}
    let roster = [... this.state.roster, newProfile]
    this.setState({ roster })
  }

  render() {
    return (
      <BrowserRouter >
        <main className='App'>
          <Switch>
            <Route path='/registry'>
              <section className='mainarea'>
                <AdventurerRegistry updateRoster={this.updateRoster}/>
                <AdventurerRoster roster={this.state.roster}/>
              </section>
            </Route>
            <Route path='/'>
              <WelcomePage />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>

    )
  }


}

export default App;
