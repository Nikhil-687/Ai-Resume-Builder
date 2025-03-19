'use client';

import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold">AI Resume Builder</h2>
                    <p className="text-sm mt-2">
                        Build your professional resume effortlessly with our AI-powered platform.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <Link href="/">
                                <span className="cursor-pointer hover:text-blue-400">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <span className="cursor-pointer hover:text-blue-400">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="cursor-pointer hover:text-blue-400">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info Section */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Info</h3>
                    <p className="mt-2">Email: support@resume-builder.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-4">
                        <Link href="#">
                            <span className="cursor-pointer text-blue-400 hover:text-blue-500">
                                LinkedIn
                            </span>
                        </Link>
                        <Link href="#">
                            <span className="cursor-pointer text-blue-400 hover:text-blue-500">
                                GitHub
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
                &copy; {currentYear} AI Resume Builder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
