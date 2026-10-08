import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'home', component: { template: '<div>Home</div>' } },
    { path: '/artist/:name/', name: 'artist', component: { template: '<div>Artist</div>' } },
  ],
})
