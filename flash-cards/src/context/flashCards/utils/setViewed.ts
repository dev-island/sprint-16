import { BaseFlashCardPayload, TFlashCard } from "../types";

function setLastViewed(
  cards: TFlashCard[],
  { id }: BaseFlashCardPayload
): TFlashCard[] {
  return cards.map((card) => {
    if (card.id === id) {
      return {
        ...card,
        dateLastViewed: new Date().toISOString(),
        timesViewed: card.timesViewed + 1,
      };
    }
    return card;
  });
}

export default setLastViewed;
