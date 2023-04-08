import {
  ArticleInfoRow,
  CommentBox,
  CommentNumber,
  CommunityBoardSection,
  CommuintyLayout,
  CommuintyBoardArticle,
  InquiryBox,
  InquiryNumber,
  TitleBox,
  TitleText,
  WritingTime,
  CommunityCommentSection,
  CommunityCommentArticle,
  CommentContent,
  CommentContentBox,
  CommentCategory,
  CommentInfo,
  CommentTitle,
  CommunityTapRow,
  CommunityTap,
  CommunityTapSpan,
  CommunityTapNumber,
} from "./Community.style";
import commentImg from "../../../assets/images/comments.svg";
import viewImg from "../../../assets/images/view.svg";
import { useEffect, useState } from "react";
import customAPI from "../../../lib/customAPI";

interface ICommentResponseProps {
  content: {
    content: string;
    id: number;
    kind: number;
    postId: number;
    replyCnt: number;
  }[];
}

interface IPostResponseProps {
  content: {
    createdAt: string;
    id: number;
    replyCnt: number;
    title: string;
    viewCnt: number;
  }[];
}

interface IPostDataProps {
  commentResponses: ICommentResponseProps | null;
  postResponses: IPostResponseProps | null;
}

const Commuinty = () => {
  const taps = ["내가 작성한 게시글", "내가 작성한 댓글"];
  const [selectTap, setSelectTap] = useState("내가 작성한 게시글");
  const accessToken = localStorage.getItem("accessToken");
  const [postData, setPostData] = useState<IPostDataProps | null>();

  const postDataPost = [
    {
      id: 1,
      title: "그리너스",
      createdAt: "1분 전",
      replyCnt: 20,
      viewCnt: 1220,
    },
    {
      id: 2,
      title: "그리너스",
      createdAt: "1분 전",
      replyCnt: 20,
      viewCnt: 1220,
    },
    {
      id: 3,
      title: "그리너스",
      createdAt: "1분 전",
      replyCnt: 20,
      viewCnt: 1220,
    },
  ];

  const postDataComment = [
    {
      id: 1,
      content: "그리너스",
      replyCnt: 20,
      viewCnt: 1220,
    },
    {
      id: 2,
      content: "그리너스",
      replyCnt: 20,
    },
    {
      id: 3,
      content: "그리너스",
      replyCnt: 20,
    },
  ];

  // const [page, setPage] = useState(0);

  // const communityAPI = async () => {
  //   try {
  //     const result = await customAPI.get(`members/me/communities?kind=${selectTap}&page=0`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setPostData(result.data);
  //   } catch {
  //     throw new Error("오류");
  //   }
  // };

  // useEffect(() => {
  //   communityAPI();
  // }, [selectTap]);

  return (
    <CommuintyLayout>
      <CommunityTapRow>
        {taps.map((tap, index) => {
          const isSelected = selectTap === tap;
          const postDataLength = [postDataPost.length, postDataComment.length];
          return (
            <CommunityTap
              key={tap}
              onClick={(): void => {
                setSelectTap(tap);
              }}
            >
              <CommunityTapSpan style={isSelected ? { color: "#000000" } : undefined}>{tap}</CommunityTapSpan>

              <CommunityTapNumber style={isSelected ? { color: "#66F095" } : undefined}>
                {postDataLength[index]}
              </CommunityTapNumber>
            </CommunityTap>
          );
        })}
      </CommunityTapRow>

      {selectTap === "내가 작성한 게시글" && (
        <CommunityBoardSection>
          {postDataPost.map(post => {
            return (
              <CommuintyBoardArticle key={post.id}>
                <TitleBox>
                  <TitleText>{post.title}</TitleText>
                </TitleBox>
                <ArticleInfoRow>
                  <WritingTime>{post.createdAt}</WritingTime>
                  <CommentBox>
                    <img src={commentImg} />
                    <CommentNumber>{post.replyCnt}</CommentNumber>
                  </CommentBox>
                  <InquiryBox>
                    <img src={viewImg} />
                    <InquiryNumber>{post.viewCnt}</InquiryNumber>
                  </InquiryBox>
                </ArticleInfoRow>
              </CommuintyBoardArticle>
            );
          })}
        </CommunityBoardSection>
      )}

      {selectTap === "내가 작성한 댓글" && (
        <CommunityCommentSection>
          {postDataComment.map(comment => {
            return (
              <CommunityCommentArticle key={comment.id}>
                <CommentContent>{comment.content}</CommentContent>
                <CommentContentBox>
                  <CommentCategory>[자유게시판]</CommentCategory>
                  <CommentTitle>댓글 작성한 게시글 제목</CommentTitle>
                  <CommentInfo>[{comment.replyCnt}]</CommentInfo>
                </CommentContentBox>
              </CommunityCommentArticle>
            );
          })}
        </CommunityCommentSection>
      )}
    </CommuintyLayout>
  );
};

export default Commuinty;
