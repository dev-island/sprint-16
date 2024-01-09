import { useContext, useMemo } from "react";
import {
  CreateFlashCardPayload,
  FlashCardActionType,
} from "../context/flashCards/types";
import { FlashCardsContext } from "../context/flashCards";


const useManageFlashCards = () => {
  const { state, dispatch } = useContext(FlashCardsContext);

  function createCard(payload: CreateFlashCardPayload) {
    dispatch({ type: FlashCardActionType.CREATE, payload });
  }

  const tags = useMemo(() => {
    return state.cards.map((card) => card.tags).flat();
  }, [state.cards]);

  return {
    createCard,
    tags,
    cards: state.cards,
  };
};

export default useManageFlashCards;
