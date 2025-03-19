'use client';

import Link from 'next/link';
import '@/app/globals.css';
interface TemplateCardProps {
    id: number;
    name: string;
    preview: string;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ id, name, preview }) => (
    <div className="border rounded-lg p-4">
        <img src={preview} alt={name} className="mb-2 w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <Link
            href={`/edit/${id}`}
            className="bg-blue-500 text-white py-1 px-3 rounded mt-2 inline-block"
        >
            Choose & Edit
        </Link>
    </div>
);

export default TemplateCard;
