import styled from "styled-components";

export const ContainerCardBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0d1117;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  height: 30%;
  width: 70%;
  background-color: #161b22;
  border-radius: 10px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 15rem;
    margin-bottom: 2rem;
  }
`;

export const CardProfile = styled(Card)`
  height: 100%;
  width: 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  order: 0;

  div {
    text-align: center;
  }

  img {
    width: 15rem;
    border-radius: 100%;
    background-color: #2ea043;
    padding: 1rem;
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 1.6rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: row;

    img {
      width: 12rem;
      margin-right: 10%;
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 428px) {
    img {
      width: 10rem;
    }
  }
`;

export const CardBio = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;

  p {
    text-align: center;
    font-size: 1.6rem;
    color: #ffffff;
    line-height: 30px;
  }

  @media screen and (max-width: 428px) {
    min-height: 20rem;
    p {
      font-size: 1.4rem;
    }
  }
`;

export const CardAccessProfile = styled(Card)`
  display: flex;
  justify-content: center;
  order: 2;
`;

export const CardInfo = styled(Card)`
  display: flex;
  justify-content: space-around;
  order: 3;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const NotBio = styled.p`
  margin: auto;
`;
