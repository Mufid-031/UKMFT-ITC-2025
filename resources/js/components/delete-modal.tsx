import { useForm } from '@inertiajs/react';
import { Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';

export function DeleteModal({
    resourceName,
    deleteHref,
}: {
    resourceName: string;
    deleteHref: string;
}) {
    const [open, setOpen] = useState<boolean>(false);
    const { delete: destroy } = useForm();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        destroy(deleteHref, {
            onSuccess: () => {
                setOpen(false);
            },
            onError: (errors) => {
                console.error(errors);
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    className="cursor-pointer"
                    variant="default"
                >
                    <Trash2Icon className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Delete{' '}
                        <span className="capitalize">{resourceName}</span>
                    </DialogTitle>
                    <DialogDescription>
                        Are you sure you want to delete this {resourceName}?
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogFooter>
                        <Button type="submit">Delete</Button>
                        <DialogClose>Cancel</DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
