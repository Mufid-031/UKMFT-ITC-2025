import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import divisionRoutes, { update } from '@/routes/divisions';
import { Division, SharedData, type BreadcrumbItem } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';

export default function Edit() {
    const { division } = usePage<SharedData & { division: Division }>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Division',
            href: divisionRoutes.index().url,
        },
        {
            title: 'Edit',
            href: divisionRoutes.edit(division.id).url,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit division" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Form
                        {...update.form(division.id)}
                        disableWhileProcessing
                        className="flex flex-col gap-6 p-10"
                    >
                        {({ processing, errors }) => (
                            <>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="name"
                                            name="name"
                                            placeholder="Full name"
                                            value={division.name}
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="description">
                                            Description
                                        </Label>
                                        <Textarea
                                            id="description"
                                            tabIndex={2}
                                            autoComplete="description"
                                            name="description"
                                            placeholder="Description"
                                            value={division.description}
                                        />
                                        <InputError
                                            message={errors.description}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={3}
                                    >
                                        {processing && <Spinner />}
                                        Edit Division
                                    </Button>
                                </div>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </AppLayout>
    );
}
