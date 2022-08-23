import styled from "styled-components";

export const NotProfile = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction:column ;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  img{
    width: 30rem;
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
  
  @media screen and (max-width:768px){
    
    img{
      width: 25rem;
      margin-bottom: 5rem;
    }
    
    p{
      text-align: center;
      font-size: 2em;
      
      & strong{
        display: block;
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (max-width:428px) {

    img{
      width: 20rem;
    }


    p{
      font-size: 1.6rem;
      text-align: center;

      & strong{
        font-size:2.5rem ;
      }
    }
  }

`