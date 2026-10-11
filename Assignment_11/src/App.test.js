import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('updates the mood card with useState values', async () => {
  render(<App />);

  await userEvent.type(screen.getByLabelText(/your name/i), 'Anuj');
  await userEvent.selectOptions(screen.getByLabelText(/choose your mood/i), 'Focused');

  expect(screen.getByRole('heading', { name: /anuj is feeling focused/i })).toBeInTheDocument();
});
