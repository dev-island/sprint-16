import { FC, useEffect, useState } from "react";
import useStudy from "../../hooks/useStudy";
import styled from "styled-components";
import styles from './index.module.css';

import Card from "../../components/Card";
import { FlashCardAnswerValue } from "../../context/flashCards/types";
import NoCards from "./components/NoCards";
import Finished from "./components/Finished";
// Where you can study the cards you have created
const StudyView: FC = () => {
  const {
    currentCard,
    viewCard,
    guessCard,
    answerCard,
    skipCard,
    reset,
    isFinished,
    cards,
    studyData,
  } = useStudy();

  const [currentView, setCurrentView] = useState<"question" | "answer">(
    "question"
  );

  function handleGuess() {
    guessCard();
    setCurrentView("answer");
  }

  function skip() {
    skipCard();
    setCurrentView("question");
  }

  function handleAnswer(value: FlashCardAnswerValue) {
    answerCard(value);
    setCurrentView("question");
  }

  useEffect(() => {
    viewCard();
  }, []);

  if (!cards?.length) {
    return (
      <NoCards />
    );
  }

  if (isFinished) {
    return <Finished reset={reset} studyData={studyData} />;
  }

  return (
    <div className={styles.container}>
      {currentView === "question" ? (
        <Card>
          <CardTitle>{currentCard?.question}</CardTitle>
          <CardFooter>
            <Button onClick={handleGuess}>Show Answer</Button>
            <Button onClick={skip}>Skip</Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardTitle>{currentCard?.answer}</CardTitle>
          <CardFooter>
            <Button onClick={() => handleAnswer(FlashCardAnswerValue.CORRECT)}>
              I Got It Right
            </Button>
            <Button onClick={() => handleAnswer(FlashCardAnswerValue.INCORRECT)}>I Got It Wrong</Button>
            <Button onClick={() => setCurrentView("question")}>
              See question
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default StudyView;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

export const CardTitle = styled.h2`
  margin: 0;
`;

export const CardFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background: #ccc;
  cursor: pointer;
  margin-right: 0.5rem;
`;
