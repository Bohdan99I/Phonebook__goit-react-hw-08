import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Form, Label, Button, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    event.target.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </Form>
    </div>
  );
};
