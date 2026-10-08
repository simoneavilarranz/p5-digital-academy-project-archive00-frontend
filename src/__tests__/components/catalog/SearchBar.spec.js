import SearchBar from '@/components/catalog/SearchBar.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('SearchBar', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(SearchBar, {
      props: {
        modelValue: '',
        placeholder: 'Search...',
      },
    })
  })

  it('renders the input with the placeholder', () => {
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('Search...')
  })

  it('emits update model value on input', async () => {
    await wrapper.find('input').setValue('radiohead')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['radiohead'])
  })

  it('emits submit on form submission', async () => {
    await wrapper.find('form').trigger('submit')
    expect(wrapper.emitted('submit')).toBeTruthy()
  })

  it('displays the value from modelValue prop', () => {
    const wrapperWithValue = mount(SearchBar, {
      props: {
        modelValue: 'test query',
        placeholder: 'Search...',
      },
    })
    const input = wrapperWithValue.find('input')
    expect(input.element.value).toBe('test query')
  })
})
