import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import WelcomePage from './WelcomePage';

describe('WelcomePage', () => {

  describe('Unit Tests', () => {

    test('Should render Welcome Page', () => {
      render(
        <MemoryRouter>
          <WelcomePage />
        </MemoryRouter>
      )
      const appName = screen.getByTestId('pageName')
      const toRegistryButton = screen.getByTestId('toRegistryButton')
      expect(appName).toBeInTheDocument();
      expect(toRegistryButton).toBeInTheDocument();
    });
  })
})
