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

export const ButtonAccess = styled.button`
  width: 30rem;
  height: 4rem;
  color: #ffffff;
  background-color:#2ea043 ;
  border:none;
  border-radius: 5px;
  cursor:pointer;
  transition:200ms;

  &:active{
    transform: scale(1.1);
  }

`