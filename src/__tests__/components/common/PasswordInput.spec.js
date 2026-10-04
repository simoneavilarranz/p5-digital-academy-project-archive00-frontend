import PasswordInput from '@/components/common/PasswordInput.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe('PasswordInput', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(PasswordInput, {
      props: {
        id: 'password',
        label: 'Password',
        modelValue: '',
      },
    })
  })

  it('renders the label', () => {
    expect(wrapper.text()).toContain('Password')
  })

  it('renders the input as password type by default', () => {
    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe('password')
  })
})
