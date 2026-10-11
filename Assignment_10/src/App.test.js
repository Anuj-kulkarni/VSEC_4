import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('displays typed text as a heading', async () => {
  render(<App />);

  await userEvent.type(screen.getByLabelText(/enter text/i), 'Hello React');

  expect(screen.getByRole('heading', { level: 1, name: 'Hello React' })).toBeInTheDocument();
});
