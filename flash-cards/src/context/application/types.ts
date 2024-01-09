export enum AppView {
  HOME = "HOME",
  STUDY = "STUDY",
  STATS = "STATS",
  LIST = "LIST",
}

export type AppState = {
  currentView: AppView;
  flashCardModal: boolean;
};

export enum AppActionType {
  SET_VIEW = "SET_VIEW",
  TOGGLE_CREATE_MODAL = "TOGGLE_CREATE_MODAL",
}

export type SetViewPayload = {
  view: AppView;
};



export type AppAction = {
  type: AppActionType;
  payload?: SetViewPayload;
};
