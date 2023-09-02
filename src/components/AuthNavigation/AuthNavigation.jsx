import React from 'react';
import { AuthLink } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </div>
  );
};

