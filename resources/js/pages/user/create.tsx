import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import AppLayout from '@/layouts/app-layout';
import usersRoutes, { store } from '@/routes/users';
import { Division, Position, SharedData, type BreadcrumbItem } from '@/types';
import { Form, Head, usePage } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'User',
        href: usersRoutes.index().url,
    },
    {
        title: 'Create',
        href: usersRoutes.create().url,
    },
];

export default function Create() {
    const { divisions, positions } = usePage<
        SharedData & { divisions: Division[]; positions: Position[] }
    >().props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <Form
                        {...store.form()}
                        resetOnSuccess={['name', 'description']}
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
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            tabIndex={2}
                                            autoComplete="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password">
                                            password
                                        </Label>
                                        <Input
                                            id="password"
                                            type="password"
                                            tabIndex={2}
                                            autoComplete="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="password_confirmation">
                                            Confirm password
                                        </Label>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            tabIndex={2}
                                            autoComplete="password_confirmation"
                                            name="password_confirmation"
                                            placeholder="Confirm password"
                                        />
                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                        />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="division_id">
                                            Division
                                        </Label>
                                        <Select name="division_id">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select division" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {divisions.map(
                                                        (division) => (
                                                            <SelectItem
                                                                key={
                                                                    division.id
                                                                }
                                                                value={String(
                                                                    division.id,
                                                                )}
                                                            >
                                                                {division.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="position_id">
                                            Position
                                        </Label>
                                        <Select name="position_id">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select position" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {positions.map(
                                                        (position) => (
                                                            <SelectItem
                                                                key={
                                                                    position.id
                                                                }
                                                                value={String(
                                                                    position.id,
                                                                )}
                                                            >
                                                                {position.name}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="mt-2 w-full"
                                        tabIndex={3}
                                    >
                                        {processing && <Spinner />}
                                        Create User
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
