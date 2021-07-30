import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState<null | Object>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);
      setData(result.data.results);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, isError };
};

export default useFetch;
