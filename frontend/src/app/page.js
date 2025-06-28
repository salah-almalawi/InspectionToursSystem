'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';
import useRequireAuth from '@/utils/requireAuth';


export default function Home() {

  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  useRequireAuth();

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
        </div>

      </main>


    </div>
  );
}
