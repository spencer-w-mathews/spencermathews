import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders the hero heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /spencer mathews/i });
  expect(heading).toBeInTheDocument();
});
