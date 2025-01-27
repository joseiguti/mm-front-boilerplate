"use client";

// @ts-ignore
import { Form, Grid } from 'web-monorepo-ui-components';

export default function DemoHomePage() {

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

    const initialData = [
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ];

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
                            isInvalid: true,
                            isRequired: true,
                            errorMessage: 'This field is required.',
                            options: [
                                { value: '1', label: 'Fruit' },
                                { value: '2', label: 'Vegetable' },
                                { value: '3', label: 'Grain' },
                                { value: '4', label: 'Dairy' },
                                { value: '5', label: 'Meat' },
                                { value: '6', label: 'Seafood' },
                            ],
                        },
                    ],
                    {
                        type: 'button',
                        label: 'Save',
                        iconName: 'RiSave3Line',
                        isSubmit: true
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
                onSubmit={(values) => console.log('Form submitted:', values)}
            />
            <Grid
                headers={headers.concat(actions)}
                data={initialData}
                pagination
                itemsPerPage={5}
            />

        </div>
    );
}
