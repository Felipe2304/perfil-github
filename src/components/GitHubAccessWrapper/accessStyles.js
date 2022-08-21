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

`

export const ButtonAccess = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30rem;
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

`