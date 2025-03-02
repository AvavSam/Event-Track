import { EventList } from '@/components/event-list';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Events',
        href: '/events',
    },
];

export default function Events() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Events" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-semibold">Events</h2>
                    <EventList />
                </section>
            </div>
        </AppLayout>
    );
}
