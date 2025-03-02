import { Calendar, DollarSign, MapPin, Tag, Users } from 'lucide-react';
import React, { useState } from 'react';

export function EventForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Event Title</label>
                    <input
                        type="text"
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        placeholder="Enter event title"
                    />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Date</label>
                        <div className="relative">
                            <Calendar className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="date"
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Time</label>
                        <input
                            type="time"
                            className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        />
                    </div>
                </div>

                {/* Location */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Location</label>
                    <div className="relative">
                        <MapPin className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                        <input
                            type="text"
                            className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                            placeholder="Enter location"
                        />
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Category</label>
                    <div className="relative">
                        <Tag className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                        <select className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2">
                            <option value="">Select category</option>
                            <option value="technology">Technology</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                        </select>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Description</label>
                    <textarea
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        rows={4}
                        placeholder="Enter event description"
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Event Image</label>
                    <div className="border-input mt-1 flex justify-center rounded-lg border-2 border-dashed px-6 pt-5 pb-6">
                        <div className="space-y-1 text-center">
                            <svg
                                className="text-muted-foreground mx-auto h-12 w-12"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <div className="text-muted-foreground flex text-sm">
                                <label className="bg-background text-primary focus-within:ring-ring hover:text-primary/80 relative cursor-pointer rounded-md font-medium focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none">
                                    <span>Upload a file</span>
                                    <input type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-muted-foreground text-xs">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>

                {/* Price and Capacity */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Price</label>
                        <div className="relative">
                            <DollarSign className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="number"
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                placeholder="0.00"
                                min="0"
                                step="1000"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Capacity</label>
                        <div className="relative">
                            <Users className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="number"
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                placeholder="Enter capacity"
                                min="1"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-4">
                <button type="button" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-4 py-2 transition-colors">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-lg px-4 py-2 transition-colors disabled:opacity-50"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Saving...' : 'Save Event'}
                </button>
            </div>
        </form>
    );
}
