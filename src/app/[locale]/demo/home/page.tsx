"use client";

// @ts-ignore
import { Form, Grid, Notifications, Dialog } from 'web-monorepo-ui-components';
import React, { useState, useRef } from 'react';
import 'toastify-js/src/toastify.css';

export default function DemoHomePage() {
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ]);

    const dialogButtons = (closeDialog) => [
        {
            label: 'Cancel',
            iconName: 'RiChatDeleteLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
            onClick: closeDialog,
        },
        {
            label: 'Yes',
            iconName: 'RiChatCheckLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'green.500', buttonText: 'white' } },
            onClick: () => {
                setData(data.filter((item) => item.id !== selectedProduct.id));
                Notifications({
                    message: `${selectedProduct.name} deleted successfully`,
                    type: 'success',
                    duration: 5000,
                    position: 'top-right',
                }).notify();
                closeDialog();
            },
        },
    ];

    const editDialogButtons = (closeDialog) => [
        {
            label: 'Close',
            iconName: 'RiCloseLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'gray.500', buttonText: 'white' } },
            onClick: closeDialog,
        },
    ];

    const handleOpenDeleteDialog = (product) => {
        setSelectedProduct(product);
        setDeleteDialogOpen(true);
    };

    const handleOpenEditDialog = () => {
        setEditDialogOpen(true);
    };

    const handleFormSubmit = (values) => {
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

    const actions = {
        label: 'Actions',
        key: 'actions',
        textAlign: 'end',
        width: 40,
        buttons: [
            {
                label: 'Edit',
                iconName: 'RiEditLine',
                onClick: handleOpenEditDialog,
            },
            {
                iconName: 'RiDeleteBinLine',
                theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
                onClick: (row) => handleOpenDeleteDialog(row),
            },
        ],
    };

    return (
        <div>
            {/* Delete Dialog */}
            <Dialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                title="Delete product"
                body={<p>Are you sure you want to delete {selectedProduct?.name}?</p>}
                buttons={dialogButtons(() => setDeleteDialogOpen(false))}
            />

            {/* Edit Dialog */}
            <Dialog
                isOpen={isEditDialogOpen}
                onClose={() => setEditDialogOpen(false)}
                title="Edit Product"
                body={<p>This option is not implemented yet.</p>}
                buttons={editDialogButtons(() => setEditDialogOpen(false))}
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
