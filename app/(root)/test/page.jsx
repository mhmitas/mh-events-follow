"use client";
import React from 'react';

const page = () => {
    return (
        <div>
            <input type="number" placeholder="Number" onChange={e => console.log(e.target.value)} />
        </div>
    );
};

export default page;