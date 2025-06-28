'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import useRequireAuth from '@/utils/requireAuth';
import { useGetManagersQuery, useGetManagerSummaryQuery } from '@/services/api';

export default function Home() {

  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  useRequireAuth();
  const [showReport, setShowReport] = useState(false);
  const [selected, setSelected] = useState('');
  const { data: managers } = useGetManagersQuery(undefined, { skip: !showReport });
  const { data: summary } = useGetManagerSummaryQuery(selected, { skip: !selected });
  useEffect(() => {
    if (!token) {
      router.replace('/login');
    }
  }, [router, token]);

  if (!token) return null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Inspection Tours System</h1>
        <p>Manage inspection managers and their rounds.</p>

        <div className={styles.ctas}>
          <Link href="/managers" className={styles.primary}>Managers</Link>
          <Link href="/rounds" className={styles.secondary}>Rounds</Link>
          <button onClick={() => setShowReport(!showReport)}>
            تقرير ما قبل الجولة
          </button>
        </div>
        {showReport && (
          <div>
            <select
              id="manager-select"
              name="manager"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="">اختر معقب</option>
              {managers && managers.map((m) => (
                <option key={m._id} value={m._id}>{m.name}</option>
              ))}
            </select>

            {summary && (
              <div>
                <h3>{summary.manager.name}</h3>
                <p>الرتبة: {summary.manager.rank}</p>
                <p>القسم: {summary.manager.department}</p>
                <ul>
                  {summary.allRounds.map((r) => (
                    <li key={r._id}>{r.location} - {r.day}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </main>


    </div>
  );
}
