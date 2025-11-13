import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import positionRoutes, { update } from '@/routes/position';
import { Position, SharedData, type BreadcrumbItem } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';

export default function Edit() {
    const { position } = usePage<SharedData & { position: Position }>().props;

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Position',
            href: positionRoutes.index().url,
        },
        {
            title: 'Edit',
            href: positionRoutes.edit(position.id).url,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit position" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Form
                        {...update.form(position.id)}
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
                                            value={position.name}
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
                                            value={position.description}
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
                                        Edit position
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
