const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
  { path: '', component: () => import('pages/IndexPage.vue') },
  { path: 'vizpage', component: () => import('pages/VizViewerPage.vue') },
  { path: 'gamecompare', component: () => import('pages/GameCompare.vue') },
  { path: 'about', component: () => import('pages/AboutPage.vue') },
  { path: 'help', component: () => import('pages/HelpPage.vue') }

]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
