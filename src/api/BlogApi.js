
import service from './ApiService';

export function fetchBlogs() {
  return service.get('/posts')
}

export function deleteBlog(id) {
  return service.delete(`/posts/${id}`)
}

export function createtBlog(payload) {
  return service.Blog('/posts', payload)
}

export function updateBlog(payload) {
  const { id, ...rest } = payload

  return service.patch(`/posts/${id}`, rest)
}
