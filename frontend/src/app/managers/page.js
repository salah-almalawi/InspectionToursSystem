'use client'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetManagersQuery } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function ManagersPage() {
    const router = useRouter();
    useRequireAuth();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const { data: managers, isLoading, error } = useGetManagersQuery();
    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    }, [router, token]);

    if (!token) return null;


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading managers</p>;

    return (
        <div>
            <h1>إدارة المعقبين</h1>
            <button onClick={() => router.push('/managers/new')}>إنشاء معقب جديد</button>
            <table>
                <thead>
                    <tr>
                        <th>الاسم</th>
                        <th>الرتبة</th>
                        <th>القسم</th>
                    </tr>
                </thead>
                <tbody>
                    {managers.map((m) => (
                        <tr key={m._id}>
                            <td><Link href={`/managers/${m._id}`}>{m.name}</Link></td>
                            <td>{m.rank}</td>
                            <td>{m.department}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}