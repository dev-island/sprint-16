import { useContext, useMemo } from "react";
import { FlashCardsContext } from "../context/flashCards";

const useStats = () => {
  const { state } = useContext(FlashCardsContext);
  const stats = useMemo(() => {
    const init = {
      totalViews: 0,
      totalSkipped: 0,
      totalCorrect: 0,
      totalIncorrect: 0,
    }
    
    state.cards.forEach(
      (card) => {
        init.totalViews += card.timesViewed;
        init.totalCorrect += card.timesCorrect;
        init.totalIncorrect += card.timesIncorrect;
        init.totalSkipped += card.timesSkipped;
      }
    );

    
  }, [state.cards]);

  return {
    totalCards: state.cards.length,
    stats,
  };
};

export default useStats;
