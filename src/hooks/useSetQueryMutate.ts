import { AxiosResponse } from "axios";
import { MutationFunction, useMutation, useQueryClient } from "react-query";

const useSetQueryMutate = <T, F>(
  promiseCallback: MutationFunction<AxiosResponse<T, unknown>>,
  queryKey?: unknown[],
  setQueryCallback?: (e: AxiosResponse<T, unknown>) => F,
  errorCallback?: (e: unknown) => F,
) => {
  const queryClient = useQueryClient();
  const mutateFn = useMutation(promiseCallback, {
    onSuccess: e => {
      if (queryKey && setQueryCallback) {
        queryClient.setQueryData(queryKey, setQueryCallback(e));
      }
    },
    onError: e => {
      if (queryKey && errorCallback) {
        queryClient.setQueryData(queryKey, errorCallback(e));
      } else {
        alert("에러발생");
      }
    },
  });
  return mutateFn;
};

export default useSetQueryMutate;
