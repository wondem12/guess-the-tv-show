import { FC } from "react";
import { useHistory } from "react-router-dom";
import * as Style from "../../style";

interface Props {}

const GameOver: FC<Props> = () => {
  const history = useHistory();

  const redirectToTheStartGame = () => {
    history.push("/start-game");
  };

  return (
    <Style.Main>
      <Style.MainTitle>Game Over</Style.MainTitle>

      <Style.StyledButton onClick={() => redirectToTheStartGame()}>
        Try Again
      </Style.StyledButton>
    </Style.Main>
  );
};

export default GameOver;
