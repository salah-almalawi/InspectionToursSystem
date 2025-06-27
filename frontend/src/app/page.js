'use client';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Inspection Tours System</h1>
        <p>Manage inspection managers and their rounds.</p>

        <div className={styles.ctas}>
          <Link href="/managers" className={styles.primary}>Managers</Link>
          <Link href="/rounds" className={styles.secondary}>Rounds</Link>
        </div>
        {!token && (
          <div className={styles.ctas}>
            <Link href="/login" className={styles.primary}>Login</Link>
            <Link href="/register" className={styles.secondary}>Register</Link>
          </div>
        )}
      </main>


    </div>
  );
}
