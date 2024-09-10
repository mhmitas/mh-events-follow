import EventForm from '@/components/my-ui/shared/EventForm';
import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react';

const page = async () => {
    // const user = auth()
    const { userId } = auth()
    console.log(userId);


    return (
        <div className='my-container bg-muted dark:bg-background/50 pb-16 pt-8'>
            <h1 className='title-1 mb-6'>Create Event</h1>
            <EventForm type={"Create"} />
        </div>
    );
};

export default page;