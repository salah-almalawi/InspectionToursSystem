'use client'
import Link from 'next/link';
import { useGetManagersQuery } from '@/services/api';

export default function ManagersPage() {
    const { data: managers, isLoading, error } = useGetManagersQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading managers</p>;

    return (
        <div>
            <h1>Managers</h1>
            <ul>
                {managers.map((m) => (
                    <li key={m._id}>
                        <Link href={`/managers/${m._id}`}>{m.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}