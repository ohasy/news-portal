import { App } from '../App';
import { render, screen } from './testUtils/test-utils';

describe('<App /> ', () => {
  test('full app rendering/navigating', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/Newzie/i);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent(/Very professional looking footer/i);
  });
});
