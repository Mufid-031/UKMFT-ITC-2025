import { DataTable } from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import divisionRoutes from '@/routes/divisions';
import { Division, SharedData, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { columns } from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Division',
        href: divisionRoutes.index().url,
    },
];

export default function DivisionPage() {
    const { divisions } = usePage<SharedData & { divisions: Division[] }>()
        .props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Division" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <DataTable<Division, string>
                        columns={columns}
                        data={divisions}
                        searchKey="name"
                        hrefCreate={divisionRoutes.create().url}
                        title="Division"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
