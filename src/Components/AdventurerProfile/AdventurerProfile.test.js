import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdventurerRoster from '../AdventurerRoster/AdventurerRoster.js';
import AdventurerProfile from '../AdventurerProfile/AdventurerProfile.js';

describe('AdventurerProfile', () => {

  describe('Unit Tests', () => {

    test('Should render roster area', async () => {
      render(<AdventurerProfile profile={{}}/>)
      const heart = screen.getByTestId('heart')
      const skull = screen.getByTestId('skull')
    });
  })
})
