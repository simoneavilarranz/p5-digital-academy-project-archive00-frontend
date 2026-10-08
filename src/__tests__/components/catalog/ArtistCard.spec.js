import ArtistCard from '@/components/catalog/ArtistCard.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
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

  beforeEach(() => {
    wrapper = mount(ArtistCard, {
      props: { artist: mockArtist },
      global: { plugins: [router] },
    })
  })

  it('renders the artist name', () => {
    expect(wrapper.text()).toContain('Radiohead')
  })

  it('renders the artist image with the correct src', () => {
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe(mockArtist.imageUrl)
  })

  it('links to the artist detail route', () => {
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/artist/Radiohead')
  })
})
