'use client'
import Link from 'next/link'
import { useGetManagersQuery } from '@/services/api'
import ManagerSearch from '../ManagerSearch'

export default function Managers() {
    const { data: managers = [], isLoading, error } = useGetManagersQuery()

    // ✅ FIXED: Handle loading and error states
    if (isLoading) {
        return (
            <section id="managers" className="page">
                <div className="container">
                    <div className="card text-center">
                        <h2>جاري تحميل البيانات...</h2>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="managers" className="page">
                <div className="container">
                    <div className="card text-center">
                        <h2>خطأ في تحميل البيانات</h2>
                        <p>تأكد من تشغيل الخادم</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="managers" className="page">
            <div className="container">
                <div className="page-header">
                    <div className="header-content">
                        <h1>إدارة المعقبين</h1>
                        <p>إدارة وتتبع المعقبين في النظام</p>
                    </div>
                    <Link href="/managers/new" className="btn-primary">
                        <span>+</span> إضافة معقب جديد
                    </Link>
                </div>

                <div className="table-container">
                    {managers.length === 0 ? (
                        <div className="card text-center">
                            <h2>لا يوجد معقبين مسجلين</h2>
                            <p>ابدأ بإضافة معقب جديد</p>
                            <Link href="/managers/new" className="btn-primary" style={{ marginTop: '1rem' }}>
                                إضافة معقب جديد
                            </Link>
                        </div>
                    ) : (
                        <ManagerSearch managers={managers} />
                    )}
                </div>
            </div>
        </section>
    )
}