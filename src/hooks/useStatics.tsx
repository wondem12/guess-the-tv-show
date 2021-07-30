import { useState } from "react";
import * as Types from "../types/index";

export const useStatics = () => {
  const [statics, setStatics] = useState<Types.Statics>({
    rightCount: 0,
    wrongCount: 0,
    hintCount: 0,
  });

  const addToStatics = (property: string) => {
    // setStatics({ ...statics, [property]: statics[property] + 1 });
  };

  return [statics, addToStatics] as const;
};
