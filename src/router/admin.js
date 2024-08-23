const routesAdmin = [
    {
      path: '/managerment',
    //   redirect: '/managerment/products',
      name: 'Layout',
      component: () => import('@/view/layout/layout.view.vue'),
      children: [
        {
          path: '/managerment',
          name: 'Test',
          component: () => import('@/view/product/product.view.vue'),
          meta: { requiresAuth: true }
        },
    
     ]
    }
]
  
  
  export default routesAdmin
  