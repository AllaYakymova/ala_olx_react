import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LogoDogUX = ({
  isDirect=true,
  hasMustache = false,
  hasHat = false,
  hasMonocle = false,
}) => {
  const mirrorOreNot = classNames({
    'logo-direct': isDirect,
    'logo-mirror': !isDirect,
  });

  const dog = useMemo(() => isDirect ? (
    <img
      src={'./../img/logo.png'}
      alt="dog logo"
      className={mirrorOreNot + '__dog'}
    />
  ) : (
    <img
      src={'./../img/logo_mirror.png'}
      alt="dog logo"
      className={mirrorOreNot + '__dog'}
    />
  ), [isDirect, mirrorOreNot]);

  const mustaches = useMemo(() => hasMustache && (
    <img
      src={'./../img/mustache.png'}
      alt="mustaches"
      className={mirrorOreNot + '__mustache'}
    />
  ), [hasMustache, mirrorOreNot]);

  const hat = useMemo(() => hasHat && (
    <img
      src={'./../img/hat.png'}
      alt="black hat"
      className={mirrorOreNot + '__hat'}
    />
  ), [hasHat, mirrorOreNot]);

  const monocle = useMemo(() => hasMonocle && (
    <img
      src={'./../img/monocle.png'}
      alt="monocle"
      className={mirrorOreNot + '__monocle'}
    />
  ), [hasMonocle, mirrorOreNot]);

  return (
    <div className={mirrorOreNot}>
      {dog}
      {hat}
      {mustaches}
      {monocle}
    </div>
  );
};

LogoDogUX.propTypes = {
  isDirect: PropTypes.bool,
  hasMustache: PropTypes.bool,
  hasHat: PropTypes.bool,
  hasMonocle: PropTypes.bool,
};

export default LogoDogUX;
