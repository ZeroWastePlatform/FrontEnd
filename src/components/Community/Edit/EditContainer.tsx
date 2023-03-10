import { useParams } from "react-router-dom";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import useWriteForm from "../../../hooks/useWriteForm";
import customAPI from "../../../lib/customApi";
import { PostType } from "../../../types";
import Write from "../Write/Write";

const EditContainer = () => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<PostType>(["Community", "Article", "ContentBox", id], `posts/${id}`);
  const { mutate } = useSetQueryMutate(data => customAPI.put(`posts/${id}`, { data }));
  const { handleClickRegist, changeFormData } = useWriteForm(mutate, data);
  return <Write handleClickRegist={handleClickRegist} changeFormData={changeFormData} postData={data} />;
};

export default EditContainer;
