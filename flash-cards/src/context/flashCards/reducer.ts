import {
  FlashCardsState,
  FlashCardAction,
  FlashCardActionType,
  CreateFlashCardPayload,
  BaseFlashCardPayload,
  AnsweredFlashCardPayload,
} from "./types";
import createNewCard from "./utils/createNewCard";
import setAnswered from "./utils/setAnswered";
import setGuessed from "./utils/setGuessed";
import setSkipped from "./utils/setSkipped";
import setViewed from "./utils/setViewed";

const reducer = (state: FlashCardsState, action: FlashCardAction) => {
  switch (action.type) {
    case FlashCardActionType.CREATE:
      return {
        ...state,
        cards: [
          ...state.cards,
          createNewCard(action.payload as CreateFlashCardPayload),
        ],
      };
    case FlashCardActionType.VIEWED:
      return {
        ...state,
        cards: setViewed(state.cards, action.payload as BaseFlashCardPayload),
      };
    case FlashCardActionType.GUESSED:
      return {
        ...state,
        cards: setGuessed(state.cards, action.payload as BaseFlashCardPayload),
      };
    case FlashCardActionType.ANSWERED:
      return {
        ...state,
        cards: setAnswered(
          state.cards,
          action.payload as AnsweredFlashCardPayload
        ),
      };

    case FlashCardActionType.SKIPPED:
      return {
        ...state,
        cards: setSkipped(state.cards, action.payload as BaseFlashCardPayload),
      };

    default:
      return state;
  }
};

export default reducer;
