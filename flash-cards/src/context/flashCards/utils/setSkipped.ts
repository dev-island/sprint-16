import { BaseFlashCardPayload, TFlashCard } from "../types";

function setSkipped(
  cards: TFlashCard[],
  { id }: BaseFlashCardPayload
): TFlashCard[] {
  return cards.map((card) => {
    if (card.id === id) {
      return {
        ...card,
        dateLastSkipped: new Date().toISOString(),
        timesSkipped: card.timesSkipped + 1,
      };
    }
    return card;
  });
}

export default setSkipped;
