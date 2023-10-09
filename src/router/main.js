import HomeView from '@/views/home/index.vue'
import UserView from '@/views/user/index.vue'
import UserCreateView from '@/views/user/create.vue'
import UserUpdateView from '@/views/user/update.vue'
import TodoView from '@/views/todo/index.vue'
import TodoCreateView from '@/views/todo/create.vue'

import ExampleLayout from '@/layouts/ExampleLayout.vue';

// middleware
import AuthMiddleware from '@/middleware/auth.middleware.js';

export default [{
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    meta: {
      title: 'User',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/user/create',
    name: 'user.create',
    component: UserCreateView,
    meta: {
      title: 'User Create',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/user/update',
    name: 'user.update',
    component: UserUpdateView,
    meta: {
      title: 'User Update',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView,
    meta: {
      title: 'Todo',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
  {
    path: '/todo/create',
    name: 'tood.create',
    component: TodoCreateView,
    meta: {
      title: 'Todo Create',
      layout: ExampleLayout,
      middleware: [AuthMiddleware],
    },
  },
]
