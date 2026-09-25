import AppHeader from '@/components/layout/AppHeader.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/login', name: 'login', component: { template: '<div>Login</div>' } },
  ],
})

describe('AppHeader', () => {
  it('renders the logo', () => {
    const wrapper = mount(AppHeader, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('ARCHIVE_00')
  })
  it('renders the navigation links', () => {
    const wrapper = mount(AppHeader, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('EXPLORE')
    expect(wrapper.text()).toContain('PROFILE')
  })
  it('renders three router links', () => {
    const wrapper = mount(AppHeader, { global: { plugins: [router] } })
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(3)
  })
  it('router links have correct href', () => {
    const wrapper = mount(AppHeader, { global: { plugins: [router] } })
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('/')
    expect(links[1].attributes('href')).toBe('/')
    expect(links[2].attributes('href')).toBe('/login')
  })
})
