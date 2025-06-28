'use client'
import Link from 'next/link'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetRoundsQuery } from '@/services/api'
export default function Rounds() {
    const { refetch } = useGetRoundsQuery()
    const rounds = useSelector((state) => state.rounds.list)

    useEffect(() => {
        if (rounds.length === 0) refetch()
    }, [rounds.length, refetch])
    return (
        <section id="rounds" className="page">
            <div className="container">
                <div className="page-header">
                    <div className="header-content">
                        <h1>إدارة الجولات التفتيشية</h1>
                        <p>تتبع وإدارة جميع الجولات التفتيشية</p>
                    </div>
                    <Link href="/rounds/new" className="btn-primary">
                        <span>+</span> إضافة جولة جديدة
                    </Link>
                </div>
                <div className="rounds-grid">
                    {rounds.map((r) => (
                        <div key={r._id} className="round-card">
                            <div className="round-header">
                                <div className="round-location">
                                    <span className="location-icon">📍</span>
                                    <div>
                                        <h3>{r.location}</h3>
                                        <p>{r.day}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="round-details">
                                <div className="detail-item">
                                    <span className="detail-icon">👤</span>
                                    <span>{r.managerName}</span>
                                </div>
                                {r.Hijri && (
                                    <div className="detail-item">
                                        <span className="detail-icon">📅</span>
                                        <span>{`${r.Hijri.year}/${r.Hijri.month}/${r.Hijri.day}`}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}