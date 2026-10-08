import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/album/:artist/:album', name: 'album', component: { template: '<div>Album</div>' } },
  ],
})
