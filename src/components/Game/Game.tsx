import { FC, useContext, useEffect, useMemo, useState } from "react";
import * as Types from "../../types/index";
import useFetch from "../../hooks/useFetch";
import { useModal } from "../../hooks/useModal";
import { UsePoints } from "../../hooks/UsePoints";
import { convertData } from "../../utils";
import * as Style from "../../style";
import Title from "../Title/Title";
import Chart from "../Chart/Chart";
import { useHistory } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { Switch } from "antd";

interface Props {}
const API_KEY = process.env.REACT_APP_API_KEY_URL;

const Game: FC<Props> = () => {
  const history = useHistory();
  const { id, setTheme } = useContext(ThemeContext);

  //hooks
  const [isModalOpen, openModal, closeModal] = useModal();
  const [lifePoint, point, addPoint, decreaseLifePoint] = UsePoints();

  //data fetching
  const [currentPage, setCurrentPage] = useState<number>(1);
  const URL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}`;
  const { data, isLoading } = useFetch(URL);
  const tvShows = useMemo(() => convertData(data), [data]);

  const [showHint, setShowHint] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentTvShowIndex, setCurrentTvShowIndex] = useState<number>(1);
  const [currentTvShow, setCurrentTvShow] = useState<Types.TvShow | null>();
  const [rightAnswer, setRightAnswer] = useState<boolean>(false);
  const [wrongAnswer, setWrongAnswer] = useState<boolean>(false);
  const [statics, setStatics] = useState<Types.Statics>({
    rightCount: 0,
    wrongCount: 0,
    hintCount: 0,
  });

  useEffect(() => {
    if (lifePoint === 0) {
      history.push("/game-over");
    }
  }, [lifePoint, history]);

  useEffect(() => {
    console.log(currentTvShow?.tvShowName);
  }, [currentTvShow]);

  useEffect(() => {
    setCurrentTvShow(tvShows[currentTvShowIndex]);
  }, [tvShows, currentTvShowIndex]);

  useEffect(() => {
    if (currentTvShowIndex === tvShows.length - 1) {
      setCurrentPage((prevState) => prevState + 1);
      setCurrentTvShowIndex(1);
    }
  }, [currentTvShowIndex, tvShows]);

  const onHintClick = () => {
    setShowHint(true);
    setStatics({
      ...statics,
      hintCount: statics.hintCount + 1,
    });
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const checkGuess = () => {
    if (
      inputValue.toLowerCase().trim() ===
      currentTvShow?.tvShowName.toLowerCase().trim()
    ) {
      setRightAnswer(true);
      setTimeout(() => {
        setRightAnswer(false);
        alert("Right Answer :)");
        setInputValue("");
        setCurrentTvShowIndex((prevState) => prevState + 1);
        setShowHint(false);
        addPoint();
        setStatics({
          ...statics,
          rightCount: statics.rightCount + 1,
        });
      }, 1000);
    } else {
      setWrongAnswer(true);
      setTimeout(() => {
        setWrongAnswer(false);
        alert("Wrong Answer :(");
        setInputValue("");
        decreaseLifePoint();
        setStatics({
          ...statics,
          wrongCount: statics.wrongCount + 1,
        });
      }, 1000);
    }
  };

  return (
    <>
      <Style.Points>
        <Style.Point>
          Theme: <Switch onChange={setTheme} checked={id === "dark"} />
        </Style.Point>
        <Style.Point>Life Point: {lifePoint}</Style.Point>
        <Style.Point>Point: {point}</Style.Point>
      </Style.Points>
      <Style.Main>
        <Style.MainTitle>Guess The TV Show Name</Style.MainTitle>
        {isLoading ? (
          <>Loading</>
        ) : tvShows.length ? (
          <>
            <Style.TvPoster
              $rightAnswer={rightAnswer}
              src={`https://image.tmdb.org/t/p/w300${currentTvShow?.poster}`}
              alt="tv poster"
            />
            <Title
              tvShowName={currentTvShow?.tvShowName as string}
              rightAnswer={rightAnswer}
            />
          </>
        ) : (
          <>Error</>
        )}
        <Style.StyledInput
          onChange={onChange}
          value={inputValue}
          $wrongAnswer={wrongAnswer}
        />
        <Style.ButtonsWrapper>
          <Style.StyledButton onClick={() => onHintClick()}>
            Hint
          </Style.StyledButton>
          <Style.StyledButton onClick={() => checkGuess()}>
            Check The Guess
          </Style.StyledButton>
          <Style.StyledButton onClick={openModal}>Statics</Style.StyledButton>
        </Style.ButtonsWrapper>
        <Style.Hint $visible={showHint}>{currentTvShow?.hint}</Style.Hint>
      </Style.Main>
      <Style.StyledModal
        visible={isModalOpen}
        onOk={openModal}
        onCancel={closeModal}
      >
        <Chart
          labels={["Right Answer", "Wrong Answer", "Hint Click"]}
          datasets={[
            {
              label: "Game Statics",
              data: [statics.rightCount, statics.wrongCount, statics.hintCount],
            },
          ]}
        />
      </Style.StyledModal>
    </>
  );
};

export default Game;
