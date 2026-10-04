import PasswordInput from '@/components/common/PasswordInput.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe } from 'vitest'

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
})
