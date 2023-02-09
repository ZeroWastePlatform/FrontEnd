import {
  ArticleParagraph,
  ArticleTitle,
  BookMarkButton,
  BookMarkParagraph,
  CommentBox,
  ContentArticle,
  ContentListBox,
  ContentListLayout,
  ContentSection,
  EditButton,
} from "./ContentList.style";

const ContentList = () => {
  return (
    <ContentListLayout>
      <ContentListBox>
        <BookMarkParagraph>북마크한 글</BookMarkParagraph>
        <EditButton>편집</EditButton>
      </ContentListBox>

      <ContentSection>
        <ContentArticle>
          <CommentBox>
            <img src="" alt="" />
            <BookMarkButton>
              <img src="" alt="" />
            </BookMarkButton>
          </CommentBox>
          <ArticleTitle>여태 분리수거 잘못하고 있었다고?</ArticleTitle>
          <ArticleParagraph>올바른 재활용 방법 알아보기</ArticleParagraph>
        </ContentArticle>

        <ContentArticle>
          <CommentBox>
            <img src="" alt="" />
            <BookMarkButton>
              <img src="" alt="" />
            </BookMarkButton>
          </CommentBox>
          <ArticleTitle>여태 분리수거 잘못하고 있었다고?</ArticleTitle>
          <ArticleParagraph>올바른 재활용 방법 알아보기</ArticleParagraph>
        </ContentArticle>

        <ContentArticle>
          <CommentBox>
            <img src="" alt="" />
            <BookMarkButton>
              <img src="" alt="" />
            </BookMarkButton>
          </CommentBox>
          <ArticleTitle>여태 분리수거 잘못하고 있었다고?</ArticleTitle>
          <ArticleParagraph>올바른 재활용 방법 알아보기</ArticleParagraph>
        </ContentArticle>

        <ContentArticle>
          <CommentBox>
            <img src="" alt="" />
            <BookMarkButton>
              <img src="" alt="" />
            </BookMarkButton>
          </CommentBox>
          <ArticleTitle>여태 분리수거 잘못하고 있었다고?</ArticleTitle>
          <ArticleParagraph>올바른 재활용 방법 알아보기</ArticleParagraph>
        </ContentArticle>
      </ContentSection>
    </ContentListLayout>
  );
};

export default ContentList;
