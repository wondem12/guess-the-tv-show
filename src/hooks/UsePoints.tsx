import { useEffect, useState } from "react";

export const UsePoints = () => {
  const [lifePoint, setLifePoint] = useState<number>(3);
  const [point, setPoint] = useState<number>(0);

  const addPoint = () => {
    setPoint((prevState) => prevState + 1);
  };

  const decreaseLifePoint = () => {
    setLifePoint((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (lifePoint === 0) {
      alert("Game Over");
    }
  }, [lifePoint]);

  return [lifePoint, point, addPoint, decreaseLifePoint] as const;
};
