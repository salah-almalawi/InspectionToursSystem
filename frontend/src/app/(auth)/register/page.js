'use client'
import { useState } from 'react';
import { useRegisterMutation } from '@/services/api';
import { useRouter } from 'next/navigation';
import useRequireAuth from '@/utils/requireAuth';







export default function RegisterPage() {
    const router = useRouter();
    const [register, { isLoading, error }] = useRegisterMutation();
    const [formData, setFormData] = useState({ username: '', password: '' });
    useRequireAuth();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(formData).unwrap();
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button type="submit" disabled={isLoading}>
                Register
            </button>
            {error && <p>{error.data?.message || 'Error'}</p>}
        </form>
    );
}