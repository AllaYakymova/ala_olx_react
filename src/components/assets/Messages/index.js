import React from 'react';
import LogoDogUX from '../LogoDogUX';
import Button from '../Button';
import { Link, useHistory, withRouter } from 'react-router-dom';
import routes from '../../../routers/routes';

export const Message = ({
                          isButton = false,
                          text = 'If you want to buy something - choose it first)) And all that jazzzz',
                        }) => {
  const btn = isButton && <Button text="Go back to shop" isMain/>;

  return (
    <div className="message">
      <div className="message-figure">
        <p>{text}</p>
        <Link to={routes.PRODUCTS.DEFAULT_PATH}>{btn}</Link>
      </div>
      <LogoDogUX isDirect={false} hasMonocle hasHat hasMustache/>
    </div>
  );
};

/////////////////////////////////////////////////////////

export const MessageSendOrder = ({
                                   text = 'Thank you for choosing us!',
                                   style = { fontSize: '1.5em' },
                                 }) => {
  return (
    <>
      <div className="message">
        <div className="message-figure">
          <p style={style}>{text}</p>
          <Link to={routes.ORDERS.DEFAULT_PATH}>
            <Button text="To your orders" isMain/>
          </Link>
        </div>
        <LogoDogUX isDirect={false} hasHat={true}/>
      </div>
    </>
  );
};

/////////////////////////////////////////////////////////

export const MessageError = ({
                               text = 'Oooops, something went wrong!',
                               buttonText,
                               style = { fontSize: '0.8em' },
                               onClick
                             }) => {
  return (
    <>
      <div className="message">
        <div className="message-figure">
          <p>An error has occured!</p>
          <p style={style}>{text}</p>
          <Button text={buttonText} onClick={onClick} isMain/>
        </div>
        <LogoDogUX isDirect={false} hasHat={true}/>
      </div>
    </>
  );
};

/////////////////////////////////////////////////////////

export const Message404 = withRouter(
  ({
     isButton = false,
     text = 'OMG, you\'ve lost!!! I\'ll show you the way out) Just push the button',
   }) => {
    let history = useHistory();
    const backHandler = () => history.goBack(); // push back to previous page

    const btn = isButton && (
      <Button text="Go back" onClick={backHandler} isMain/>
    );

    return (
      <>
        <h1 className="title-404">page 404</h1>
        <div className="message">
          <div className="message-figure">
            <p>{text}</p>
            {btn}
          </div>
          <LogoDogUX isDirect={false}/>
        </div>
      </>
    );
  },
);
