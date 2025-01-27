"use client";

// @ts-ignore
import { Form, Grid } from 'web-monorepo-ui-components';
import React, { useState } from 'react';

export default function DemoHomePage() {
    const [data, setData] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ]);

    const buttons = [
        {
            label: 'Edit',
            iconName: 'RiEditLine',
            onClick: (row) => alert(`Edit clicked for ${row.name}`),
        },
        {
            iconName: 'RiDeleteBinLine',
            theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
            onClick: (row) => alert(`Delete clicked for ${row.name}`),
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
        // Generate a unique ID for the new product
        const newId = data.length > 0 ? Math.max(...data.map(item => item.id)) + 1 : 1;

        // Add the new product to the list
        const newProduct = {
            id: newId,
            name: values.product,
            category: values.category,
        };

        setData([...data, newProduct]);
    };

    return (
        <div>
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
                        onClick: () => console.log('Form canceled'),
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
