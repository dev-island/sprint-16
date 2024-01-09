import { FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { FlashCardAction, FlashCardsState } from "./types";
import reducer from "./reducer";
import useLocalStorage from "../../hooks/useLocalStorage";


const initialState: FlashCardsState = {
  cards: [],
};

export const FlashCardsContext = createContext<{
  state: FlashCardsState;
  dispatch: React.Dispatch<FlashCardAction>;
}>({ state: initialState, dispatch: () => {} });

const FlashCardsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [localData, setLocalData] = useLocalStorage('flashCards', initialState);
  const [state, dispatch] = useReducer(reducer, localData);

  // Save to local storage
  useEffect(() => {
    setLocalData(state);
  }, [setLocalData, state]);

  return (
    <FlashCardsContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashCardsContext.Provider>
  );
};

export default FlashCardsProvider;
