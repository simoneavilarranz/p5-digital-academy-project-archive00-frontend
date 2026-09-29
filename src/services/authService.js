import apiClient from './apiClient'

export const authService = {
  register(data) {
    return apiClient.post('/auth/register', data)
  },
}
