import TrackList from '@/components/catalog/TrackList.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

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

  it('renders all track names', () => {
    expect(wrapper.text()).toContain('Airbag')
    expect(wrapper.text()).toContain('Paranoid Android')
    expect(wrapper.text()).toContain('Subterranean Homesick Alien')
  })

  it('formats the duration correctly', () => {
    expect(wrapper.text()).toContain('4:44')
    expect(wrapper.text()).toContain('6:24')
    expect(wrapper.text()).toContain('4:27')
  })
})
