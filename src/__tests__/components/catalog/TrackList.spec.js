import TrackList from '@/components/catalog/TrackList.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe } from 'vitest'

describe('TrackList', () => {
  let wrapper

  const mockTracks = [
    { name: 'Airbag', duration: 284, position: 1 },
    { name: 'Paranoid Android', duration: 384, position: 2 },
    { name: 'Subterranean Homesick Alien', duration: 267, position: 3 },
  ]

  beforeEach(() => {
    wrapper = mount(TrackList, {
      props: { tracks: mockTracks },
    })
  })
})
