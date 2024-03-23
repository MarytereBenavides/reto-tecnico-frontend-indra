import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './pages';
import { BrowserRouter as Router } from 'react-router-dom'; // Add this import
import { StoreProvider } from './store/storeProvider';

test('renders Home component', () => {
  render(
    <Router> 
     <StoreProvider><Home /></StoreProvider>
    </Router>
  );

  const homeElement = screen.getByText(/Cotiza aquí/i);
  expect(homeElement).toBeInTheDocument();
});
