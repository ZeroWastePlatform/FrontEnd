export interface ICategoryList {
  image: string;
  text: string;
  href: string;
}

export interface PostType {
  id: number;
  kind: number;
  title: string;
  content: string;
  price?: number;
  viewCnt: number;
  replyCnt: number;
  recommendCnt: number;
  createdAt: string;
  hashtags: string[];
}
export interface PostListType {
  content: PostType[];
}
