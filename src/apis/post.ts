import type { IPagination, IPost, IPosts } from "@/types";
import { request } from "../utils/request";
export function getAllPosts(
  pagin: IPagination = { pageNo: 1, rowSize: 7 }
): IPost[] {
  return request("/posts", {
    method: "GET",
    params: pagin,
  });
}
export function getPostById(id: string | number) {
  return request(`/posts/${id}`, {
    method: "GET",
  });
}

export function updatePost(id: string | number, body: IPosts) {
  return request(`/posts/${id}`, {
    method: "PUT",
    body: body,
  });
}
export function login(body: { username: string; password: string }) {
  return request(`/login`, {
    method: "POST",
    body: body,
  });
}

export function deletePost(id: number) {
  return request(`/posts/${id}`, {
    method: "DELETE",
  });
}

export function newPost(body: IPosts) {
  const formData = new FormData();
  formData.append("blog[title]", body.title);
  formData.append("blog[content]", body.content);
  formData.append("blog[image]", body.image);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  return request("/posts", {
    method: "POST",
    body: formData,
    config,
  });
}
