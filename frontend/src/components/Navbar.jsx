'use client'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/managers">Managers</Link></li>
                <li><Link href="/rounds">Rounds</Link></li>
            </ul>
        </nav>
    );
}
