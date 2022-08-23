import styled from "styled-components";

export const HeaderApp = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  background-color:#161B22;
  padding: 0 5rem;
  margin-bottom: 4rem;


  @media screen and (max-width: 428px){
    padding: 0 2rem;
  }
`;

export const LogoTitle = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: 3.6rem;
    color: #ffffff;
    text-transform: capitalize;
  }

  img{
    width: 8rem;
    background-color: #ffffff;
    border-radius: 100%;
    padding: 0.5rem;
  }

  @media screen and (max-width: 428px){
    h1{
      font-size: 2.5rem;
    }

    img{
      width: 6rem;
    }
  }
`;
