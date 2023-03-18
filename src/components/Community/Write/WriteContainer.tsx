import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import useWriteForm from "../../../hooks/useWriteForm";
import customAPI from "../../../lib/customApi";
import Write from "./Write";

const WriteContainer = () => {
  const { mutate } = useSetQueryMutate(data => customAPI.post("posts", data));
  const { handleClickRegist, changeFormData } = useWriteForm(mutate);
  return <Write handleClickRegist={handleClickRegist} changeFormData={changeFormData} />;
};

export default WriteContainer;
