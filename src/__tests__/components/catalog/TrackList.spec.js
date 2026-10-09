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

  it('formats the position with leading zeros', () => {
    expect(wrapper.text()).toContain('01')
    expect(wrapper.text()).toContain('02')
    expect(wrapper.text()).toContain('03')
  })

  it('handles missing or zero duration', () => {
    const wrapperNoDuration = mount(TrackList, {
      props: {
        tracks: [{ name: 'Test', duration: 0, position: 1 }],
      },
    })
    expect(wrapperNoDuration.text()).toContain('0:00')
  })

  it('renders the correct number of tracks', () => {
    const rows = wrapper.findAll('.track-row')
    expect(rows).toHaveLength(3)
  })
})
