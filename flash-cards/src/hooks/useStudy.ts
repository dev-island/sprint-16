import { useContext, useState } from "react";
import {
  FlashCardActionType,
  FlashCardAnswerValue,
} from "../context/flashCards/types";
import { FlashCardsContext } from "../context/flashCards";
import shuffleCards from "../utils/shuffleCards";

export type StudyData = {
  viewed: number;
  skipped: number;
  correct: number;
  incorrect: number;
}

const useStudy = () => {
  const { state, dispatch } = useContext(FlashCardsContext);
  const shuffledCards = shuffleCards(state.cards);
  const [cards, setCards] = useState(shuffledCards);

  const [isFinished, setIsFinished] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const currentCard = cards[currentCardIndex] || {};
  const [studyData, setStudyData] = useState<StudyData>({
    viewed: 0,
    skipped: 0,
    correct: 0,
    incorrect: 0,
  });

  function getNextCard() {
    const nextCardIndex = currentCardIndex + 1;
    if (cards.length === nextCardIndex) {
      setIsFinished(true);
      return;
    }
    setCurrentCardIndex(currentCardIndex + 1);
  }

  function viewCard() {
    if (!currentCard) return;

    dispatch({
      type: FlashCardActionType.VIEWED,
      payload: { id: currentCard.id },
    });

    setStudyData({
      ...studyData,
      viewed: studyData.viewed + 1,
    });
  }

  function guessCard() {
    dispatch({
      type: FlashCardActionType.GUESSED,
      payload: { id: currentCard.id },
    });
  }

  function answerCard(value: FlashCardAnswerValue) {
    dispatch({
      type: FlashCardActionType.ANSWERED,
      payload: { id: currentCard.id, value },
    });
    const key =
      value === FlashCardAnswerValue.CORRECT ? "correct" : "incorrect";
    setStudyData({
      ...studyData,
      [key]: studyData[key] + 1,
    });
    getNextCard();
  }

  function skipCard() {
    dispatch({
      type: FlashCardActionType.SKIPPED,
      payload: { id: currentCard.id },
    });

    setStudyData({
      ...studyData,
      skipped: studyData.skipped + 1,
    });

    getNextCard();
  }

  function reset() {
    setCards(shuffleCards(state.cards));
    setCurrentCardIndex(0);
    setIsFinished(false);
  }

  return {
    viewCard,
    guessCard,
    answerCard,
    skipCard,
    shuffleCards,
    currentCard,
    cards,
    isFinished,
    reset,
    studyData,
  };
};

export default useStudy;
