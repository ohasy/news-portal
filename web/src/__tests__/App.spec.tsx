import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../App';
describe('<App />', () => {
  test('should render title', async () => {
    const { getByTestId } = render(<App />);
    const header = await getByTestId('header-test');
    expect(header).toHaveTextContent('React App');
  });
});
