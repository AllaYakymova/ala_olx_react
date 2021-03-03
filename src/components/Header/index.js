import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../assets/widgets/CartWidget/';
import HomeWidget from '../assets/widgets/HomeWidget/';
import Logo from '../assets/Logo/';
import routes from '../../routers/routes';
import Button from '../assets/Button';
import AdminDashboard from '../AdminDashboard/index';


const Header = () => {
  const [boardOpen, setBoardOpen] = useState(false);

  const dashBoard = boardOpen &&
    (<AdminDashboard isBoardOpen={boardOpen} closeAdminHandler={(state) => setBoardOpen(state)}/>);

  const boardHandler = useCallback(() => setBoardOpen(!boardOpen), [setBoardOpen, boardOpen]);

  return (
    <>
      <div className="bgc fixed">
        <header className="header container">
          <Logo/>
          <div className="widget">
            <Link to={routes.PRODUCTS.DEFAULT_PATH}>
              <HomeWidget/>
            </Link>
            <Link to={routes.CART.INDEX}>
              <CartWidget/>
            </Link>
          </div>
          <div>

            <Button text={boardOpen ? 'Close admin panel' : 'Open admin panel'} isMain width15
                    onClick={boardHandler} mr/>
          </div>
          {dashBoard}
        </header>
      </div>
    </>
  );
};

export default Header;
