import { fireEvent, render, screen } from '@testing-library/react';
import 'jest-styled-components';

import App from 'App';
import { Button, Input } from 'components';

describe('<App />', () => {
  it('renders component correctly', () => {
    render(<App />);

    expect(screen).toMatchSnapshot();
  });
  it('renders Button component correctly', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>추가</Button>);

    const buttonElement = screen.getByText('추가');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyleRule('background-color', '#111111');
    expect(buttonElement).toHaveStyleRule('background-color', '#1a1a1a', {
      modifier: ':hover',
    });

    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

    expect(buttonElement).toMatchSnapshot();
  });
  it('renders Input component correctly', () => {
    const handleChange = jest.fn();

    render(
      <Input value="default value" placeholder="default placeholder" onChange={handleChange} />,
    );

    const inputElement = screen.getByDisplayValue('default value');

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('placeholder', 'default placeholder');

    expect(inputElement).toMatchSnapshot();
  });
  it('change Input component value', () => {
    const handleChange = jest.fn();

    render(<Input placeholder="default placeholder" onChange={handleChange} />);

    const inputElement: HTMLInputElement = screen.getByPlaceholderText('default placeholder');

    fireEvent.change(inputElement, { target: { value: 'changed value' } });
    expect(inputElement.value).toBe('changed value');

    expect(inputElement).toBeInTheDocument();
  });
});
