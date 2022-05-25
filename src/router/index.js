import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/components/Home';
import ConditionalDemoPage from '@/components/Conditional';
import LoopingDemoPage from '@/components/Looping'

const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: '/home/:name',
        component: HomePage
    },
    {
        path: '/conditional',
        component: ConditionalDemoPage
    },
    {
        path: '/looping',
        component: LoopingDemoPage
    }
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;