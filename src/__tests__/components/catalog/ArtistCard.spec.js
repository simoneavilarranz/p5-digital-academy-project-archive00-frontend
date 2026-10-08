import { describe } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/artist/:name/', name: 'artist', component: { template: '<div>Artist</div>' } },
  ],
})

describe('ArtistCard', () => {
  let wrapper

  const mockArtist = {
    name: 'Radiohead',
    imageUrl: 'https://example.com/radiohead.png',
    lastFmUrl: 'https://www.last.fm/music/Radiohead',
  }
})
