"use client";

// @ts-ignore
import { Form } from 'web-monorepo-ui-components';

export default function DemoHomePage() {
    return (
        <div>
            <h1>Testing monorepo components</h1>
            <Form
                fields={[
                    [
                        {
                            name: 'firstName',
                            label: 'First Name',
                            type: 'text',
                            placeholder: 'First name',
                            isRequired: true,
                        },
                        {
                            name: 'lastName',
                            label: 'Last Name',
                            type: 'text',
                            placeholder: 'Last name',
                            isRequired: true,
                        },
                    ],
                    [
                        {
                            name: 'email',
                            label: 'Email',
                            type: 'text',
                            placeholder: 'Enter your email',
                            isRequired: true,
                        },
                        {
                            name: 'phone',
                            label: 'Phone',
                            type: 'text',
                            placeholder: 'Enter your phone number',
                        },
                    ],
                    {
                        name: 'profilePicture',
                        label: 'Upload Profile Picture',
                        type: 'file',
                        accept: ['image/png', 'image/jpeg'],
                    },
                    {
                        name: 'documents',
                        label: 'Upload Documents',
                        type: 'drop',
                        description: 'Drag and drop documents here (PDF only)',
                        accept: ['application/pdf'],
                    },
                    { type: 'button', label: 'Submit', isSubmit: true },
                    {
                        type: 'button',
                        label: 'Cancel',
                        onClick: () => console.log('Form canceled'),
                    },
                ]}
                onSubmit={(values) => console.log('Form submitted:', values)}
            />

        </div>
    );
}
