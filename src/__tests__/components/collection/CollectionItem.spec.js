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

  it('renders the album name, artist and rating', () => {
    expect(wrapper.text()).toContain('OK Computer')
    expect(wrapper.text()).toContain('Radiohead')
    expect(wrapper.text()).toContain('★')
  })

  it('links to the album detail', () => {
    const link = wrapper.find('a')
    expect(link.attributes('href')).toBe('/album/Radiohead/OK%20Computer')
  })

  it('renders the review text when present', () => {
    expect(wrapper.text()).toContain('A masterpiece.')
  })

  it('does not render the remove button when removable is false', () => {
    expect(wrapper.find('button').exists()).toBe(false)
  })

  it('renders the remove button when removable is true', () => {
    const wrapperRemovable = mount(CollectionItem, {
      props: { item: mockItem, removable: true },
      global: { plugins: [router] },
    })
    expect(wrapperRemovable.find('button').exists()).toBe(true)
  })

  it('emits remove with the item id when clicking the remove button', async () => {
    const wrapperRemovable = mount(CollectionItem, {
      props: { item: mockItem, removable: true },
      global: { plugins: [router] },
    })
    await wrapperRemovable.find('button').trigger('click')
    expect(wrapperRemovable.emitted('remove')).toBeTruthy()
    expect(wrapperRemovable.emitted('remove')[0]).toEqual([1])
  })
})
