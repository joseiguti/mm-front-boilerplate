"use client";

// @ts-ignore
import { Form, Grid, Notifications, Dialog } from 'web-monorepo-ui-components';
import React, { useState, useRef } from 'react';
import 'toastify-js/src/toastify.css';

export default function DemoHomePage() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [data, setData] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ]);

    const formRef = useRef(null);

    const dialogButtons = () => [
        {
            label: 'Cancel',
            iconName: 'RiChatDeleteLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
            onClick: () => setDialogOpen(false),
        },
        {
            label: 'Yes',
            iconName: 'RiChatCheckLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'green.500', buttonText: 'white' } },
            onClick: () => {
                if (selectedProduct) {
                    setData((prevData) => prevData.filter((item) => item.id !== selectedProduct.id));
                    const { notify } = Notifications({
                        message: `${selectedProduct.name} was deleted successfully`,
                        type: 'success',
                        duration: 5000,
                        position: 'top-right',
                    });
                    notify();
                    setDialogOpen(false);
                    setSelectedProduct(null);
                }
            },
        },
    ];

    const handleOpenDialog = (product) => {
        setSelectedProduct(product);
        setDialogOpen(true);
    };

    const buttons = [
        {
            label: 'Edit',
            iconName: 'RiEditLine',
            onClick: (row) => alert(`Edit clicked for ${row.name}`),
        },
        {
            iconName: 'RiDeleteBinLine',
            theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
            onClick: handleOpenDialog,
        },
    ];

    const actions = {
        label: 'Actions',
        key: 'actions',
        textAlign: 'end',
        width: 40,
        buttons: buttons,
    };

    const headers = [
        {
            label: 'Product',
            key: 'name',
            textAlign: 'start',
            width: 30,
            isSortable: true,
        },
        {
            label: 'Category',
            key: 'category',
            textAlign: 'start',
            width: 30,
            isSortable: true,
        },
    ];

    const handleFormSubmit = (values) => {
        const newId = data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;

        const newProduct = {
            id: newId,
            name: values.product,
            category: values.category,
        };

        setData([...data, newProduct]);

        const { notify } = Notifications({
            message: 'Product added successfully',
            type: 'success',
            duration: 5000,
            position: 'top-right',
        });

        notify();
    };

    return (
        <div>
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Delete product"
                body={
                    selectedProduct ? (
                        <p>Are you sure you want to delete <strong>{selectedProduct.name}</strong>?</p>
                    ) : (
                        <p>Are you sure you want to delete this product?</p>
                    )
                }
                buttons={dialogButtons()}
            />
            <h1>Products</h1>
            <Form
                fields={[
                    [
                        {
                            name: 'product',
                            label: 'Name',
                            type: 'text',
                            placeholder: 'Product name',
                            isRequired: true,
                        },
                        {
                            type: 'select',
                            name: 'category',
                            label: 'Category',
                            placeholder: 'Choose an option...',
                            value: '',
                            isRequired: true,
                            options: [
                                { value: 'Fruit', label: 'Fruit' },
                                { value: 'Vegetable', label: 'Vegetable' },
                                { value: 'Grain', label: 'Grain' },
                                { value: 'Dairy', label: 'Dairy' },
                                { value: 'Meat', label: 'Meat' },
                                { value: 'Seafood', label: 'Seafood' },
                            ],
                        },
                    ],
                    {
                        type: 'button',
                        label: 'Save',
                        iconName: 'RiSave3Line',
                        isSubmit: true,
                    },
                    {
                        type: 'button',
                        label: 'Cancel',
                        iconName: 'RiCloseLine',
                        theme: {
                            colors: {
                                buttonBg: 'red.500',
                                buttonText: 'white',
                            },
                        },
                        isReset: true,
                    },
                ]}
                onSubmit={handleFormSubmit}
            />
            <Grid
                headers={headers.concat(actions)}
                data={data}
                pagination
                itemsPerPage={5}
            />
        </div>
    );
}
