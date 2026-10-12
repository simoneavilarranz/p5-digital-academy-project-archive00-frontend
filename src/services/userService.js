import apiClient from './apiClient'

export const userService = {
  getMe() {
    return apiClient.get('/users/me')
  },
}
