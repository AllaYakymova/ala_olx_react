const routes = {
  ENTRY: {
    INDEX: '/',
    createFilterPath: query => `/products/${query}`,
  },
  PRODUCTS: {
    INDEX: '/products/:productId',
    createPath: (productId) => ['/products', productId].filter(Boolean).join('/'),
    createFilterPath: query => `/products/${query}`,
    DEFAULT_PATH: '/products/',
  },
  CART: {
    INDEX: '/cart',
    AFTER_ORDERED_MESSAGE: '/cart/ordered',
  },
  ADMIN: {
    DEFAULT_PATH: '/my_products/',
  },
  ORDERS: {
    DEFAULT_PATH: '/my_orders',
  },
  PAGE404: {
    INDEX: '*',
  },
};
export default routes;
