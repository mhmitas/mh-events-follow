'use client'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import React, { startTransition, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { createCategory, getAllCategories } from '@/lib/actions/category.actions';

const EventDropdownMenu = ({ onChangeHandler, value }) => {
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState("")

    function handleAddCategory() {
        createCategory({
            categoryName: newCategory.trim()
        }).then((category) => {
            setCategories(prevState => [...prevState, category])
        })
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoryList = await getAllCategories();
            if (categoryList) {
                setCategories(categoryList)
            }
        }
        getCategories()
    }, [])


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
                                <Input type="text" placeholder="Category name" className="mt-3 text-foreground bg-background" onChange={(e) => setNewCategory(e.target.value)} />
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