import { AxiosResponse } from "axios";
import { MutationFunction, useMutation, useQueryClient } from "react-query";

const useSetQueryMutate = <T, F>(
  promiseCallback: MutationFunction<AxiosResponse<T, unknown>>,
  queryKey?: unknown[],
  setQueryCallback?: (e: AxiosResponse<T, unknown>) => F,
) => {
  const queryClient = useQueryClient();
  const mutateFn = useMutation(promiseCallback, {
    onSuccess: e => {
      if (queryKey && setQueryCallback) {
        queryClient.setQueryData(queryKey, setQueryCallback(e));
      }
    },
    onError: e => {
      alert("에러발생"); //추후 에러 로직이 개별로 필요하게될경우 인자로 넘겨받도록 하도록하겠습니다.
    },
  });
  return mutateFn;
};

export default useSetQueryMutate;
