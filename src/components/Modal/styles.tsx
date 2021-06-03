import styled from "styled-components";

export const Modal = styled.article`
  width: 600px;
  height: 480px;
  border-radius: 1rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.05);
  z-index: 1050;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 2rem;
  border-radius: 1rem 1rem 0 0;
`;

export const Body = styled.section`
  padding: 0 2rem;
`;

export const Footer = styled.footer`
  padding: 2rem;
  margin-top: auto;
  border-radius: 0 0 1rem 1rem;
`;

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;
