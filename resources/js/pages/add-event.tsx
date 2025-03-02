import { EventForm } from '@/components/event-form';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Event',
        href: '/addEvent',
    },
];

export default function AddEvent() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Events" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <section className="mb-12">
                    <h2 className="mb-6 text-2xl font-semibold">Add New Event</h2>
                    <div className="bg-background rounded-lg">
                        <EventForm />
                    </div>
                </section>
            </div>
        </AppLayout>
    );
}
