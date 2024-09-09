import EventForm from '@/components/my-ui/EventForm';
import { auth } from '@clerk/nextjs/server';
import React from 'react';

const page = () => {
    const { sessionClaims } = auth()
    // console.log({ sessionClaims });


    return (
        <div className='my-container bg-muted dark:bg-background/50 py-16'>
            <EventForm />
        </div>
    );
};

export default page;