import AppFooter from '@/components/layout/AppFooter.vue'
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

describe('AppFooter', () => {
  it('renders the logo', () => {
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('ARCHIVE_00')
  })
  it('renders the github link', () => {
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    expect(wrapper.text()).toContain('GITHUB')
  })
  it('renders the copyright with the current year', () => {
    const wrapper = mount(AppFooter, { global: { plugins: [router] } })
    const currentYear = new Date().getFullYear()
    expect(wrapper.text()).toContain(String(currentYear))
  })
})
