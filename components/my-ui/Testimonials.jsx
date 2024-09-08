/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mQhHZxBISOV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
    return (
        <section className="mb-20">
            <div className="my-container">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="mb-6">
                        <h2 className="title-1 mb-2">What Our Customers Say</h2>
                        <p className="max-w-[700px] text-foreground/80 text-lg">
                            Hear from our happy customers about their experience with our event management system.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid sm:max-w-xl md:max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            company={testimonial.company}
                            avatarSrc={testimonial.avatarSrc}
                            altText={testimonial.altText}
                            testimonial={testimonial.testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

const TestimonialCard = ({ name, role, company, avatarSrc, altText, testimonial }) => {
    return (
        <Card className="p-6 bg-background shadow-sm">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border">
                        <AvatarImage src={avatarSrc} alt={altText} />
                        <AvatarFallback>{name[0]}{name[1]}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-sm text-muted-foreground">{role}, {company}</p>
                    </div>
                </div>
                <blockquote className="text-lg font-semibold leading-snug">
                    {testimonial}
                </blockquote>
            </div>
        </Card>
    );
};


const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Event Planner",
        company: "Acme Events",
        avatarSrc: "/placeholder-user.jpg",
        altText: "@shadcn",
        testimonial: "The event management system has been a game-changer for our business. It streamlines our workflow and helps us stay organized, saving us time and money."
    },
    {
        name: "Alex Chen",
        role: "Event Coordinator",
        company: "Globex Inc.",
        avatarSrc: "/placeholder-user.jpg",
        altText: "@shadcn",
        testimonial: "I was hesitant to try a new event management system, but the team at Acme Events made the transition seamless. The app is intuitive and has helped us streamline our entire event planning process."
    },
    {
        name: "Emily Park",
        role: "Event Manager",
        company: "Stark Industries",
        avatarSrc: "/placeholder-user.jpg",
        altText: "@shadcn",
        testimonial: "The reporting and analytics features in the Acme Events app have been invaluable for our team. We can easily track key metrics and make data-driven decisions to improve our events."
    },
    {
        name: "David Lee",
        role: "Event Coordinator",
        company: "Stark Industries",
        avatarSrc: "/placeholder-user.jpg",
        altText: "@shadcn",
        testimonial: "The Acme Events app has streamlined our event planning process and made it easier to collaborate with our team. The mobile app is a game-changer, allowing us to manage events on the go."
    }
];
