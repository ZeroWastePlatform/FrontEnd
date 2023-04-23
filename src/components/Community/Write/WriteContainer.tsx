import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import useSetQueryMutate from "../../../hooks/useSetQueryMutate";
import useWriteForm from "../../../hooks/useWriteForm";
import customAPI from "../../../lib/customAPI";
import Write from "./Write";

const WriteContainer = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useSetQueryMutate(
    data => customAPI.post("posts", data),
    ["Community", "market"],
    e => {
      queryClient.invalidateQueries(["Community", "market"]);
      let type;
      switch (e.data) {
        case 1:
          type = "board";
          break;
        case 2:
          type = "market";
          break;
        case 3:
          type = "sharing";
          break;
      }
      alert("게시물이 등록되었습니다.");
      navigate(`/community/${type}`);
    },
  );
  const { handleClickRegist, changeFormData } = useWriteForm(mutate);
  return <Write handleClickRegist={handleClickRegist} changeFormData={changeFormData} />;
};

export default WriteContainer;
