"use client";

import React, { useState, useEffect } from 'react';
import { Form, Grid } from 'web-monorepo-ui-components';
import { DeleteDialog, EditDialog } from './components/Dialogs';
import getFormConfig from './components/FormConfig';
import { gridHeaders, gridActions } from './components/GridConfig';
import { handleFormSubmit } from './utils/handlers';
import LanguageSwitcher from "../../../../components/LanguageSwitcher";
import {useTranslations} from "next-intl";

export default function DemoHomePage({ params }: { params: Promise<{ locale: string }> }) {
    const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [isEditDialogOpen, setEditDialogOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [data, setData] = useState([
        { id: 1, name: 'Apple', category: 'Fruit' },
        { id: 2, name: 'Carrot', category: 'Vegetable' },
    ]);
    const [locale, setLocale] = useState<string>("");
    const t = useTranslations("DemoHomePage");

    useEffect(() => {
        params.then((resolvedParams) => {
            setLocale(resolvedParams.locale);
        });
    }, [params]);

    const handleOpenDeleteDialog = (product: React.SetStateAction<null>) => {
        setSelectedProduct(product);
        setDeleteDialogOpen(true);
    };

    const handleOpenEditDialog = () => {
        setEditDialogOpen(true);
    };

    if (!locale) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <LanguageSwitcher currentLocale={locale} />
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
            <h1>{t("title")}</h1>
            <Form fields={getFormConfig(t)} onSubmit={(values: { product: any; category: any; }) => handleFormSubmit(values, data, setData)} />
            <Grid
                headers={gridHeaders.concat(gridActions(handleOpenEditDialog, handleOpenDeleteDialog))}
                data={data}
                pagination
                itemsPerPage={5}
            />
        </div>
    );
}
