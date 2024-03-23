import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './pages';

test('renders Home component', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );

  const homeElement = screen.getByText(/Seguro Salud Flexible/i);
  expect(homeElement).toBeInTheDocument();
});
