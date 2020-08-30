const routes = {
  HOME: {
    path: '/',
    create: () => `/`,
  },
  USER: {
    path: '/user/:id',
    create: (id) => `/user/${id}`,
  },
}

export default routes