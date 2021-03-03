const API = {
  PRODUCTS: {
    INDEX: 'products',
    ACTIONS: {
      FETCH_ORIGINS: {
        REQUEST: 'products/fetchOriginsList',
        START: 'products/fetchOriginsList_start',
        SUCCESS: 'products/fetchOriginsList_success',
        ERROR: 'products/fetchOriginsList_error'
      },
      SET_PRICE_INTERVAL: {
        REQUEST: 'products/setPriceInterval',
        START: 'products/setPriceInterval_start',
        SUCCESS: 'products/setPriceInterval_success',
        ERROR: 'products/setPriceInterval_error'
      },
      FETCH_FILTERED_PRODUCTS: {
        REQUEST: 'products/fetchFilteredProducts',
        START: 'products/fetchFilteredProducts_start',
        SUCCESS: 'products/fetchFilteredProducts_success',
        PROPOSALS: 'products/fetchFilteredProducts_proposals',
        ERROR: 'products/fetchFilteredProducts_error'
      },
      CHOSEN_ORIGINS: 'products/setChosenOrigins',
      PAGE: 'products/setCurrentPage',
      PRODUCTS_PER_PAGE: 'products/setProductsPerPage',
      CURRENT_PAGE: 'products/setCurrentPage',
      SELECTED_MIN_PRICE: 'products/setSelectedMinPrice',
      SELECTED_MAX_PRICE: 'products/setSelectedMaxPrice',
      IS_EDITABLE: 'products/setEditable',
      QUERY_PARAMS: 'products/setQueryParams'
    },
  },
  CART: {
    INDEX: 'cart',
    ACTIONS: {
      ADD_PRODUCT: 'cart/addProductToCart',
      REDUCE_PRODUCT_AMOUNT: 'cart/reduceProductInCart',
      REMOVE_PRODUCT: 'cart/removeProductFromCart',
      CLEAR_CART: 'cart/clearCart'
    },
  },
  ADMIN: {
    INDEX: 'adminProduct',
    ACTIONS: {
      ADD_PRODUCT: {
        REQUEST: 'adminProduct/addMyProduct',
        START: 'adminProduct/addMyProduct_start',
        SUCCESS: 'adminProduct/addMyProduct_success',
        ERROR: 'adminProduct/addMyProduct_error'
      },
      EDIT_PRODUCT: {
        REQUEST: 'adminProduct/editMyProduct',
        START: 'adminProduct/editMyProduct_start',
        SUCCESS: 'adminProduct/editMyProduct_success',
        ERROR: 'adminProduct/editMyProduct_error'
      },
      DELETE_PRODUCT: {
        REQUEST: 'adminProduct/deleteMyProduct',
        START: 'adminProduct/deleteMyProduct_start',
        SUCCESS: 'adminProduct/deleteMyProduct_success',
        ERROR: 'adminProduct/deleteMyProduct_error'
      },
      GET_PRODUCT_BY_ID: {
        REQUEST: 'adminProduct/getProductById',
        START: 'adminProduct/getProductById_start',
        SUCCESS: 'adminProduct/getProductById_success',
        ERROR: 'adminProduct/getProductById_error'
      },
    },
  },
  ORDERS: {
    INDEX: 'orders',
    ACTIONS: {
      SEND_ORDER: {
        REQUEST: 'orders/sentOrder',
        START: 'orders/sentOrder_start',
        SUCCESS: 'orders/sentOrder_success',
        ERROR: 'orders/sentOrder_error'
      },
      GET_ORDERS: {
        REQUEST: 'orders/getOrders',
        START: 'orders/getOrders_start',
        SUCCESS: 'orders/getOrders_success',
        ERROR: 'orders/getOrders_error'
      },
      GET_ORDER_BY_ID: {
        REQUEST: 'orders/getOrderById',
        START: 'orders/getOrderById_start',
        SUCCESS: 'orders/getOrderById_success',
        ERROR: 'orders/getOrderById_error'
      },
      CLEAR_ORDER_DETAILS: 'orders/clearOrderDetails'
    },
  },
  UI: {
    INDEX: 'ui',
    OPEN_CREATE_MODAL: 'ui/isCreateModalOpen',
    OPEN_EDIT_MODAL: 'ui/isEditModalOpen'
  },
};

export default API;
