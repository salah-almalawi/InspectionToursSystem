'use client'
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { logout } from '@/features/auth/authSlice';
import styles from './Navbar.module.css';
import { useState } from 'react';

export default function Navbar() {
    const dispatch = useDispatch();
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login');
    };

    return (
        <nav className={styles.navbar}>
            <button className={styles.toggle} onClick={() => setOpen(!open)}>☰</button>
            <ul className={`${styles.menu} ${open ? styles.open : ''}`}>
                {token ? (
                    <>
                        <li><button onClick={handleLogout}>Logout</button></li>
                        <li><Link href="/managers">إدارة المعقبين</Link></li>
                        <li><Link href="/rounds">إدارة الجولات التعقيبية</Link></li>
                    </>
                ) : (
                    <li><Link href="/login">Login</Link></li>
                )}
            </ul>
        </nav>
    );
}
