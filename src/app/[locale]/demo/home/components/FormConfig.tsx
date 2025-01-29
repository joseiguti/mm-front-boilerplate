const formConfig = [
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
];

export default formConfig;
