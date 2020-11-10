import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';

import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

describe('AdventurerRoster', () => {

  describe('Unit Tests', () => {

    test('Should render roster area', async () => {
      render(<AdventurerRoster roster={[{name: 'Mork', chosenHeritage: 'Goblin', chosenClass: 'sorcerer', choseSubclass: 'necromancer', personalInfo: 'is babey'}]}/>)
      const rostertitle = screen.getByTestId('rostertitle')
      const profilearea = screen.getByTestId('profilearea')

      expect(rostertitle).toBeInTheDocument()
      expect(profilearea).toBeInTheDocument()
    });
  })
})
