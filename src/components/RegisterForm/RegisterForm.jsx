import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

import { Form, Label, Button, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

   
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};
