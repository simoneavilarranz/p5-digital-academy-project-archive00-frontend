import apiClient from './apiClient'

export const collectionService = {
  add(data) {
    return apiClient.post('/collections', data)
  },
  getMine(type) {
    const params = type ? { type } : {}
    return apiClient.get('/collections/me', { params })
  },
  remove(id) {
    return apiClient.delete(`/collections/${id}`)
  },
  updateReview(id, reviewText) {
    return apiClient.put(`/collections/${id}/review`, { reviewText })
  },
}
