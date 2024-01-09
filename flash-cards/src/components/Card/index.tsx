import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Card: FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
}

export default Card;

const Wrapper = styled.div`
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  width: 250px;
  height: 250px;
  color: black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;