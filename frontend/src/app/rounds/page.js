'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetRoundsQuery, useCreateRoundMutation, useGetManagersQuery } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function RoundsPage() {
    const router = useRouter();
    useRequireAuth();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const { data: rounds, isLoading, error } = useGetRoundsQuery();
    const { data: managers } = useGetManagersQuery();
    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    }, [router, token]);

    if (!token) return null;
    const [createRound, { isLoading: creating, error: createError }] = useCreateRoundMutation();
    const [formData, setFormData] = useState({ managerId: '', location: '', day: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createRound(formData).unwrap();
            setFormData({ managerId: '', location: '', day: '' });
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading rounds</p>;

    return (
        <div>
            <h1>Inspection Rounds</h1>
            <ul>
                {rounds.map((r) => (
                    <li key={r._id}>{r.location} - {r.day}</li>
                ))}
            </ul>

            <h2>Add Round</h2>
            <form onSubmit={handleSubmit}>
                <select name="managerId" value={formData.managerId} onChange={handleChange}>
                    <option value="">Select manager</option>
                    {managers && managers.map((m) => (
                        <option key={m._id} value={m._id}>{m.name}</option>
                    ))}
                </select>
                <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                <input name="day" value={formData.day} onChange={handleChange} placeholder="Day" />
                <button type="submit" disabled={creating}>Add</button>
                {createError && <p>{createError.data?.message || 'Error'}</p>}
            </form>
        </div>
    );
}