'use client'
import Link from 'next/link'
import { useGetManagersQuery } from '@/services/api'
import ManagerSearch from '../ManagerSearch'


export default function Managers() {
    const { data: managers = [] } = useGetManagersQuery()

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
                    <ManagerSearch managers={managers} />
                </div>
            </div>
        </section>
    )
}