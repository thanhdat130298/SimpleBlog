export interface IPosts {
  title: string;
  content: string;
  image: File;
}
export interface IPagination {
  pageNo?: number;
  rowSize?: number;
  search?: string;
  sort_by?: "id" | "title" | "content" | "created_at" | "updated_at";
  sort_direction?: "asc" | "desc";
}
interface IImg {
  url: string;
}
export interface IPost {
  postId?: number;
  name: string;
  content: string;
  created?: string;
  image: IImg;
}
