import { Link } from '@inertiajs/react';
import { EditIcon } from 'lucide-react';
import { Button } from './ui/button';

export function EditButton({ editHref }: { editHref: string }) {
    return (
        <Button size="icon" className="cursor-pointer" variant="secondary">
            <Link href={editHref}>
                <EditIcon className="h-4 w-4" />
            </Link>
        </Button>
    );
}
