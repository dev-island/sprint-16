import {
  AnsweredFlashCardPayload,
  TFlashCard,
  FlashCardAnswerValue,
} from "../types";

function setLastAnswered(
  cards: TFlashCard[],
  { id, value }: AnsweredFlashCardPayload
): TFlashCard[] {
  return cards.map((card) => {
    if (card.id === id) {
      return {
        ...card,
        dateLastAnswered: new Date().toISOString(),
        timesAnswered: card.timesAnswered + 1,
        timesCorrect:
          value === FlashCardAnswerValue.CORRECT
            ? card.timesCorrect + 1
            : card.timesCorrect,
        timesIncorrect:
          value === FlashCardAnswerValue.INCORRECT
            ? card.timesIncorrect + 1
            : card.timesIncorrect,
      };
    }
    return card;
  });
}

export default setLastAnswered;
