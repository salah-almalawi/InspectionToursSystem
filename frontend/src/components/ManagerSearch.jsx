'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDeleteManagerMutation } from '@/services/api'

export default function ManagerSearch({ managers }) {
    const [query, setQuery] = useState('');
    const router = useRouter();
    const [deleteManager] = useDeleteManagerMutation();

    const filtered = managers.filter((m) =>
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
                 {filtered.map((m) => (
                        <tr key={m._id}>
                            <td>
                                <Link href={`/managers/${m._id}`} className="manager-link">
                                    {m.name}
                                </Link>
                            </td>
                            <td>{m.rank}</td>
                            <td>{m.department}</td>
                             <td><span className="badge">{m.lastRounds?.length || 0}</span></td>
                            <td>
                              <button className="btn-icon edit" title="تعديل" onClick={() => router.push(`/managers/${m._id}`)}>✏️</button>
                                <button className="btn-icon delete" title="حذف" onClick={() => deleteManager(m._id)}>
                                    🗑️
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}