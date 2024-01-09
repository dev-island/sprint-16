import { CreateFlashCardPayload, TFlashCard } from "../types";

function createNewCard(payload: CreateFlashCardPayload): TFlashCard {
  const currentTime = new Date().toISOString();

  return {
    id: Date.now(),
    question: payload.question,
    answer: payload.answer,
    tags: payload.tags,
    dateCreated: currentTime,
    dateLastViewed: undefined,
    dateLastGuessed: undefined,
    dateLastAnswered: undefined,
    dateLastSkipped: undefined,
    timesAnswered: 0,
    timesGuessed: 0,
    timesCorrect: 0,
    timesIncorrect: 0,
    timesSkipped: 0,
    timesViewed: 0,
  };
}

export default createNewCard;
