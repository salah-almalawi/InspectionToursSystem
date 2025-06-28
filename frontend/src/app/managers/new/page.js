'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCreateManagerMutation } from '@/services/api';
import useRequireAuth from '@/utils/requireAuth';

export default function NewManagerPage() {
    const router = useRouter();
    const [createManager, { isLoading, error }] = useCreateManagerMutation();
    const [formData, setFormData] = useState({ name: '', rank: '', department: '' });
    useRequireAuth();

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createManager(formData).unwrap();
            router.push('/managers');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>إنشاء معقب جديد</h1>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="number" name="rank" value={formData.rank} onChange={handleChange} placeholder="Rank" />
            <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
            <button type="button" onClick={() => router.push('/managers')}>Cancel</button>
            <button type="submit" disabled={isLoading}>Save</button>
            {error && <p>{error.data?.message || 'Error'}</p>}
        </form>
    );
}