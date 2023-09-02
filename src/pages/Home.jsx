import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: green;
  font-size: 22px;
`;

const H2 = styled.h2`
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <Wrapper>
      <H2>Welcome to Phonebook</H2>    
    </Wrapper>
  );
};

export default Home;
