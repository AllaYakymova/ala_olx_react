import { number, object, string } from 'yup';

const useFormData = (origins) => {
  return {
    options: {
      name: { name: 'name', label: 'name', placeholder: 'enter product name' },
      price: { name: 'price', label: 'price', placeholder: 'enter price' },
      origin: { name: 'origin', label: 'product origin', origins: ['', ...origins] },
    },
    validationSchema: object().shape({
      name: string()
        .min(3, 'Too short!')
        .max(20, 'Too long!')
        .required('Name is required'),
      price: number()
        .min(0, 'Do you want really to sell or buy?')
        .required('Price is required'),
      origin: string()
        .oneOf(origins, 'Invalid origin')
        .required('Origin is required'),
    }),
  };
};

export default useFormData;
