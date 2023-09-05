import styled from '@emotion/styled';

export const Form = styled.form`
  border: 3px solid black;
  background-color: green;
  margin: 0px auto;
  padding: 30px;
  width: 300px;
  border-radius: 8px;
  box-shadow: rgb(34, 34, 34) -4px -5px 19px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 5px;
`;

export const Button = styled.button`
  display: center;
  margin: 0px auto;
  border-radius: 4px;
  border: 2px solid black;
  padding: 5px 10px;
  background: rgb(45, 88, 227);
  color: white;
  font-size: 18px;
  cursor: pointer;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 10px;  
`;