import axios from 'axios';
import { Calendar, ChevronLeft, ChevronRight, MapPin, Search, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Event } from '../types';

export function EventList() {
    const [events, setEvents] = useState<Event[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [totalPages, setTotalPages] = useState(1);

    const handleDelete = async (eventId: number) => {
        if (!confirm('Are you sure you want to delete this event?')) {
            return;
        }

        try {
            await axios.delete(`/api/v1/events/${eventId}`);
            // Refresh the events list after deletion
            setEvents(events.filter((event) => Number(event.id) !== eventId));
        } catch (err) {
            console.error('Error deleting event:', err);
            alert('Failed to delete event. Please try again.');
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await axios.get(`/api/v1/events?page=${currentPage}&search=${searchTerm}`);
                setEvents(response.data.data);
                setTotalPages(Math.ceil(response.data.total / response.data.per_page));
            } catch (err) {
                setError('Failed to fetch events. Please try again later.');
                console.error('Error fetching events:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, [currentPage, searchTerm]);

    return (
        <div className="space-y-6">
            {/* Search and Filter Bar */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Search events..."
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Event Grid */}
            {isLoading ? (
                <div className="grid animate-pulse grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-muted h-64 rounded-lg"></div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {error ? (
                        <div className="text-destructive col-span-full text-center">
                            <p>{error}</p>
                        </div>
                    ) : events.length === 0 ? (
                        <div className="text-muted-foreground col-span-full text-center">
                            <p>No events found.</p>
                        </div>
                    ) : (
                        events.map((event) => (
                            <div key={event.id} className="bg-card hover:ring-ring overflow-hidden rounded-lg transition-all hover:ring-2">
                                <img src={event.image_url} alt={event.title} className="h-48 w-full object-cover" />
                                <div className="space-y-3 p-4">
                                    <h3 className="text-card-foreground text-lg font-semibold">{event.title}</h3>
                                    <div className="text-muted-foreground flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        <span>{event.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-card-foreground font-semibold">Rp.{event.price}</span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleDelete(Number(event.id))}
                                                className="text-destructive hover:bg-muted rounded-lg p-2 transition-colors"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2">
                <button
                    className="bg-secondary hover:bg-secondary/80 rounded-lg p-2 disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => p - 1)}
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="bg-secondary rounded-lg px-4 py-2">Page {currentPage}</span>
                <button
                    className="bg-secondary hover:bg-secondary/80 rounded-lg p-2 disabled:opacity-50"
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage >= totalPages}
                >
                    <ChevronRight className="h-5 w-5" />
                </button>
            </div>
        </div>
    );
}
