import CollectionItem from '@/components/collection/CollectionItem.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/album/:artist/:album', name: 'album', component: { template: '<div>Album</div>' } },
  ],
})

describe('CollectionItem', () => {
  let wrapper

  const mockItem = {
    id: 1,
    lastFmId: 'Radiohead/OK Computer',
    albumName: 'OK Computer',
    artistName: 'Radiohead',
    coverUrl: 'https://example.com/cover.png',
    type: 'SAVED',
    rating: 5,
    reviewText: 'A masterpiece.',
    createdAt: '2026-10-12T10:00:00',
  }

  beforeEach(() => {
    wrapper = mount(CollectionItem, {
      props: { item: mockItem },
      global: { plugins: [router] },
    })
  })
})
