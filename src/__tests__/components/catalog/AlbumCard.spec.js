import AlbumCard from '@/components/catalog/AlbumCard.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/album/:artist/:album', name: 'album', component: { template: '<div>Album</div>' } },
  ],
})

describe('AlbumCard', () => {
  let wrapper

  const mockAlbum = {
    name: 'OK Computer',
    artist: 'Radiohead',
    imageUrl: 'https://example.com/image.png',
    lastFmUrl: 'https://www.last.fm/music/Radiohead/OK+Computer',
  }

  beforeEach(() => {
    wrapper = mount(AlbumCard, {
      props: { album: mockAlbum },
      global: { plugins: [router] },
    })
  })
})
