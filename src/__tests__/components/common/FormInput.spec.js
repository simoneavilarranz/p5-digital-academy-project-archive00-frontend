import FormInput from '@/components/common/FormInput.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('FormInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(FormInput, {
      props: {
        id: 'username',
        label: 'Username',
        modelValue: '',
      },
    })
  })

  it('renders the label', () => {
    expect(wrapper.text()).toContain('Username')
  })

  it('renders the input', () => {
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
