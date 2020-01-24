import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'main', component: () => import('../Mainpage/Mainpage.vue') },
      { path: 'moments', component: () => import('../MomentsPage/Moments.vue') },
      { path: 'quotes', component: () => import('../QuotesPage/Quotes.vue') },
      { path: 'ideas', component: () => import('../IdeasPage/Ideas.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
