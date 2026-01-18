import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HelloButton } from './HelloButton';

describe('HelloButton', () => {
  it('renders the button with default label', () => {
    render(<HelloButton />);
    expect(screen.getByTestId('hello-button')).toHaveTextContent('Open Modal');
  });

  it('renders the button with custom label', () => {
    render(<HelloButton label="Click Me!" />);
    expect(screen.getByTestId('hello-button')).toHaveTextContent('Click Me!');
  });

  it('opens modal when button is clicked', () => {
    render(<HelloButton />);
    const button = screen.getByTestId('hello-button');
    fireEvent.click(button);

    const modal = screen.getByTestId('hello-modal');
    expect(modal).toBeInTheDocument();
    expect(screen.getByText('hello!')).toBeInTheDocument();
  });
});
