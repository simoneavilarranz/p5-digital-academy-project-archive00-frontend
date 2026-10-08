import apiClient from './apiClient'

export const catalogService = {
  search(query) {
    return apiClient.get('/catalog/search', { params: { q: query } })
  },
  getAlbumDetails(artist, album) {
    return apiClient.get(
      `/catalog/album/${encodeURIComponent(artist)}/${encodeURIComponent(album)}`,
    )
  },
  getArtistDetails(name) {
    return apiClient.get(`/catalog/artist/${encodeURIComponent(name)}`)
  },
}
