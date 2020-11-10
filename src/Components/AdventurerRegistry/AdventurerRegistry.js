import React from 'react';
import { Component } from 'react';
import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';
import './AdventurerRegistry.css'

class AdventurerRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      chosenHeritage: '',
      chosenClass: '',
      chosenSubClass: '',
      personalInfo: '',
      loaded: false,
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

    this.setState({loaded: true})
  }

  getHeritageNames() {
    let names = this.registryInfo.heritages.map(heritage => {
      return <option value={heritage.name}>{heritage.name}</option>
    })
    return names
  }

  getClassNames() {
    let names = this.registryInfo.classes.map(singleClass => {
      return <option value={singleClass.name}>{singleClass.name}</option>
    })
    return names
  }

  getSubClassNames() {
    let names = this.registryInfo.subclasses.map(subclass => {
      return <option value={subclass.name}>{subclass.name}</option>
    })
    return names
  }

  updateState = (e) => {
    this.setState({[e.target.name]: e.target.value})
    this.baseState = this.state
  }

  submitProfile = (e) => {
    e.preventDefault()
    this.props.updateRoster(this.state)
  }


  render() {
    if (!this.registryInfo.heritages || !this.registryInfo.classes || !this.registryInfo.subclasses) {
      return <h1>Gathering Registry Information</h1>
    }
    return (
      <section data-testid='formarea' className='formArea'>
       <h3 data-testid='registrytitle' className='registrytitle'>Register Here</h3>
       <form className='registryForm' >
        <section className='name-area'>
         <label className='name-label'>Name:</label>
         <input className='nameinput' data-testid='nameinput' name='name' value={this.state.name} onChange={this.updateState} />
        </section>
        <section className='heritage-area'>
         <label className='heritage-label'>Heritage:</label>
         <select className='heritageselect' data-testid='heritageselect' onChange={this.updateState} value={this.state.heritage} id='heritage' className='dropdown' name='chosenHeritage'>
           <option value='notchosen'>Choose your heritage</option>
           {this.getHeritageNames()}
         </select>
        </section>
        <section className='class-area'>
         <label className='class-label'>Class:</label>
         <select className='classselect' data-testid='classselect' onChange={this.updateState} value={this.state.class} id='class' className='dropdown' name='chosenClass'>
           <option value='notchosen'>Choose your class</option>
           {this.getClassNames()}
         </select>
        </section>
        <section className='subclass-area'>
         <label className='subclass-label'>SubClass:</label>
         <select className='subclassselect' data-testid='subclassselect' onChange={this.updateState} value={this.state.subclass} id='subclass' className='dropdown' name='chosenSubClass'>
           <option value='notchosen'>Choose your subclass</option>
            {this.getSubClassNames()}
         </select>
        </section>
        <section className='personalinfo-area'>
         <label className='personalinfo-label'>Personal Info:</label>
         <textarea data-testid='personalinfoinput' name='personalInfo' value={this.state.personalInfo} onChange={this.updateState}></textarea>
        </section>
        <button className='registerbutton' onClick={this.submitProfile} data-testid='registerbutton' type='submit'>Register Adventurer</button>
       </form>
      </section>
    )
  }


};

export default AdventurerRegistry;
