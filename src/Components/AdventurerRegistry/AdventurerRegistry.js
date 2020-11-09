import React from 'react';
import { Component } from 'react';
import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

class AdventurerRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heritages: '',
      classes: '',
      subclasses: '',
      name: '',
      chosenHeritage: '',
      chosenClass: '',
      chosenSubClass: '',
      personalInfo: '',
    }
    this.registryInfo = {
      heritages: '',
      classes: '',
      subclasses: '',
    }
  }

  async componentDidMount() {
    let heritageList = await getHeritage()
    let classList = await getClasses()
    let subClassList = await getSubClasses()

    this.registryInfo.heritages = heritageList.results
    this.registryInfo.classes = classList.results
    this.registryInfo.subclasses = subClassList.results
    // console.log(this.registryInfo.subclasses)

    // this.setState({heritages: heritageList.results})
    // this.setState({classes: classList.results})
    this.setState({subclasses: subClassList.results})
  }

  getHeritageNames() {
    let names = this.registryInfo.heritages.map(heritage => {
      return <option value='question'>{heritage.name}</option>
    })
    return names
  }

  getClassNames() {
    let names = this.registryInfo.classes.map(singleClass => {
      return <option value='question'>{singleClass.name}</option>
    })
    return names
  }

  getSubClassNames() {
    let names = this.registryInfo.subclasses.map(subclass => {
      return <option value='question'>{subclass.name}</option>
    })
    return names
  }

  render() {
    if (!this.registryInfo.heritages || !this.registryInfo.classes || !this.state.subclasses) {
      return <h1>Gathering Registry Information</h1>
    }
    return (
      <section>
         <form>
          <label>Name :</label>
          <input />
          <label>Heritage :</label>
          <select id='heritage' className='dropdown' name='heritage-select'>
            <option value='question'>Choose your heritage</option>
            {this.getHeritageNames()}
          </select>
          <label>Class :</label>
          <select id='class' className='dropdown' name='class-select'>
            <option value='question'>Choose your class</option>
            {this.getClassNames()}
          </select>
          <label>SubClass :</label>
          <select id='subclass' className='dropdown' name='destisubclassnation-select'>
            <option value='question'>Choose your subclass</option>
            {this.getSubClassNames()}
          </select>
          <label>Personal Info :</label>
          <textarea></textarea>
          <button>Register Adventurer</button>
         </form>
      </section>
    )
  }


};

export default AdventurerRegistry;
