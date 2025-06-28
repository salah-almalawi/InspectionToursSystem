'use client'
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
                <div className="search-container">
                    <input type="text" placeholder="البحث عن معقب..." className="search-input" />
                </div>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>الاسم</th>
                                <th>الرتبة</th>
                                <th>القسم</th>
                                <th>عدد الجولات</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#" className="manager-link">أحمد محمد السالم</a></td>
                                <td>نقيب</td>
                                <td>قسم الأمن</td>
                                <td><span className="badge">5</span></td>
                                <td>
                                    <button className="btn-icon edit" title="تعديل">✏️</button>
                                    <button className="btn-icon delete" title="حذف">🗑️</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}