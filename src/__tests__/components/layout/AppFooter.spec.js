import AppFooter from '@/components/layout/AppFooter.vue'
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

describe('AppFooter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppFooter, { global: { plugins: [router] } })
  })

  it('renders the logo', () => {
    expect(wrapper.text()).toContain('ARCHIVE_00')
  })

  it('renders the github link', () => {
    expect(wrapper.text()).toContain('GITHUB')
  })

  it('renders the copyright with the current year', () => {
    const currentYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(String(currentYear))
  })

  it('renders both links', () => {
    expect(wrapper.findAll('a')).toHaveLength(2)
  })

  it('links have correct hrefs', () => {
    const links = wrapper.findAll('a')
    expect(links[0].attributes('href')).toBe('/')
    expect(links[1].attributes('href')).toBe('https://github.com/simoneavilarranz')
  })
})
