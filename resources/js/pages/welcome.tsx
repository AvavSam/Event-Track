import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowRight, Calendar, Clock, Facebook, FileText, Instagram, Linkedin, Twitter, Users } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                {/* Header */}
                <header className="sticky top-0 z-50 w-full border-b border-[#19140035] bg-[#FDFDFC]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FDFDFC]/60 dark:border-[#3E3E3A] dark:bg-[#0a0a0a]/95 dark:supports-[backdrop-filter]:bg-[#0a0a0a]/60">
                    <div className="flex h-16 items-center justify-between px-10">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />
                            <span className="text-xl font-bold">EventTrack</span>
                        </div>

                        <div className="flex items-center gap-2">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="hidden rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal hover:border-[#19140035] sm:inline-block dark:hover:border-[#3E3E3A]"
                                    >
                                        Log In
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </header>

                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff2f2] to-[#FDFDFC] py-16 md:py-24 dark:from-[#1D0002] dark:to-[#0a0a0a]">
                        <div className="relative z-10 grid items-center gap-12 px-10 lg:grid-cols-2 lg:gap-8">
                            <div className="space-y-6">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Track & Manage Your Events Seamlessly</h1>
                                <p className="text-lg text-[#706f6c] md:text-xl dark:text-[#A1A09A]">
                                    Simplify your event planning process with our all-in-one platform. Create, manage, and track events with ease.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href="#"
                                        className="inline-block rounded-sm border border-black bg-[#1b1b18] px-5 py-2 text-sm leading-normal text-white hover:border-black hover:bg-black dark:border-[#eeeeec] dark:bg-[#eeeeec] dark:text-[#1C1C1A] dark:hover:border-white dark:hover:bg-white"
                                    >
                                        Explore Events
                                        <ArrowRight className="ml-2 inline-block h-4 w-4" />
                                    </Link>
                                    <Link
                                        href={route('add-event')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-2 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                    >
                                        Create Event
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Wave Background */}
                        <div className="absolute right-0 bottom-0 left-0 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZERkRGQyI+PHBhdGggZD0iTTEyODAgMEw2NDAgNzAgMCAwdjE0MGgxMjgwVjB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTEyODAgMEgwbDY0MCA3MCAxMjgwLTcweiIvPjwvZz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzBhMGEwYSI+PHBhdGggZD0iTTEyODAgMEw2NDAgNzAgMCAwdjE0MGgxMjgwVjB6IiBmaWxsLW9wYWNpdHk9Ii41Ii8+PHBhdGggZD0iTTEyODAgMEgwbDY0MCA3MCAxMjgwLTcweiIvPjwvZz48L3N2Zz4=')]" />
                    </section>

                    {/* Features Section */}
                    <section className="py-16 md:py-24">
                        <div className="px-10">
                            <div className="mb-12 text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                                <p className="mx-auto mt-4 max-w-[700px] text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                    Everything you need to create and manage successful events
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        icon: <Clock className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />,
                                        title: 'Real-Time Tracking',
                                        description: 'Monitor attendance and engagement as it happens with live updates.',
                                    },
                                    {
                                        icon: <Calendar className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />,
                                        title: 'Easy Event Management',
                                        description: 'Create, edit, and organize events with our intuitive dashboard.',
                                    },
                                    {
                                        icon: <Users className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />,
                                        title: 'Participant Insights',
                                        description: 'Gain valuable data about your attendees to improve future events.',
                                    },
                                    {
                                        icon: <FileText className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />,
                                        title: 'Export Reports',
                                        description: 'Generate comprehensive reports and analytics in multiple formats.',
                                    },
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center rounded-lg border border-[#19140035] bg-white p-6 text-center shadow-[0px_0px_1px_0px_rgba(0,0,0,0.03),0px_1px_2px_0px_rgba(0,0,0,0.06)] transition-all hover:shadow-md dark:border-[#3E3E3A] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]"
                                    >
                                        <div className="mb-4 rounded-full bg-[#fff2f2] p-3 dark:bg-[#1D0002]">{feature.icon}</div>
                                        <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                                        <p className="text-[#706f6c] dark:text-[#A1A09A]">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="bg-[#fff2f2] py-16 text-[#1b1b18] md:py-24 dark:bg-[#1D0002] dark:text-[#EDEDEC]">
                        <div className="text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Elevate Your Events?</h2>
                            <p className="mx-auto mb-8 max-w-[700px] text-lg text-[#706f6c] dark:text-[#A1A09A]">
                                Join thousands of event organizers who trust EventTrack to deliver exceptional experiences.
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="hidden rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal hover:border-[#19140035] sm:inline-block dark:hover:border-[#3E3E3A]"
                                        >
                                            Log In
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal hover:border-[#1915014a] dark:border-[#3E3E3A] dark:hover:border-[#62605b]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="border-t border-[#19140035] py-12 md:py-16 dark:border-[#3E3E3A]">
                    <div className="px-10">
                        <div className="grid gap-8 md:grid-cols-2">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <Calendar className="h-6 w-6 text-[#f53003] dark:text-[#FF4433]" />
                                    <span className="text-xl font-bold">EventTrack</span>
                                </div>
                                <p className="mb-4 text-[#706f6c] dark:text-[#A1A09A]">
                                    Simplify your event planning process with our all-in-one platform.
                                </p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
                                        { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
                                        { icon: <Instagram className="h-5 w-5" />, label: 'Instagram' },
                                        { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn' },
                                    ].map((social, index) => (
                                        <Link
                                            key={index}
                                            href="#"
                                            className="text-[#706f6c] hover:text-[#f53003] dark:text-[#A1A09A] dark:hover:text-[#FF4433]"
                                        >
                                            {social.icon}
                                            <span className="sr-only">{social.label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 font-bold">Contact Us</h3>
                                <address className="space-y-2 text-[#706f6c] not-italic dark:text-[#A1A09A]">
                                    <p>Universitas Tadulako</p>
                                    <p>Palu, Indonesia</p>
                                    <p className="mt-4">
                                        <a href="mailto:info@eventtrack.com" className="hover:text-[#f53003] dark:hover:text-[#FF4433]">
                                            info@eventtrack.com
                                        </a>
                                    </p>
                                    <p>
                                        <a href="tel:+1234567890" className="hover:text-[#f53003] dark:hover:text-[#FF4433]">
                                            +62 (851) 1234-5678
                                        </a>
                                    </p>
                                </address>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-[#19140035] pt-8 text-center text-[#706f6c] dark:border-[#3E3E3A] dark:text-[#A1A09A]">
                            <p>&copy; {new Date().getFullYear()} EventTrack. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
