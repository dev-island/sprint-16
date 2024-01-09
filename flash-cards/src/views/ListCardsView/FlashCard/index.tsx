import { FC } from "react";
import Card from "../../../components/Card";
import { TFlashCard } from "../../../context/flashCards/types";

const FlashCard: FC<TFlashCard> = ({ question, answer }) => {
  // TODO Click to view details
  // TODO Click to edit
  // TODO Click to delete

  return (
    <Card>
      <div>
        <h3>{question}</h3>
        <p>{answer}</p>
      </div>
    </Card>
  );
};

export default FlashCard;
