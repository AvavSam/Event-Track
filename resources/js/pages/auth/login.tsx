import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<LoginForm>({
        email: '',
        password: '',
        remember: false,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />

            <form className="mt-8 space-y-6" onSubmit={submit}>
                <div className="space-y-4 rounded-md shadow-sm">
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                            Email address
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="email"
                            className="mt-1 block w-full rounded-md border border-[#19140035] bg-white px-3 py-2 text-[#1b1b18] placeholder-[#706f6c] shadow-sm focus:border-[#f53003] focus:ring-1 focus:ring-[#f53003] focus:outline-none dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:placeholder-[#A1A09A] dark:focus:border-[#FF4433] dark:focus:ring-[#FF4433]"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder="email@example.com"
                        />
                        <InputError className='className="mt-2 text-red-600" text-sm' message={errors.email} />
                    </div>

                    <div className="grid gap-2">
                        <div>
                            <Label htmlFor="password" className="block text-sm font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                className="mt-1 block w-full rounded-md border border-[#19140035] bg-white px-3 py-2 text-[#1b1b18] placeholder-[#706f6c] shadow-sm focus:border-[#f53003] focus:ring-1 focus:ring-[#f53003] focus:outline-none dark:border-[#3E3E3A] dark:bg-[#161615] dark:text-[#EDEDEC] dark:placeholder-[#A1A09A] dark:focus:border-[#FF4433] dark:focus:ring-[#FF4433]"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Password"
                            />
                            <InputError className="mt-2 text-sm text-red-600" message={errors.password} />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Checkbox
                                id="remember"
                                name="remember"
                                className="h-4 w-4 rounded border-[#19140035] text-[#f53003] focus:ring-[#f53003] dark:border-[#3E3E3A] dark:text-[#FF4433] dark:focus:ring-[#FF4433]"
                                tabIndex={3}
                            />
                            <Label htmlFor="remember" className="ml-2 block text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                Remember me
                            </Label>
                        </div>
                        {canResetPassword && (
                            <div className="text-sm">
                                <TextLink
                                    href={route('password.request')}
                                    className="font-medium text-[#f53003] hover:text-[#d62a02] dark:text-[#FF4433] dark:hover:text-[#ff6b5e]"
                                >
                                    Forgot your password?
                                </TextLink>
                            </div>
                        )}
                    </div>

                    <div>
                        <Button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#f53003] px-4 py-2 text-sm font-medium text-white hover:bg-[#d62a02] focus:ring-2 focus:ring-[#f53003] focus:ring-offset-2 focus:outline-none dark:bg-[#FF4433] dark:hover:bg-[#ff6b5e] dark:focus:ring-[#FF4433]"
                            tabIndex={4}
                            disabled={processing}
                        >
                            {processing && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
                            Log in
                        </Button>
                    </div>
                </div>

                <div className="text-muted-foreground text-center text-sm">
                    Don't have an account?{' '}
                    <TextLink
                        href={route('register')}
                        tabIndex={6}
                        className='dark:hover:text-[#ff6b5e]" font-medium text-[#f53003] hover:text-[#d62a02] dark:text-[#FF4433]'
                    >
                        Sign up
                    </TextLink>
                </div>
            </form>

            {status && <div className="mt-4 text-center text-sm font-medium text-green-600 dark:text-green-400">{status}</div>}
        </AuthLayout>
    );
}
