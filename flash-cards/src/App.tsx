import "./App.css";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import useAppContext from "./hooks/useAppContext";
import Unknown from "./views/404";
import Home from "./views/HomeView";
import Stats from "./views/StatsView";
import Study from "./views/StudyView";
import ListCards from "./views/ListCardsView";
import Settings from "./views/SettingsView";
import { AppView } from "./context/application/types";
import { FC } from "react";
import CardForm from "./components/CardForm";
import styles from './app.module.css';

const VIEW_MAP: Record<AppView, FC> = {
  [AppView.HOME]: Home,
  [AppView.STUDY]: Study,
  [AppView.STATS]: Stats,
  [AppView.LIST]: ListCards,
  [AppView.SETTINGS]: Settings,
};

const screenSizes = {
  mobile: '(min-width: 768px)',
  tablet: '(min-width: 1024px)',
  desktop: '(min-width: 1280px)',
}

function App() {
  const { currentView } = useAppContext();

  const View = VIEW_MAP[currentView] || Unknown;
  return (
    <Container>
      <NavBar />
      <CardForm />
      <Content fullScreen>
        <View />
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div`

  background: green;

  @media ${screenSizes.mobile} {
    background: red;
  }
`

const Content = styled.div<{fullScreen?: boolean}>`
  padding: 2rem;
  flex: 1;

  ${({fullScreen}) => fullScreen && `
    height: 100%;
  `}
`;
