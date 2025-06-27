'use client'
import { useState } from 'react';
import { useLoginMutation } from '@/services/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [login, { isLoading, error }] = useLoginMutation();
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData).unwrap();
            router.push('/');
        } catch (err) {
            console.error(err);
        }
    };


    const getErrorText = (err) => {
        if (!err) return null;
        if (err.data?.message) return err.data.message;
        if (err.data?.errors) {
            const validation = err.data.errors;
            if (Array.isArray(validation)) {
                return validation[0];
            }
            return Object.values(validation).flat().join(' ');
        }
        return 'Error';
    };


    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
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
                Login
            </button>
            {error && <p>{getErrorText(error)}</p>}
        </form>
    );
}