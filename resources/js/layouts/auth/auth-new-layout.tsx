import { Calendar } from 'lucide-react';

interface AuthLayoutProps {
    children: React.ReactNode;
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({ children, title }: AuthLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 dark:bg-[#0a0a0a]">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <div className="mb-2 flex items-center justify-center gap-2">
                        <Calendar className="h-8 w-8 text-[#f53003] dark:text-[#FF4433]" />
                        <span className="text-2xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">EventTrack</span>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#1b1b18] dark:text-[#EDEDEC]">{title}</h2>
                </div>
                {children}
            </div>
        </div>
    );
}
