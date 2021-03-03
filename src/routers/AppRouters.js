import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ProductsPage from '../pages/ProductsPage/';
import ProductPage from '../pages/ProductPage/';
import CartPage from '../pages/CartPage/';
import AfterOrderPage from '../pages/AfterOrderPage/';
import MyProductsPage from '../pages/MyProductsPage';
import OrdersPage from '../pages/OdersPage';
import Page404 from '../pages/Page404';
import routes from './routes';

const AppRouter = () => {

  return (
    <Switch>
      <Redirect
        exact
        from={routes.ENTRY.INDEX}
        to={routes.PRODUCTS.DEFAULT_PATH}
      />
      <Route exact path={routes.PRODUCTS.DEFAULT_PATH}>
        <ProductsPage/>
      </Route>
      <Route
        exact
        path={routes.PRODUCTS.INDEX}
        render={(routerProps) => <ProductPage {...routerProps} />}
      />
      <Route exact path={routes.CART.INDEX}>
        <CartPage/>
      </Route>
      <Route path={routes.ADMIN.DEFAULT_PATH}>
        <MyProductsPage/>
      </Route>
      <Route exact path={routes.CART.AFTER_ORDERED_MESSAGE}>
        <AfterOrderPage/>
      </Route>
      <Route exact path={routes.ORDERS.DEFAULT_PATH}>
        <OrdersPage/>
      </Route>
      <Route path={routes.PAGE404.INDEX} component={Page404}/>
    </Switch>
  );
};

export default AppRouter;
