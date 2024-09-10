'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import React, { startTransition, useState } from 'react';
import { Input } from '@/components/ui/input';

const EventDropdownMenu = ({ onChangeHandler, value }) => {
    const [categories, setCategories] = useState([
        { _id: '1', name: 'category - 1' },
        { _id: '2', name: 'category - 2' },
        { _id: '3', name: 'category - 3' },
    ])
    const [newCategory, setNewCategory] = useState("")

    function handleAddCategory(params) {

    }

    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 && categories.map((category, index) => (
                    <SelectItem value={category._id} key={index}>{category.name}</SelectItem>
                ))}
                <AlertDialog>
                    <AlertDialogTrigger className='pl-2 p-1 rounded-sm text-sm font-normal hover:bg-muted w-full text-start'>Add a new category</AlertDialogTrigger>
                    <AlertDialogContent className="">
                        <AlertDialogHeader>
                            <AlertDialogTitle>New Category</AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input type="text" placeholder="Category name" className="mt-3" onChange={(e) => setNewCategory(e.target.value)} />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SelectContent>
        </Select>
    );
};

export default EventDropdownMenu;