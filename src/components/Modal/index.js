import React, { useCallback, useMemo } from 'react';
import Portal from './Portal';
import ModalWrapper from './ModalWrapper';
import Button from '../assets/Button';
import ProductForm from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import actionsUI from '../../ui/actions';
import { getCreateModalOpen } from '../../ui/uiSelectors';
import { productNickShape } from '../../utils/propTypesShapes';

const ModalManageProduct = ({ product }) => {
  const createModalIsOpen = useSelector(getCreateModalOpen);
  const dispatch = useDispatch();

  const modalHandler = useCallback(() =>  {
    createModalIsOpen ? dispatch(actionsUI.isCreateModalOpen()) : dispatch(actionsUI.isEditModalOpen());
  }, [actionsUI.isCreateModalOpen, actionsUI.isEditModalOpen, dispatch]);

  const title = useMemo(() => product === undefined ? 'Create product' : 'Edit product', [product]);

  return (
    <Portal>
      <ModalWrapper>
        <div className="modal__content">
          <div className="modal__header">
            <h5 className="modal__title">{title}</h5>
            <Button isCloser onClick={modalHandler} isMain={false}/>
          </div>
          <div className="modal__body">
            <ProductForm product={product}/>
          </div>
        </div>
      </ModalWrapper>
    </Portal>
  );
};

ModalManageProduct.propTypes = {
  product: PropTypes.shape(
    productNickShape
  )
};

export default ModalManageProduct;
