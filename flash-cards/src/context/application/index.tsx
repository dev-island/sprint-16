import { FC, ReactNode, createContext, useReducer } from "react";
import { AppView, AppState, AppAction } from "./types";
import reducer from "./reducer";

const initialState = {
  currentView: AppView.HOME,
  flashCardModal: false,
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({
  state: initialState,
  dispatch: () => {},
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
