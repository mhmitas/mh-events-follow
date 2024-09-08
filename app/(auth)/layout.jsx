import React from 'react';

const layout = ({ children }) => {
    return (
        <main className='flex items-center justify-center min-h-screen w-full'>
            {children}
        </main>
    );
};

export default layout;