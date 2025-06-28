'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLoginMutation } from '@/services/api'
export default function Login() {
    const router = useRouter()
    const [login, { isLoading, error }] = useLoginMutation()
    const [formData, setFormData] = useState({ username: '', password: '' })

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(formData).unwrap()
            router.push('/managers')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <section id="login" className="page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="login-icon">🔐</div>
                        <h2>تسجيل الدخول</h2>
                        <p>ادخل إلى نظام إدارة الجولات التفتيشية</p>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>اسم المستخدم</label>
                            <input name="username" value={formData.username} onChange={handleChange} type="text" className="form-input" placeholder="أدخل اسم المستخدم" />
                        </div>
                        <div className="form-group">
                            <label>كلمة المرور</label>
                            <input name="password" value={formData.password} onChange={handleChange} type="password" className="form-input" placeholder="أدخل كلمة المرور" />
                        </div>
                        <button type="submit" className="btn-primary full-width" disabled={isLoading}>تسجيل الدخول</button>
                        {error && <p className="error">{error.data?.message || 'خطأ'}</p>}
                    </form>
                </div>
            </div>
        </section>
    )
}