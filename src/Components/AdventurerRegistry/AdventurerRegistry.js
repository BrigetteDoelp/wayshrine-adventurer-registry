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
      <section>
         <form>
          <label>Name :</label>
          <input />
          <label>Heritage :</label>
          <select id='heritage' className='dropdown' name='heritage-select'>
            <option value='question'>Choose your heritage</option>
          </select>
          <label>Class :</label>
          <select id='class' className='dropdown' name='class-select'>
            <option value='question'>Choose your class</option>
          </select>
          <label>SubClass :</label>
          <select id='subclass' className='dropdown' name='destisubclassnation-select'>
            <option value='question'>Choose your subclass</option>
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
