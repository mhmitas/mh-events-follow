import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

const FeaturedEvents = () => {
    return (
        <section className="my-container mb-16">
            <h2 className="title-1 mb-8 text-start">Featured Events</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="group relative rounded-lg overflow-hidden drop-shadow-lg hover:drop-shadow-xl border bg-background">
                        <figure className='aspect-video bg-muted overflow-hidden'>
                            <Image
                                src={`https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?t=st=1725594170~exp=1725597770~hmac=c841441e071792f2dded23d4a3737172b85aed66b6d4cbe8d316be0c458acc5c&w=900`}
                                alt="Blog post thumbnail"
                                width={500}
                                height={400}
                                className="object-cover w-full transition-transform group-hover:scale-[1.03] duration-500"
                            />
                        </figure>
                        <div className="p-4">
                            <h3 className="text-lg font-bold">Blog Post Title {i}</h3>
                            <p className="text-foreground/90 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <Button variant="link" className="mt-2 p-0">
                                Read More
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center mt-8'>
                <Button>Show More</Button>
            </div>
        </section>
    );
};

export default FeaturedEvents;