import React from 'react';
import { Component } from 'react';
import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

class AdventurerRegistry extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    if (!this.registryInfo.heritages || !this.registryInfo.classes || !this.registryInfo.subclasses) {
      return <h1>Gathering Registry Information</h1>
    }
    return (
      <section>
         <form>
          <label>Name :</label>
          <input name='name' onChange={this.updateState} />
          <label>Heritage :</label>
          <select onChange={this.updateState} id='heritage' className='dropdown' name='chosenHeritage'>
            <option value='notchosen'>Choose your heritage</option>
            {this.getHeritageNames()}
          </select>
          <label>Class :</label>
          <select onChange={this.updateState} id='class' className='dropdown' name='chosenClass'>
            <option value='notchosen'>Choose your class</option>
            {this.getClassNames()}
          </select>
          <label>SubClass :</label>
          <select onChange={this.updateState} id='subclass' className='dropdown' name='chosenSubClass'>
            <option value='notchosen'>Choose your subclass</option>
            {this.getSubClassNames()}
          </select>
          <label>Personal Info :</label>
          <textarea name='personalInfo' onChange={this.updateState}></textarea>
          <button>Register Adventurer</button>
         </form>
         <article className>
         </article>
      </section>
    )
  }


};

export default AdventurerRegistry;
