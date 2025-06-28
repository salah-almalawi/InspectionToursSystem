'use client'
import ManagerSearch from '../ManagerSearch'

const managersData = [
    { name: 'أحمد محمد السالم', rank: 'نقيب', department: 'قسم الأمن', rounds: 5 },
    { name: 'خالد عبدالله', rank: 'رائد', department: 'العمليات', rounds: 3 },
    { name: 'محمد الغامدي', rank: 'ملازم', department: 'التفتيش', rounds: 2 }
]
export default function Managers() {
    return (
        <section id="managers" className="page">
            <div className="container">
                <div className="page-header">
                    <div className="header-content">
                        <h1>إدارة المعقبين</h1>
                        <p>إدارة وتتبع المعقبين في النظام</p>
                    </div>
                    <button className="btn-primary">
                        <span>+</span> إضافة معقب جديد
                    </button>
                </div>

                <div className="table-container">
                    <ManagerSearch managers={managersData} />
                </div>
            </div>
        </section>
    );
}