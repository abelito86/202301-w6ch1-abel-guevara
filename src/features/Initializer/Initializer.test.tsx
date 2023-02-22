import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { server } from '../../mocks/server';
import Random from './Initializer';
import userEvent from '@testing-library/user-event';

describe('Given a counter component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  test('When the user clicks the show numbers async button, then it should call the async function', async () => {
    render(
      <Provider store={store}>
        <Random />
      </Provider>
    );
    const button = screen.getByTestId('async-button');
    userEvent.click(button);
    const paragraph = screen.getByRole('paragraph');
    await waitFor(() => {
      expect(paragraph).toHaveTextContent('5');
    });
  });
});
