import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import useAppContext from "./hooks/useAppContext";
import Unknown from "./views/404";
import Home from "./views/HomeView";
import Stats from "./views/StatsView";
import Study from "./views/StudyView";
import ListCards from "./views/ListCardsView";
import { AppView } from "./context/application/types";
import { FC } from "react";
import CardForm from "./components/CardForm";

const VIEW_MAP: Record<AppView, FC> = {
  [AppView.HOME]: Home,
  [AppView.STUDY]: Study,
  [AppView.STATS]: Stats,
  [AppView.LIST]: ListCards,
};

function App() {
  const { currentView } = useAppContext();

  const View = VIEW_MAP[currentView] || Unknown;
  return (
    <div>
      <NavBar />
      <CardForm />
      <Content>
        <View />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  padding: 2rem;
  flex: 1;
`;
