import { AppView } from "../../context/application/types";
import useAppContext from "../../hooks/useAppContext";
import styled from "styled-components";

const NavBar = () => {
  const { currentView, setView, toggleCreateModal } = useAppContext();

  return (
    <Container>
      <div>
        {currentView !== AppView.HOME && (
          <button onClick={() => setView(AppView.HOME)}>Home</button>
        )}
      </div>
      <div className="center">
        <h2>{currentView}</h2>
      </div>
      <div className="flex-end">
        <Button onClick={toggleCreateModal}>Create</Button>
        <Button
          $isActive={currentView === AppView.STUDY ? true : false}
          onClick={() => setView(AppView.STUDY)}
        >
          Study
        </Button>
        <Button
          $isActive={currentView === AppView.STATS ? true : false}
          onClick={() => setView(AppView.STATS)}
        >
          Stats
        </Button>
      </div>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;

  div {
    flex: 1;
  }
`;

const Button = styled.button<{ $isActive?: boolean }>`
  margin: 0 1rem;
  ${({ $isActive }) =>
    $isActive &&
    `
    background: none;
    border: 1px solid white;
    font-weight: bold;
  `}
`;