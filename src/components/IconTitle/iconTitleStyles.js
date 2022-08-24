import styled from "styled-components";

export const IconTitleItem = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  min-width: 15%;

  img{
    width: 2rem;
    margin-right: 0.5rem;
  }

  span{
    font-size: 1.4rem;
    color:#ffffff;
  }

  @media screen and (max-width:428px){
    flex-direction: column;
    
    img{
      width: 1.8rem;
      margin-bottom: 1rem;
    }
    
    span{
      font-size: 1.1rem;
      text-align: center;
    }
  }


`