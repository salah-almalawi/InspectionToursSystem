'use client'
import { useState } from 'react';
import { useRegisterMutation } from '@/services/api';
import { useRouter } from 'next/navigation';
import useRequireAuth from '@/utils/requireAuth';

export default function RegisterPage() {
    const router = useRouter();
    const [register, { isLoading, error }] = useRegisterMutation();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const { isAuthenticated } = useRequireAuth();

    // ✅ FIXED: Show loading state while checking authentication
    if (!isAuthenticated) {
        return <div>جاري التحقق من الصلاحيات...</div>;
    }

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
        <div className="container">
            <form onSubmit={handleSubmit} className="login-card" style={{ maxWidth: '400px', margin: '2rem auto' }}>
                <h1>تسجيل مستخدم جديد</h1>
                <div className="form-group">
                    <label>اسم المستخدم</label>
                    <input
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="اسم المستخدم"
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>كلمة المرور</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="كلمة المرور"
                        className="form-input"
                        required
                    />
                </div>
                <div className="form-actions">
                    <button type="button" onClick={() => router.push('/')} className="btn-secondary">
                        إلغاء
                    </button>
                    <button type="submit" disabled={isLoading} className="btn-primary">
                        {isLoading ? 'جاري التسجيل...' : 'تسجيل'}
                    </button>
                </div>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error.data?.message || 'خطأ في التسجيل'}</p>}
            </form>
        </div>
    );
}