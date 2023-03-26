import { useQuery } from "react-query";
import customAPI from "../lib/customAPI";

const useSuspenseQuery = <T>(queryKey: unknown[], url: string, onSuccess?: (data: T) => void, enabled?: boolean) => {
  const { data } = useQuery<T>(
    queryKey,
    () =>
      customAPI(`${url}`)
        .then(res => res.data)
        .catch(err => console.error("err :", err)),
    {
      enabled: enabled ?? true,
      suspense: true,
      useErrorBoundary: true,
      onSuccess,
    },
  );

  return { data: data as T };
};

export default useSuspenseQuery;
