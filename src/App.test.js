import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react NavLink', () => {
  render(<App />);
  const NavLinkElement = screen.getByText(/learn react/i);
  expect(NavLinkElement).toBeInTheDocument();
});