import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../WidgetBuilder';
import { HomeIcon } from '../../icons';
import { mainIconColor } from '../../../../utils';

const HomeWidget = ({ onClick=()=>{} }) => {
  const icon = <HomeIcon iconColor={mainIconColor} />;

  return (
    <Widget icon={icon} width="70px" onClick={onClick}/>
)};

HomeWidget.propTypes = {
  onClick: PropTypes.func
};

export default HomeWidget;
