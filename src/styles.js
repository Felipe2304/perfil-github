import styled from "styled-components";

export const ContainerApp = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0d1117;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 26rem);
  width: 90%;
  background-color: #161b22;
  padding: 1rem;
  border-radius: 10px;
`;
