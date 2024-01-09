import { FC } from "react";
import useFlashCards from "../../hooks/useManageFlashCards";
import FlashCard from "./FlashCard";

// View a list of all cards
const ListCardsView: FC = () => {
  const { cards } = useFlashCards();
  return (
    <div>
      {cards.length ? (
        cards.map((card) => <FlashCard {...card} key={card.id} />)
      ) : (
        <div>No cards to display</div>
      )}
    </div>
  );
};

export default ListCardsView;
