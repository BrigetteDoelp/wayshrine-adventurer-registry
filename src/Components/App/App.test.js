import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App/App.js';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';
import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

jest.mock('../../apiCalls.js')


describe('App', () => {

  describe('Tests', () => {

    test('Should render a profile when the button is clicked', async () => {
      getHeritage.mockResolvedValue({results: ['goblin', 'gnome', 'tiefling']})
      getClasses.mockResolvedValue({results: ['sorcerer', 'druid', 'bard']})
      getSubClasses.mockResolvedValue({results: ['necromancer', 'summoner', 'thief']})
      const mockedFunction = jest.fn()
      render(<AdventurerRegistry updateRoster={mockedFunction}/>)
      const registerbutton = await waitFor(() => screen.getByTestId('registerbutton'))
      userEvent.click(registerbutton);
      render(<AdventurerRoster roster={[{name: 'Mork', chosenHeritage: 'Goblin', chosenClass: 'sorcerer', choseSubclass: 'necromancer', personalInfo: 'is babey'}]}/>)
      const skullIcon = screen.getByTestId('skull')
      expect(skullIcon).toBeInTheDocument()
    });

  })
})
