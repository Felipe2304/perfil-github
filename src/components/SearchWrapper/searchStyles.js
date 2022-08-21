import styled from "styled-components";

export const Form = styled.form`
  width: 40rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const SearchInput = styled.input`
  height: 100%;
  max-height: 5rem;
  width: 65%;
  padding-left: 1rem;
  border-radius: 5px;
  border: none;
`;

export const SearchButton = styled.button`
  height: 100%;
  max-height: 5rem;
  width: 30%;
  background-color: #2ea043;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 200ms;

  &:active {
    transform: scale(1.1);
  }
`;
