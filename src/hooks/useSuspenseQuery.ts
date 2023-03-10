import { useQuery } from "react-query";
import customAPI from "../lib/customApi";

const useSuspenseQuery = <T>(queryKey: unknown[], url: string, onSuccess?: (data: T) => void) => {
  const { data } = useQuery<T>(
    queryKey,
    () =>
      customAPI(`${url}`)
        .then(res => res.data)
        .catch(err => console.error("err :", err)),
    {
      suspense: true,
      useErrorBoundary: true,
      onSuccess,
    },
  );

  return { data: data as T };
};

export default useSuspenseQuery;
