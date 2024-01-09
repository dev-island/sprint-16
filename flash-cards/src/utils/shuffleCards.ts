import { TFlashCard } from "../context/flashCards/types";

const shuffleCards = (cards: TFlashCard[]) => {
  const shuffledCards = [...cards];
  let currentIndex = shuffledCards.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledCards[currentIndex], shuffledCards[randomIndex]] = [
      shuffledCards[randomIndex],
      shuffledCards[currentIndex],
    ];
  }

  return shuffledCards;
};

export default shuffleCards;
