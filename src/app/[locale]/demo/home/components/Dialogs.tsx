import React from 'react';
import { Dialog, Notifications } from 'web-monorepo-ui-components';

export const DeleteDialog = ({ isOpen, onClose, selectedProduct, setData }) => {
    const handleDelete = () => {
        setData((prevData) => prevData.filter((item) => item.id !== selectedProduct.id));
        Notifications({
            message: `${selectedProduct.name} deleted successfully`,
            type: 'success',
            duration: 5000,
            position: 'top-right',
        }).notify();
        onClose();
    };

    const dialogButtons = [
        {
            label: 'Cancel',
            iconName: 'RiChatDeleteLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
            onClick: onClose,
        },
        {
            label: 'Yes',
            iconName: 'RiChatCheckLine',
            size: 'sm',
            theme: { colors: { buttonBg: 'green.500', buttonText: 'white' } },
            onClick: handleDelete,
        },
    ];

    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            title="Delete product"
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
