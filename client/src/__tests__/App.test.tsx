import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
describe('App', () => {
  it('renders Hello check', () => {
    render(<App />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
