'use client'
import { useState } from 'react'

export default function ManagerSearch({ managers }) {
    const [query, setQuery] = useState('');
    const filtered = managers.filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.department.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="البحث عن معقب..."
                    className="search-input"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
            </div>
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
                    {filtered.map((m, i) => (
                        <tr key={i}>
                            <td><a href="#" className="manager-link">{m.name}</a></td>
                            <td>{m.rank}</td>
                            <td>{m.department}</td>
                            <td><span className="badge">{m.rounds}</span></td>
                            <td>
                                <button className="btn-icon edit" title="تعديل">✏️</button>
                                <button className="btn-icon delete" title="حذف">🗑️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}