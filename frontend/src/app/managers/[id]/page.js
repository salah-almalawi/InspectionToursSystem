'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useGetManagerQuery, useUpdateManagerMutation, useDeleteManagerMutation } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function ManagerPage() {
    const router = useRouter();
    useRequireAuth();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const { id } = useParams();
    const { data, isLoading, error } = useGetManagerQuery(id);
    const [updateManager, { isLoading: updating, error: updateError }] = useUpdateManagerMutation();
    const [deleteManager, { isLoading: deleting }] = useDeleteManagerMutation();
    const [formData, setFormData] = useState({ name: '', rank: '', department: '' });

    useEffect(() => {
        if (data) {
            setFormData({ name: data.name || '', rank: data.rank || '', department: data.department || '' });
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    }, [router, token]);

    if (!token) return null;
    const handleDelete = async () => {
        try {
            await deleteManager(id).unwrap();
            router.push('/managers');
        } catch (err) {
            console.error(err);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateManager({ id, ...formData }).unwrap();
            router.push('/managers');
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading manager</p>;

    return (
        <div>
            <h1>{data.name}</h1>
            <p>الرتبة: {data.rank}</p>
            <p>القسم: {data.department}</p>
            <button onClick={handleDelete} disabled={deleting}>حذف</button>

            {data.lastRounds && data.lastRounds.length > 0 && (
                <ul>
                    {data.lastRounds.map((r) => (
                        <li key={r._id}>{r.location} - {r.day}</li>
                    ))}
                </ul>
            )}

            <form onSubmit={handleSubmit}>
                <h2>Edit Manager</h2>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
                <input type="number" name="rank" value={formData.rank} onChange={handleChange} placeholder="Rank" />
                <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
                <button type="submit" disabled={updating}>Save</button>
                {updateError && <p>{updateError.data?.message || 'Error'}</p>}
            </form>
        </div>
    );
}