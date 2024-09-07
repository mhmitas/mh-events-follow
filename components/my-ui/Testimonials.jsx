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
                <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col gap-6">
                        <Card className="p-6 bg-background shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">Sarah Johnson</p>
                                        <p className="text-sm text-muted-foreground">Event Planner, Acme Events</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    "The event management system has been a game-changer for our business. It streamlines our workflow and
                                    helps us stay organized, saving us time and money."
                                </blockquote>
                            </div>
                        </Card>
                        <Card className="p-6 bg-background shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">Alex Chen</p>
                                        <p className="text-sm text-muted-foreground">Event Coordinator, Globex Inc.</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    "I was hesitant to try a new event management system, but the team at Acme Events made the transition
                                    seamless. The app is intuitive and has helped us streamline our entire event planning process."
                                </blockquote>
                            </div>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Card className="p-6 bg-background shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">Emily Park</p>
                                        <p className="text-sm text-muted-foreground">Event Manager, Stark Industries</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    "The reporting and analytics features in the Acme Events app have been invaluable for our team. We can
                                    easily track key metrics and make data-driven decisions to improve our events."
                                </blockquote>
                            </div>
                        </Card>
                        <Card className="p-6 bg-background shadow-sm">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12 border">
                                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                                        <AvatarFallback>AC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">David Lee</p>
                                        <p className="text-sm text-muted-foreground">Event Coordinator, Stark Industries</p>
                                    </div>
                                </div>
                                <blockquote className="text-lg font-semibold leading-snug">
                                    "The Acme Events app has streamlined our event planning process and made it easier to collaborate with
                                    our team. The mobile app is a game-changer, allowing us to manage events on the go."
                                </blockquote>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}