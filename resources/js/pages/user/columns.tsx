import { DataTableColumnHeader } from '@/components/data-table-header';
import { DeleteModal } from '@/components/delete-modal';
import { EditButton } from '@/components/edit-button';
import { Checkbox } from '@/components/ui/checkbox';
import usersRoutes from '@/routes/users';
import { User } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User, string>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && 'indeterminate')
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'name',
        header: ({ column }) => (
            <DataTableColumnHeader<User, unknown>
                column={column}
                title="Name"
            />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue('name')}</div>
        ),
    },
    {
        accessorKey: 'division',
        header: ({ column }) => (
            <DataTableColumnHeader<User, unknown>
                column={column}
                title="Division"
            />
        ),
        cell: ({ row }) => {
            const user = row.original;

            return <div className="lowercase">{user.division![0].name}</div>;
        },
    },
    {
        accessorKey: 'position',
        header: ({ column }) => (
            <DataTableColumnHeader<User, unknown>
                column={column}
                title="Position"
            />
        ),
        cell: ({ row }) => {
            const user = row.original;

            return <div className="lowercase">{user.position![0].name}</div>;
        },
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const user = row.original;

            return (
                <div className="flex gap-5">
                    <EditButton editHref={usersRoutes.edit(user.id).url} />
                    <DeleteModal
                        resourceName="user"
                        deleteHref={usersRoutes.destroy(user.id).url}
                    />
                </div>
            );
        },
    },
];
