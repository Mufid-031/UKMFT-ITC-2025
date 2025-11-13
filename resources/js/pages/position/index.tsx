import { DataTable } from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import positionRoutes from '@/routes/position';
import { Position, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { columns } from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Position',
        href: positionRoutes.index().url,
    },
];

export default function PositionPage() {
    const { positions } = usePage<SharedData & { positions: Position[] }>()
        .props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Position" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <DataTable<Position, string>
                        columns={columns}
                        data={positions}
                        searchKey="name"
                        hrefCreate={positionRoutes.create().url}
                        title="Position"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
