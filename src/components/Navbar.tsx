'use client'; 
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-olive text-yellow shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    AI Resume Builder
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-6">
                    <Link href="/" className="hover:text-yellow-300">Home</Link>
                    <Link href="/about" className="hover:text-yellow-300">About</Link>
                    <Link href="/features" className="hover:text-yellow-300">Features</Link>
                    <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
                    <Link href="/templates" className="hover:text-yellow-300">Templates</Link>
                </div>

                {/* Login/Signup Button */}
                <Link
                    href="/login"
                    className="hidden md:block bg-yellow text-olive px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300"
                >
                    Login / Signup
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-olive p-4">
                    <Link href="/" className="block py-2 text-yellow">Home</Link>
                    <Link href="/about" className="block py-2 text-yellow">About</Link>
                    <Link href="/features" className="block py-2 text-yellow">Features</Link>
                    <Link href="/contact" className="block py-2 text-yellow">Contact</Link>
                    <Link
                        href="/login"
                        className="block bg-yellow text-olive px-4 py-2 rounded-lg font-semibold mt-2 text-center"
                    >
                        Login / Signup
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;