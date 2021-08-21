/* eslint-disable jest/expect-expect */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignIn from '../../components/SignIn';
import  SignInWrapper  from '../../components/SignIn/SignInWrapper';

describe('SignIn', () => {
  describe('SignInWrapper', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button     

      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInWrapper onSubmit={onSubmit} />);

      fireEvent.changeText(getByTestId('usernameField'), 'kalle');
      fireEvent.changeText(getByTestId('passwordField'), 'password');
      fireEvent.press(getByTestId('submitButton'));


      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);

        // onSubmit.mock.calls[0][0] contains the first argument of the first call
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      });
    });
  });
});

