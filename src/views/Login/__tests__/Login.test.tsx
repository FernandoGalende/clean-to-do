import { render, screen } from '@testing-library/react';

// To Test
import Login from '../Login.container';

// Tests
describe('Renders main page correctly', async () => {
  it('Should render the login page correctly', async () => {
    // Setup
    render(<Login />);
    const email = await screen.findByRole('textbox', { name: /email/i });

    // Expectations
    expect(email).toBeInTheDocument();
  });
});
