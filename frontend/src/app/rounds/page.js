'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetRoundsQuery, useCreateRoundMutation, useGetManagersQuery } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function RoundsPage() {
    const router = useRouter();
    useRequireAuth();
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const { data: rounds, isLoading, error, refetch } = useGetRoundsQuery();
    const { data: managers } = useGetManagersQuery();
    useEffect(() => {
        if (!token) {
            router.replace('/login');
        }
    }, [router, token]);

    if (!token) return null;
    const [createRound, { isLoading: creating, error: createError }] = useCreateRoundMutation();
    const [formData, setFormData] = useState({ managerId: '', location: '', day: '', time: '' });
    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createRound(formData).unwrap();
            setFormData({ managerId: '', location: '', day: '', time: '' });
            setShowForm(false);
            refetch();
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading rounds</p>;

    return (
        <div>
            <h1>Inspection Rounds</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Manager</th>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {rounds.map((r) => (
                        <tr key={r._id}>
                            <td>{new Date(r.createdAt).toLocaleDateString()}</td>
                            <td>{r.managerName}</td>
                            <td>{r.day}</td>
                            <td>{r.Hijri?.time || new Date(r.createdAt).toLocaleTimeString()}</td>
                            <td>{r.location}</td>
                        </tr>
                    ))}
               </tbody>
            </table>

            <button onClick={() => setShowForm(!showForm)}>إضافة جولة</button>

            {showForm && (
                <form onSubmit={handleSubmit}>
                    <select name="managerId" value={formData.managerId} onChange={handleChange}>
                        <option value="">Select manager</option>
                        {managers && managers.map((m) => (
                            <option key={m._id} value={m._id}>{m.name}</option>
                        ))}
                    </select>
                    <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
                    <input name="day" value={formData.day} onChange={handleChange} placeholder="Day" />
                    <input name="time" value={formData.time} onChange={handleChange} placeholder="Time" />
                    <button type="submit" disabled={creating}>Add</button>
                    {createError && <p>{createError.data?.message || 'Error'}</p>}
                </form>
            )}
        </div>
    );
}