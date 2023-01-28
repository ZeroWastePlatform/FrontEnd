import axios from "axios";
import { useQuery } from "react-query";

const useSuspenseQuery = <T>(queryKey: unknown[], url: string, onSuccess?: (data: T) => void) => {
  const { data } = useQuery<T>(queryKey, () => axios(`http://localhost:8000/${url}`).then(res => res.data), {
    suspense: true,
    useErrorBoundary: true,
    onSuccess,
  });

  return { data: data as T };
};

export default useSuspenseQuery;
