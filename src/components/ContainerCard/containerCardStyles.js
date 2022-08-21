import styled from "styled-components";

export const ContainerCardBox = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0d1117;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  display: flex;
  height: 30%;
  width: 70%;
  background-color: #161b22;
  border-radius: 10px;
  padding: 1rem;;
`;

export const CardProfile = styled(Card)`
  height: 100%;
  width: 25%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    border-radius: 100%;
    background-color: #2ea043;
    padding: 1rem;
    margin-bottom: 4rem;
  }
  
  h4{
    font-size:1.6rem;
    font-weight:1.6rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  span{
    font-size: 1.4rem;
    color: #ffffff;
  }
`;

export const CardBio = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    text-align: center;
    font-size: 1.6rem;
    color:#ffffff;
    line-height: 30px;
    
  }

`;

export const CardAccessProfile = styled(Card)`
  display: flex;
  justify-content: center;

`;

export const CardInfo = styled(Card)`
  display: flex;
  justify-content: space-around;
  
`;

export const NotBio = styled.p`
  margin: auto;

`
