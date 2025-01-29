import React from 'react';
import { Dialog } from 'web-monorepo-ui-components';
import { handleDeleteProduct } from '../utils/handlers';

export const DeleteDialog = ({ isOpen, onClose, selectedProduct, setData }) => {
    const dialogButtons = [
        {
            label: "Cancel",
            iconName: "RiChatDeleteLine",
            size: "sm",
            theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
            onClick: onClose,
        },
        {
            label: "Yes",
            iconName: "RiChatCheckLine",
            size: "sm",
            theme: { colors: { buttonBg: "green.500", buttonText: "white" } },
            onClick: () => handleDeleteProduct(selectedProduct, setData, onClose),
        },
    ];

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Delete Product"
            body={<p>Are you sure you want to delete {selectedProduct?.name}?</p>}
            buttons={dialogButtons}
        />
    );
};

export const EditDialog = ({ isOpen, onClose }) => {
    const dialogButtons = [
        {
            label: 'Close',
            iconName: 'RiCloseLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'gray.500', buttonText: 'white' } },
            onClick: onClose,
        },
    ];

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Edit Product"
            body={<p>This option is not implemented yet.</p>}
            buttons={dialogButtons}
        />
    );
};
