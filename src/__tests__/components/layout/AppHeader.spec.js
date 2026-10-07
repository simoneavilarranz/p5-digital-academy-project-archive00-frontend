import AppHeader from '@/components/layout/AppHeader.vue'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/login', name: 'login', component: { template: '<div>Login</div>' } },
  ],
})

const mountHeader = (authState = { token: '', user: null }) => {
  return mount(AppHeader, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          createSpy: vi.fn,
          initialState: { auth: authState },
        }),
      ],
    },
  })
}

describe('AppHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountHeader()
  })

  it('renders the logo', () => {
    expect(wrapper.text()).toContain('ARCHIVE_00')
  })

  it('renders the navigation links', () => {
    expect(wrapper.text()).toContain('EXPLORE')
    expect(wrapper.text()).toContain('LOGIN')
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

  it('shows profile and logout when authenticated', () => {
    const wrapperAuthed = mountHeader({ token: 'fake-token', user: { email: 'test@example.com' } })
    expect(wrapperAuthed.text()).toContain('PROFILE')
    expect(wrapperAuthed.text()).toContain('LOGOUT')
  })

  it('shows login when not authenticated', () => {
    expect(wrapper.text()).toContain('LOGIN')
    expect(wrapper.text()).not.toContain('LOGOUT')
  })
})
