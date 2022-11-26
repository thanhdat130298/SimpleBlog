import type { IPagination, IPost, IPosts } from "@/types";
import { request } from "../utils/request";
export function getAllPosts(
  pagin: IPagination = { page: 1, offset: 20 }
): IPost[] {
  return request("/blogs", {
    method: "GET",
    params: pagin,
  });
}
export function getPostById(id: string | number) {
  return request(`/blogs/${id}`, {
    method: "GET",
  });
}

export function updatePost(id: string | number, body: IPosts) {
  return request(`/blogs/${id}`, {
    method: "PUT",
    body: body,
  });
}

export function deletePost(id: string | number) {
  return request(`/blogs/${id}`, {
    method: "DELETE",
  });
}

export function newPost(body: IPosts) {
  return request("/blogs", {
    method: "POST",
    body: body,
  });
}
