import styled from "styled-components";

export const NotProfile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction:column ;
  align-items: center;
  padding: 2rem;

  img{
    width: 20rem;
    margin-bottom:2rem;
  }

  p{
    color: #ffffff;
    font-size: 1.8rem;

    & strong{
      font-size: 2.5rem;
      font-weight: 400;
    }
  }

`