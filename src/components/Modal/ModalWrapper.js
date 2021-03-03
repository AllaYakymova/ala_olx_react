import React from 'react';

const ModalWrapper = ({ children }) => {

  return (
    <div className="modal__dialog">
      {children}
    </div>
  );
};

export default ModalWrapper;
