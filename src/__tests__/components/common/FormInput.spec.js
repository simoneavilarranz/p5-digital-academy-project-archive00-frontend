import FormInput from '@/components/common/FormInput.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe } from 'vitest'

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
})
