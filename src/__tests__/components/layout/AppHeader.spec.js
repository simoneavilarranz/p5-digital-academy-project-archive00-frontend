import AppHeader from '@/components/layout/AppHeader.vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/login', name: 'login', component: { template: '<div>Login</div>' } },
  ],
})

describe('AppHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppHeader, { global: { plugins: [router] } })
  })

  it('renders the logo', () => {
    expect(wrapper.text()).toContain('ARCHIVE_00')
  })

  it('renders the navigation links', () => {
    expect(wrapper.text()).toContain('EXPLORE')
    expect(wrapper.text()).toContain('PROFILE')
  })

  it('renders three router links', () => {
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(3)
  })

  it('router links have correct href', () => {
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('/')
    expect(links[1].attributes('href')).toBe('/')
    expect(links[2].attributes('href')).toBe('/login')
  })
})
