export type Collection = {
  cards: TFlashCard[];
  id: number;
  name: string;
  description: string;
  dateCreated: string;
  dateLastViewed?: string;
};

export type TFlashCard = {
  id: number;
  question: string;
  answer: string;
  tags: string[];
  dateCreated: string;
  dateLastViewed?: string;
  dateLastGuessed?: string;
  dateLastAnswered?: string;
  dateLastSkipped?: string;
  timesAnswered: number;
  timesCorrect: number;
  timesIncorrect: number;
  timesSkipped: number;
  timesViewed: number;
  timesGuessed: number;
};

export enum FlashCardAnswerValue {
  CORRECT = "CORRECT",
  INCORRECT = "INCORRECT",
}

export enum FlashCardActionType {
  CREATE = "CREATE",
  VIEWED = "VIEWED",
  GUESSED = "GUESSED",
  SKIPPED = "SKIPPED",
  ANSWERED = "ANSWERED",
  SET_ANSWERED_CORRECT = "SET_ANSWERED_CORRECT",
  SET_ANSWERED_INCORRECT = "SET_ANSWERED_INCORRECT",
}

// ACTION TYPES
export type CreateFlashCardPayload = {
  question: string;
  answer: string;
  tags: string[];
};

export type BaseFlashCardPayload = {
  id: number;
};

export type AnsweredFlashCardPayload = {
  id: number;
  value: FlashCardAnswerValue;
};

// An interface for our actions
export type FlashCardAction = {
  type: FlashCardActionType;
  payload?:
    | CreateFlashCardPayload
    | AnsweredFlashCardPayload
    | BaseFlashCardPayload;
};

export type FlashCardsState = {
  cards: TFlashCard[];
};
