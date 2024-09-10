// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { Button } from "@/components/ui/button";
import { convertFileToUrl } from "@/lib/utils";
import { useDropzone } from "@uploadthing/react";
import { useCallback } from "react";
import { generateClientDropzoneAccept } from "uploadthing/client";

export function FileUploader({ imageUrl, onFieldChange, setFiles, files }) {
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(acceptedFiles);
        onFieldChange(convertFileToUrl(acceptedFiles[0]))
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: 'image/*' ? generateClientDropzoneAccept(['image/*']) : undefined,
    });

    return (
        <div
            {...getRootProps()}
            className="items-center justify-center flex h-72 border cursor-pointer flex-col overflow-hidden rounded-lg bg-muted/50">
            <input {...getInputProps()} className="cursor-pointer" />

            {imageUrl ? (
                <div className="flex h-full flex-1 justify-center aspect-video overflow-hidden p-1 rounded-md">
                    <img
                        src={imageUrl}
                        alt="image"
                        width={250}
                        height={250}
                        className="size-full object-cover object-center rounded-md"
                    />
                </div>
            ) : (
                <div className="flex justify-center items-center flex-col py-5 rounded-lg">
                    <img src="/preview.png" width={77} height={77} alt="file upload" />
                    <h3 className="mb-2 mt-2">Drag photo here</h3>
                    <Button type="button" className="rounded-full">
                        Select from computer
                    </Button>
                </div>
            )}
        </div>
    );
}