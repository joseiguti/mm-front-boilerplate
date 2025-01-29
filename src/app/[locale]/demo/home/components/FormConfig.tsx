export default function getFormConfig(t: (key: string) => string) {
    return [
        [
            {
                name: 'product',
                label: t("fieldName"),
                type: 'text',
                placeholder: 'Product name',
                isRequired: true,
            },
            {
                type: 'select',
                name: 'category',
                label: t("fieldCategory"),
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
}
