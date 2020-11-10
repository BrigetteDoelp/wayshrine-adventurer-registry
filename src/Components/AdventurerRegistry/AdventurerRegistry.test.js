import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdventurerRegistry from '../AdventurerRegistry/AdventurerRegistry.js';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';

import { getHeritage, getClasses, getSubClasses } from '../../apiCalls.js';

jest.mock('../../apiCalls.js')

describe('AdventurerRegistry', () => {

  describe('Unit Tests', () => {

    test('Should render registry form', async () => {
      getHeritage.mockResolvedValue({results: ['goblin', 'gnome', 'tiefling']})
      getClasses.mockResolvedValue({results: ['sorcerer', 'druid', 'bard']})
      getSubClasses.mockResolvedValue({results: ['necromancer', 'summoner', 'thief']})
      const mockedFunction = jest.fn()
      render(<AdventurerRegistry updateRoster={mockedFunction}/>)
      const formArea = await waitFor(() => screen.getByTestId('formarea'))
      expect(formArea).toBeInTheDocument()
    });

    test('Should render registry title', async () => {
      getHeritage.mockResolvedValue({results: ['goblin', 'gnome', 'tiefling']})
      getClasses.mockResolvedValue({results: ['sorcerer', 'druid', 'bard']})
      getSubClasses.mockResolvedValue({results: ['necromancer', 'summoner', 'thief']})
      const mockedFunction = jest.fn()
      render(<AdventurerRegistry updateRoster={mockedFunction}/>)
      const formTitle = await waitFor(() => screen.getByTestId('registrytitle'))
      expect(formTitle).toBeInTheDocument()
    });

    test('Should render registry inputs', async () => {
      getHeritage.mockResolvedValue({results: ['goblin', 'gnome', 'tiefling']})
      getClasses.mockResolvedValue({results: ['sorcerer', 'druid', 'bard']})
      getSubClasses.mockResolvedValue({results: ['necromancer', 'summoner', 'thief']})
      const mockedFunction = jest.fn()
      render(<AdventurerRegistry updateRoster={mockedFunction}/>)
      const nameinput = await waitFor(() => screen.getByTestId('nameinput'))
      const heritageselect = await waitFor(() => screen.getByTestId('heritageselect'))
      const classselect = await waitFor(() => screen.getByTestId('classselect'))
      const subclassselect = await waitFor(() => screen.getByTestId('subclassselect'))
      const personalinfoinput = await waitFor(() => screen.getByTestId('personalinfoinput'))
      expect(nameinput).toBeInTheDocument()
      expect(heritageselect).toBeInTheDocument()
      expect(classselect).toBeInTheDocument()
      expect(subclassselect).toBeInTheDocument()
      expect(personalinfoinput).toBeInTheDocument()
    });

    test('Should fire a function on button click', async () => {
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
