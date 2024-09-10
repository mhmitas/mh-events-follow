'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { eventFormSchema } from "@/lib/validator"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form"
import { eventDefaultValues } from "@/lib/constants"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import EventDropdownMenu from "./EventDropdownMenu"
import { useState } from "react"
import { FileUploader } from "./FileUploader"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, DollarSignIcon, Link } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function EventForm({ type }) {
    const [files, setFiles] = useState([])
    const initialValues = eventDefaultValues

    // 1. Define your form.
    const form = useForm({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialValues
    })

    // 2. Define a submit handler.
    function onSubmit(values) {
        console.log("Submit form");
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto border p-4 sm:p-8 rounded-lg bg-background min-w-[300px]">
                <div className="space-y-4 p-0">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter event title" {...field} type="text" className="input-field" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="categoryId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Event Category</FormLabel>
                                <FormControl>
                                    <EventDropdownMenu onChangeHandler={field.onChange} value={field.value} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Location</FormLabel>
                                <FormControl className="">
                                    <Textarea placeholder="Enter event location" {...field} className="" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Description</FormLabel>
                                <FormControl className="min-h-28">
                                    <Textarea placeholder="Describe your event" {...field} className="" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Image</FormLabel>
                                <FormControl className="min-h-52">
                                    <FileUploader imageUrl={field.value} onFieldChange={field.onChange} setFiles={setFiles} files={files} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid md:gap-8 gap-4 grid-cols-1 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="startDateTime"
                            className="w-full"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event Start Date & Time</FormLabel>
                                    <FormControl className>
                                        <div className="flex items-center border w-full pl-2 rounded-md">
                                            <span><Calendar /></span>
                                            <DatePicker
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                showTimeSelect
                                                dateFormat="dd MMM YY, h:mm a"
                                                className="bg-background rounded-md input-field overflow-auto"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="endDateTime"
                            className="w-full"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Event End Date & Time</FormLabel>
                                    <FormControl className>
                                        <div className="flex items-center border w-full pl-2 rounded-md">
                                            <span><Calendar /></span>
                                            <DatePicker
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                showTimeSelect
                                                dateFormat="dd MMM YY, h:mm a"
                                                className="bg-background rounded-md input-field overflow-auto"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="grid md:gap-8 gap-4 grid-cols-1 md:grid-cols-2">
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center border pl-2 rounded-md">
                                            <div><DollarSignIcon /></div>
                                            <Input type="number" placeholder="Enter event price" {...field} className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 w-full" />
                                            <FormField
                                                control={form.control}
                                                name="isFree"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <div className="flex items-center">
                                                                <Checkbox
                                                                    onCheckedChange={field.onChange}
                                                                    checked={field.value}
                                                                    id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                                                                <label htmlFor="isFree" className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Ticket</label>
                                                            </div>

                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="url"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Event Url</FormLabel>
                                    <FormControl>
                                        <div className="flex items-center border rounded-md pl-2">
                                            <Link />
                                            <Input placeholder="Enter event URL" {...field} className="outline-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none border-0 w-full" />
                                        </div>

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                {/*  */}

                <div className="text-center">
                    <Button
                        type="submit"
                        variant="custom"
                        disabled={form.formState.isSubmitting}
                    >{form.formState.isSubmitting ? "Submitting..." : `${type} Event`}</Button>
                </div>
            </form>
        </Form>
    )
}