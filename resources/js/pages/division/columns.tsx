import { DataTableColumnHeader } from '@/components/data-table-header';
import { DeleteModal } from '@/components/delete-modal';
import { EditButton } from '@/components/edit-button';
import { Checkbox } from '@/components/ui/checkbox';
import divisionRoutes from '@/routes/divisions';
import { Division } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Division, string>[] = [
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
            <DataTableColumnHeader<Division, unknown>
                column={column}
                title="Name"
            />
        ),
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue('name')}</div>
        ),
    },
    {
        accessorKey: 'users_count',
        header: ({ column }) => (
            <DataTableColumnHeader<Division, unknown>
                column={column}
                title="Users Count"
            />
        ),
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue('users_count')}</div>
        ),
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => {
            const division = row.original;

            return (
                <div className="flex gap-5">
                    <EditButton
                        editHref={divisionRoutes.edit(division.id).url}
                    />
                    <DeleteModal
                        resourceName="division"
                        deleteHref={divisionRoutes.destroy(division.id).url}
                    />
                </div>
            );
        },
    },
];
