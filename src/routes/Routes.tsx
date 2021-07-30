import { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "../components/Game/Game";
import GameOver from "../components/GameOver/GameOver";
import StartGame from "../components/StartGame/StartGame";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/start-game" component={StartGame} />
      <Route path="/game" component={Game} />
      <Route path="/game-over" component={GameOver} />
      <Redirect to="/start-game" />
    </Switch>
  );
};

export default Routes;
