import axios from "axios";
import { useQuery } from "react-query";
import customAPI from "../lib/customAPI";

const useSuspenseQuery = <T>(
  queryKey: unknown[],
  url: string,
  onSuccess?: (data: T) => void,
  enabled?: boolean,
  api?: string,
) => {
  const promiseFn = () => {
    if (api)
      return axios
        .get(api)
        .then(res => res.data)
        .catch(err => console.error("err :", err));
    return customAPI(`${url}`)
      .then(res => res.data)
      .catch(err => console.error("err :", err));
  };
  const { data } = useQuery<T>(queryKey, promiseFn, {
    enabled: enabled ?? true,
    suspense: true,
    useErrorBoundary: true,
    onSuccess,
    refetchOnWindowFocus: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    retry: false,
    staleTime: 86400000,
  });

  return { data: data as T };
};

export default useSuspenseQuery;
