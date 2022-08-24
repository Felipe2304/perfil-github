import styled from "styled-components";

export const AccessGitHubProfile = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img{
    width: 9rem;
  }

  @media screen and (max-width:1024px){
    width: 100%;
  }

`

export const ButtonAccess = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width:70%;
  height: 4rem;
  color: #ffffff;
  background-color:#2ea043 ;
  font-size: 1.4rem;
  border:none;
  border-radius: 5px;
  cursor:pointer;
  transition:200ms;
  text-decoration: none;

  &:active{
    transform: scale(1.1);
  }

  @media screen and (max-width:768px) {
    width: 65%;
    text-align:center;
  }

  @media screen and (max-width:428px){
    font-size: 1.1rem;
  }

`