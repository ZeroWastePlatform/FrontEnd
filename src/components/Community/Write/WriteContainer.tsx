import { useNavigate } from "react-router-dom";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import useWriteForm from "../../../hooks/useWriteForm";
import customAPI from "../../../lib/customAPI";
import Write from "./Write";

const WriteContainer = () => {
  const navigate = useNavigate();
  const { mutate } = useSetQueryMutate(
    data => customAPI.post("posts", data),
    ["Community"],
    e => {
      alert("게시물이 등록되었습니다.");
      navigate("/community/board");
    },
  );
  const { handleClickRegist, changeFormData } = useWriteForm(mutate);
  return <Write handleClickRegist={handleClickRegist} changeFormData={changeFormData} />;
};

export default WriteContainer;
