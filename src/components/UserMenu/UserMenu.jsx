import React from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import { Wrapper, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <p>Hello, {user.name}</p>
      <Button
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </Button>
    </Wrapper>
  );
};

