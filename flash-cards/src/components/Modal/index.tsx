import { FC } from "react";
import styled from "styled-components";

type Props = {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
};

const Modal: FC<Props> = ({ isOpen, close, children }) => {

  if (!isOpen){
    return null
  }

  return (
    <Container>
      <Overlay onClick={close} />

      <Content>{children}</Content>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  height: 500px;
  width: 95%;
  max-width: 600px;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  z-index: 1;

  color: black;
`;
