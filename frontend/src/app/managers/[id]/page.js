'use client'
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useGetManagerQuery, useUpdateManagerMutation } from '@/services/api';

export default function ManagerPage() {
    const { id } = useParams();
    const router = useRouter();
    const { data, isLoading, error } = useGetManagerQuery(id);
    const [updateManager, { isLoading: updating, error: updateError }] = useUpdateManagerMutation();
    const [formData, setFormData] = useState({ name: '', rank: '', department: '' });

    useEffect(() => {
        if (data) {
            setFormData({ name: data.name || '', rank: data.rank || '', department: data.department || '' });
        }
    }, [data]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <form onSubmit={handleSubmit}>
            <h1>Edit Manager</h1>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="number" name="rank" value={formData.rank} onChange={handleChange} placeholder="Rank" />
            <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
            <button type="submit" disabled={updating}>Save</button>
            {updateError && <p>{updateError.data?.message || 'Error'}</p>}
        </form>
    );
}