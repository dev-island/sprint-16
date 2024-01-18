import { FC } from "react";
import { AppView } from "../../context/application/types";
import Card from "../../components/Card";
import useAppContext from "../../hooks/useAppContext";
import styled from "styled-components";
import styles from './index.module.css';

const HomeView: FC = () => {
  const { setView, currentView, toggleCreateModal } = useAppContext();
  // TODO - don't show study button if there are no cards
  if (currentView !== AppView.HOME) {
    return null;
  }

  const cards = [
    {
      text: "Study",
      description: "Study your flash cards and track your progress",
      onClick: () => setView(AppView.STUDY),
    },
    {
      text: "Create",
      description: "Create new flash cards to study",
      onClick: () => toggleCreateModal(),
    },
    {
      text: "View",
      description: "View and edit all of your flash cards in one place",
      onClick: () => setView(AppView.LIST),
    },
    {
      text: "Stats",
      description:
        "View stats for your flash cards from all of your study sessions",
      onClick: () => setView(AppView.STATS),
    },
  ];

  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.text}>
          <div>
            <h3>{card.text}</h3>
            <p>{card.description}</p>
          </div>
          <button onClick={card.onClick}>Go</button>
        </Card>
      ))}
    </div>
  );
};

export default HomeView;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;