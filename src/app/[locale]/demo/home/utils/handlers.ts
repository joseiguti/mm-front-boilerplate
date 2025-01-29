import { Notifications } from 'web-monorepo-ui-components';

export const handleFormSubmit = (values, data, setData) => {
    const newId = data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
    const newProduct = {
        id: newId,
        name: values.product,
        category: values.category,
    };
    setData([...data, newProduct]);
    Notifications({
        message: 'Product added successfully',
        type: 'success',
        duration: 5000,
        position: 'top-right',
    }).notify();
};
