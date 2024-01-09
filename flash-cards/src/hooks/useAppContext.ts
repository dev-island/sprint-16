import { useContext } from "react";
import { AppContext } from "../context/application";
import { AppActionType, AppView } from "../context/application/types";

const useAppContext = () => {
  const { state, dispatch } = useContext(AppContext);

  function setView(view: AppView) {
    dispatch({ type: AppActionType.SET_VIEW, payload: { view } });
  }

  function toggleCreateModal() {
    dispatch({ type: AppActionType.TOGGLE_CREATE_MODAL});
  }

  return {
    setView,
    currentView: state.currentView,
    toggleCreateModal,
    flashCardModal: state.flashCardModal,
  };
};

export default useAppContext;
