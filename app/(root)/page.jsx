import AboutSection from '@/components/my-ui/About';
import FeaturedEvents from '@/components/my-ui/FeaturedEvents';
import Hero from '@/components/my-ui/Hero';
import TestimonialsSection from '@/components/my-ui/Testimonials';
import React from 'react';

const page = () => {
    return (
        <main>
            <Hero />
            <FeaturedEvents />
            <AboutSection />
            <TestimonialsSection />
        </main>
    );
};

export default page;