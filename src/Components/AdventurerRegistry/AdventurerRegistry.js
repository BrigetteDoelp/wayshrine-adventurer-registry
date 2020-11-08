import React from 'react';
import { Component } from 'react';
import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

class AdventurerRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heritages: ''
    }
  }

  async componentDidMount() {
    let heritageList = await getHeritage()
    let classList = await getClasses()
    let subClassList = await getSubClasses()

    this.setState({heritages: heritageList})
    console.log(heritageList, classList, subClassList)
  }


  render() {
    return (
      <h1> AAAAHHHHH </h1>
    )
  }


};

export default AdventurerRegistry;
