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
    }
  }

  async componentDidMount() {
    let heritageList = await getHeritage()
    let classList = await getClasses()
    let subClassList = await getSubClasses()

    this.setState({heritages: heritageList.results})
    this.setState({classes: classList.results})
    this.setState({subclasses: subClassList.results})
  }

  getHeritageNames() {
    let names = this.state.heritages.map(heritage => {
      return <option value='question'>{heritage.name}</option>
    })
    return names
  }

  getClassNames() {
    let names = this.state.classes.map(singleClass => {
      return <option value='question'>{singleClass.name}</option>
    })
    return names
  }

  getSubClassNames() {
    let names = this.state.subclasses.map(subclass => {
      return <option value='question'>{subclass.name}</option>
    })
    return names
  }

  render() {
    if (!this.state.heritages || !this.state.classes || !this.state.subclasses) {
      return <h1>Gathering Registry Information</h1>
    }
    console.log(this.state.heritages[0].name)
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
