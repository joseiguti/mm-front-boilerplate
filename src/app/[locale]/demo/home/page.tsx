"use client";

import React, { useState } from 'react';
import { Form, Grid } from 'web-monorepo-ui-components';
import { DeleteDialog, EditDialog } from './components/Dialogs';
import formConfig from './components/FormConfig';
import { gridHeaders, gridActions } from './components/GridConfig';
import { handleFormSubmit } from './utils/handlers';

export default function DemoHomePage() {
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ]);

    const handleOpenDeleteDialog = (product) => {
        setSelectedProduct(product);
        setDeleteDialogOpen(true);
    };

    const handleOpenEditDialog = () => {
        setEditDialogOpen(true);
    };

    return (
        <div>
            <DeleteDialog
                isOpen={isDeleteDialogOpen}
                onClose={() => setDeleteDialogOpen(false)}
                selectedProduct={selectedProduct}
                setData={setData}
            />
            <EditDialog
                isOpen={isEditDialogOpen}
                onClose={() => setEditDialogOpen(false)}
            />
            <h1>Products</h1>
            <Form fields={formConfig} onSubmit={(values) => handleFormSubmit(values, data, setData)} />
            <Grid
                headers={gridHeaders.concat(gridActions(handleOpenEditDialog, handleOpenDeleteDialog))}
                data={data}
                pagination
                itemsPerPage={5}
            />
        </div>
    );
}
