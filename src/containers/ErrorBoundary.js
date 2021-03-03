import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { MessageError } from '../components/assets/Messages/';
import routes from '../routers/routes';

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
    errorMessage: null,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, errorMessage: error });
  }

  render() {
    const { children } = this.props;
    const { hasError, errorMessage } = this.state;

    if (hasError) {
      return (
        <div className="cards-wrap cards-wrap_cart container">
          <MessageError text={errorMessage.message} onClick={this.goShop} buttonText='Go back shopping'/>
        </div>
      );
    }
    return children;
  }

  goShop = () => {
    const { history } = this.props;
    history.push(routes.PRODUCTS.DEFAULT_PATH);
    this.setState({ hasError: false });
  };
}

export default withRouter(ErrorBoundary);

