import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter controls', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /counter app/i })).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /add \+1/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /minus -1/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
});
