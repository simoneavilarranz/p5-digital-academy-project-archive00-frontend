import SearchBar from '@/components/catalog/SearchBar.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe } from 'vitest'

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
})
