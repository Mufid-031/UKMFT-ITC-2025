import { DataTable } from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import { default as userRoutes, default as users } from '@/routes/users';
import { SharedData, User, type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { columns } from './columns';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User',
        href: users.index().url,
    },
];

export default function UserPage() {
    const { users } = usePage<SharedData & { users: User[] }>().props;

    console.log(users);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Division" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <DataTable<User, string>
                        columns={columns}
                        data={users}
                        searchKey="name"
                        hrefCreate={userRoutes.create().url}
                        title="User"
                    />
                </div>
            </div>
        </AppLayout>
    );
}
