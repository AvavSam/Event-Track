import { Calendar, DollarSign, Users } from 'lucide-react';
import type { EventStats } from '../types';

const MOCK_STATS: EventStats = {
    totalEvents: 24,
    upcomingEvents: 12,
    totalParticipants: 1250,
    totalRevenue: 45000,
};

export function EventStats() {
    return (
        <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="bg-card rounded-lg border p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="bg-chart-2/10 rounded-lg p-2">
                            <Calendar className="text-chart-2 h-6 w-6" />
                        </div>
                        <h3 className="text-card-foreground text-lg font-medium">Total Events</h3>
                    </div>
                    <p className="text-card-foreground text-3xl font-bold">{MOCK_STATS.totalEvents}</p>
                    <p className="text-muted-foreground mt-2 text-sm">{MOCK_STATS.upcomingEvents} upcoming</p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="bg-chart-3/10 rounded-lg p-2">
                            <Users className="text-chart-3 h-6 w-6" />
                        </div>
                        <h3 className="text-card-foreground text-lg font-medium">Participants</h3>
                    </div>
                    <p className="text-card-foreground text-3xl font-bold">{MOCK_STATS.totalParticipants}</p>
                    <p className="text-muted-foreground mt-2 text-sm">Across all events</p>
                </div>

                <div className="bg-card rounded-lg border p-6">
                    <div className="mb-2 flex items-center gap-3">
                        <div className="bg-chart-1/10 rounded-lg p-2">
                            <DollarSign className="text-chart-1 h-6 w-6" />
                        </div>
                        <h3 className="text-card-foreground text-lg font-medium">Revenue</h3>
                    </div>
                    <p className="text-card-foreground text-3xl font-bold">Rp.{MOCK_STATS.totalRevenue.toLocaleString()}</p>
                    <p className="text-muted-foreground mt-2 text-sm">Total earnings</p>
                </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-card rounded-lg border p-6">
                <h3 className="text-card-foreground mb-4 text-lg font-medium">Event Trends</h3>
                <div className="border-muted flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
                    <p className="text-muted-foreground">Chart will be implemented here</p>
                </div>
            </div>
        </div>
    );
}
