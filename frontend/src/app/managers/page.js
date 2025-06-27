'use client'
import Link from 'next/link';
import { useGetManagersQuery } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function ManagersPage() {
    useRequireAuth();
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