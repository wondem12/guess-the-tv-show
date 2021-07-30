import { FC } from "react";
import { useHistory } from "react-router-dom";

import * as Style from "../../style";

interface Props {}

const StartGame: FC<Props> = () => {
  const history = useHistory();

  const redirectToGame = () => {
    history.push("/game");
  };

  return (
    <Style.Main>
      <Style.MainTitle>Guess The TV Show Name</Style.MainTitle>
      <Style.Instructions>
        The goal of the game is to guess a TV show's name. You will see a
        placeholder for a TV name with some missing letters. You should guess
        and fill in the TV show's name. If You guess successfully a tv show
        name, You gets a point and moves forward to guess another tv show name.
        You would be able to use a hint feature in case it's stuck with a
        specific TV show. You have a total of 3 life points. For each wrong
        guess, You loss a point. If You lost all 3 points the game is over and
        can be started again. Good luck !!
      </Style.Instructions>
      <Style.StyledButton onClick={() => redirectToGame()}>
        Start Game
      </Style.StyledButton>
    </Style.Main>
  );
};

export default StartGame;
