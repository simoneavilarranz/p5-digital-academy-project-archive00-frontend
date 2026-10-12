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

  it('emits update:modelValue on input', async () => {
    await wrapper.find('input').setValue('newpassword')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['newpassword'])
  })

  it('toggles show and hide password', async () => {
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    await button.trigger('click')
    expect(input.attributes('type')).toBe('text')

    await button.trigger('click')
    expect(input.attributes('type')).toBe('password')
  })
})
