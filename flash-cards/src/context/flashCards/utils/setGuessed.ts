import { BaseFlashCardPayload, TFlashCard } from "../types";

function setLastGuessed(
  cards: TFlashCard[],
  { id }: BaseFlashCardPayload
): TFlashCard[] {
  return cards.map((card) => {
    if (card.id === id) {
      return {
        ...card,
        dateLastGuessed: new Date().toISOString(),
        timesGuessed: card.timesViewed + 1,
      };
    }
    return card;
  });
}

export default setLastGuessed;
