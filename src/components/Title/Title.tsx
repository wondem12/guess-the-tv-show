import { FC } from "react";
import * as Style from "./Style";

interface Props {
  tvShowName: string;
  rightAnswer: boolean;
}

const Title: FC<Props> = ({ tvShowName, rightAnswer }) => {
  const sentence = tvShowName.split(/[ ,]+/);
  const words = sentence.map((word) => word.split(""));

  const letters = words.map((word, i) => (
    <Style.StyledTitle key={i}>
      {word.map((letter, i) => (
        <li key={i}>
          {rightAnswer ? (
            <Style.StyledSpan $visible={true}>{letter}</Style.StyledSpan>
          ) : (
            <Style.StyledSpan $visible={i % 2 === 0}>{letter}</Style.StyledSpan>
          )}
        </li>
      ))}
      <li className="space">&nbsp;</li>
    </Style.StyledTitle>
  ));

  return <Style.Section className="title">{letters}</Style.Section>;
};

export default Title;
