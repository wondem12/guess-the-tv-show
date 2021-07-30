import { TvShow } from "../types";

export const convertData = (rawData: any): Array<TvShow> => {
  return rawData?.map((tvShow: any) => {
    return {
      id: tvShow.id,
      tvShowName: tvShow.name,
      hint: tvShow.overview,
      poster: tvShow.backdrop_path,
    };
  });
};
