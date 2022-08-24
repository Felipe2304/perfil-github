import styled from "styled-components";

export const Form = styled.form`
  width: 40rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;


  @media screen and (max-width:768px ){
    width: 90%;
  }
  
  `;

export const SearchInput = styled.input`
  height: 100%;
  max-height: 5rem;
  width: 65%;
  padding-left: 1rem;
  border-radius: 5px;
  border: none;


  @media screen and (max-width:768px ){
    font-size: 1.6rem;
  }
  @media screen and (max-width:428px ){
    font-size: 1.4rem;
  }
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
  
  @media screen and (max-width:768px ){
    font-size: 1.4rem;
  }
  @media screen and (max-width:428px ){
    font-size: 1.4rem;
  }
  
  &:active {
    transform: scale(1.1);
  }
`;
