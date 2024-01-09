import { AppAction, AppActionType, AppState, SetViewPayload } from "./types";

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case AppActionType.SET_VIEW: {
      const { view } = action.payload as SetViewPayload;
      return {
        ...state,
        currentView: view,
      };
    }

    case AppActionType.TOGGLE_CREATE_MODAL:
      return {
        ...state,
        flashCardModal: !state.flashCardModal,
      };

    default:
      return state;
  }
};

export default reducer;
