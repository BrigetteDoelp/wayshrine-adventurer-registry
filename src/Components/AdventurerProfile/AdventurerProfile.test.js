import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdventurerProfile from '../AdventurerProfile/AdventurerProfile.js';

describe('AdventurerProfile', () => {

  describe('Tests', () => {

    test('Should render a profile', () => {
      render(<AdventurerProfile profile={{}}/>)
      const heart = screen.getByTestId('heart')
      const skull = screen.getByTestId('skull')

      expect(heart).toBeInTheDocument()
      expect(skull).toBeInTheDocument()
    });
  })
})
