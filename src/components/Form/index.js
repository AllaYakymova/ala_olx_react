import React, { useCallback } from 'react';
import { Field, Form, Formik } from 'formik';
import Input from '../assets/Input/index';
import Selector from '../assets/Selector';
import Button from '../assets/Button';
import { getTotalOrigins } from '../../products/productsSelectors';
import useFormData from './shapes';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import actionsUI from '../../ui/actions';
import actionsAdminWithProduct from '../../admin/actions';
import actionsWithProducts from '../../products/actions';
import { getCreateModalOpen } from '../../ui/uiSelectors';

const ProductForm = ({ product }) => {
  const origins = useSelector(getTotalOrigins).map(origin => origin.value);
  const createModalIsOpen = useSelector(getCreateModalOpen);
  const dispatch = useDispatch();
  const shapes = useFormData(origins);

  const defaultVal = (product !== undefined ? product.origin : '');

  const deleteMyProductHandler = useCallback(async () => {
    await dispatch(actionsAdminWithProduct.deleteMyProduct.request(product.id));
    await dispatch(actionsWithProducts.fetchFilteredProducts.request());
    if (createModalIsOpen) {
      dispatch(actionsUI.isCreateModalOpen());
    } else {
      dispatch(actionsUI.isEditModalOpen());
    }
  }, [product, dispatch, createModalIsOpen]);

  const deleteButton = product && (
    <Button text='Delete product' onClick={deleteMyProductHandler} type="reset" width13/>);

  const submitForm = useCallback(async (values, actions) => {
    actions.setSubmitting(true);
    if (product) {
      await dispatch(actionsAdminWithProduct.editMyProduct.request({ id: product.id, values: values }));
    } else {
      await dispatch(actionsAdminWithProduct.addMyProduct.request(values));
    }
    await dispatch(actionsWithProducts.fetchFilteredProducts.request());
    await actions.setSubmitting(false);
    if (createModalIsOpen) {
      dispatch(actionsUI.isCreateModalOpen());
    } else {
      dispatch(actionsUI.isEditModalOpen());
    }
  }, [product, dispatch, createModalIsOpen]);

  const form = (
    <Formik
      initialValues={{
        name: product ? product.name : '',
        price: product ? product.price : '',
        origin: '',
      }}
      validationSchema={shapes.validationSchema}
      onSubmit={submitForm}
    >
      {({ isSubmitting }) => (
        <Form className='form'>
          <Field name={shapes.options.name.name}>
            {({ field, meta }) => (
              <Input
                id={shapes.options.name.name}
                name={shapes.options.name.name}
                label={shapes.options.name.label}
                placeholder={shapes.options.name.placeholder}
                hasError={meta.touched !== undefined && meta.error !== undefined}
                error={meta.error}
                disabled={isSubmitting}
                {...field} />)}
          </Field>
          <Field name={shapes.options.price.name}>
            {({ field, meta }) => (
              <Input
                id={shapes.options.price.name}
                name={shapes.options.price.name}
                label={shapes.options.price.label}
                placeholder={shapes.options.price.placeholder}
                type='number'
                hasError={meta.touched !== undefined && meta.error !== undefined}
                error={meta.error}
                disabled={isSubmitting}
                {...field}/>)}
          </Field>
          <Field name={shapes.options.origin.name}>
            {({ field, meta }) => (
              <Selector
                defaultValue={defaultVal}
                name={shapes.options.origin.name}
                label={shapes.options.origin.label}
                isOrigin={false}
                value={e => e.value}
                options={shapes.options.origin.origins}
                hasError={meta.error !== undefined}
                error={meta.error}
                disable={isSubmitting}
                {...field}
              />)}
          </Field>
          <div className='button_wrapper'>
            <Button text={product === undefined ? 'Create product' : 'Edit product'} type="submit" width13/>
            {deleteButton}
          </div>
        </Form>
      )}
    </Formik>);

  return (form);
};

ProductForm.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
  }),
};

export default ProductForm;
