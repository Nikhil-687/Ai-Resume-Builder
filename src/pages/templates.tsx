"use client";
import TemplateCard from "@/components/TemplateCard";
import '@/app/globals.css';

const templates = [
    { id: 1, name: 'Classic Resume', preview: '/template1.png' },
    { id: 2, name: 'Modern CV', preview: '/template2.png' },
    { id: 3, name: 'Creative Portfolio', preview: '/template3.png' }
];

export default function TemplatesPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Choose a Template</h1>
            <div className="grid grid-cols-2 gap-4">
                {templates.map((template) => (
                    <TemplateCard key={template.id} {...template} />
                ))}
            </div>
        </div>
    );
}
