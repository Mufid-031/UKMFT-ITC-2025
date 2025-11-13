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
import usersRoutes from '@/routes/users';
import {
    Division,
    Position,
    SharedData,
    User,
    type BreadcrumbItem,
} from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';

export default function Edit() {
    const { divisions, positions, user } = usePage<
        SharedData & {
            divisions: Division[];
            positions: Position[];
            user: User;
        }
    >().props;

    console.log(user);

    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        email: user.email || '',
        password: '',
        division_id: user?.division?.[0]?.id || '',
        position_id: user?.position?.[0]?.id || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        put(usersRoutes.update(user.id).url, {
            preserveScroll: true,
            onSuccess: () => console.log('success'),
            onError: (errors) => console.error(errors),
        });
    };

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Position',
            href: usersRoutes.index().url,
        },
        {
            title: 'Edit',
            href: usersRoutes.edit(user.id).url,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit position" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 p-10"
                    >
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
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
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
                                    required
                                    tabIndex={2}
                                    autoComplete="email"
                                    name="email"
                                    placeholder="Email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    tabIndex={3}
                                    autoComplete="new-password"
                                    name="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="division_id">Division</Label>
                                <Select
                                    value={String(data.division_id)}
                                    onValueChange={(value) =>
                                        setData('division_id', value)
                                    }
                                    name="division_id"
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select division" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {divisions.map((division) => (
                                                <SelectItem
                                                    key={division.id}
                                                    value={String(division.id)}
                                                >
                                                    {division.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="position_id">Position</Label>
                                <Select
                                    value={String(data.position_id)}
                                    onValueChange={(value) =>
                                        setData('position_id', value)
                                    }
                                    name="position_id"
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select position" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {positions.map((position) => (
                                                <SelectItem
                                                    key={position.id}
                                                    value={String(position.id)}
                                                >
                                                    {position.name}
                                                </SelectItem>
                                            ))}
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
                                Edit position
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
