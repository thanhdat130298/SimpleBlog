export interface IPosts {
  title: string;
  content: string;
  image: File;
}
export interface IPagination {
  page?: number;
  offset?: number;
  search?: string;
  sort_by?: "id" | "title" | "content" | "created_at" | "updated_at";
  sort_direction?: "asc" | "desc";
}
interface IImg {
  url: string;
}
export interface IPost {
  id?: number;
  title: string;
  content: string;
  updated_at?: string;
  image: IImg;
}
