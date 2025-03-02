import { Calendar, DollarSign, MapPin, Tag, Users } from 'lucide-react';
import React, { useState } from 'react';

export function EventForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        location: '',
        category: '',
        description: '',
        image_url: '',
        price: '',
        capacity: '',
        registered_count: 0,
        status: 'active',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const submitData = {
                ...formData,
                price: Number(formData.price),
                capacity: Number(formData.capacity),
                registered_count: 0,
                status: 'active',
            };
            const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
            console.log(csrfToken);
            const response = await fetch('/events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify(submitData),
            });

            if (!response.ok) {
                throw new Error('Failed to create event');
            }

            const responseData = await response.json();
            if (responseData.error) {
                throw new Error(responseData.error);
            }

            // Reset form after successful submission
            setFormData({
                title: '',
                date: '',
                location: '',
                category: '',
                description: '',
                image_url: '',
                price: '',
                capacity: '',
                registered_count: 0,
                status: 'active',
            });

            alert('Event created successfully!');
        } catch (error) {
            console.error('Error creating event:', error);
            alert(error instanceof Error ? error.message : 'Failed to create event. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Event Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        placeholder="Enter event title"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* Date */}
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Date</label>
                        <div className="relative">
                            <Calendar className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                required
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
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                placeholder="Enter location"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Category */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Category</label>
                    <div className="relative">
                        <Tag className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                            required
                        >
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
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        rows={4}
                        placeholder="Enter event description"
                        required
                    ></textarea>
                </div>

                {/* Image URL */}
                <div>
                    <label className="text-foreground mb-1 block text-sm font-medium">Image URL</label>
                    <input
                        type="url"
                        name="image_url"
                        value={formData.image_url}
                        onChange={handleChange}
                        className="border-input bg-background focus:ring-ring w-full rounded-lg border px-4 py-2 focus:border-transparent focus:ring-2"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Price and Capacity */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Price</label>
                        <div className="relative">
                            <DollarSign className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                placeholder="0.00"
                                min="0"
                                step="1000"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label className="text-foreground mb-1 block text-sm font-medium">Capacity</label>
                        <div className="relative">
                            <Users className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
                            <input
                                type="number"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                className="border-input bg-background focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 focus:border-transparent focus:ring-2"
                                placeholder="Enter capacity"
                                min="1"
                                required
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
