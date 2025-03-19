'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPopup = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Toggle between Login and Signup
    const toggleForm = () => setIsLogin(!isLogin);

    // Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        const endpoint = isLogin ? '/api/login' : '/api/signup';

        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/dashboard'); // Redirect after successful login/signup
            } else {
                setError(data.message || 'Something went wrong.');
            }
        } catch (error) {
            setError('Failed to connect. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-80">
                <h2 className="text-xl font-bold text-center mb-4">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>

                {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-sm text-center mt-4">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <span
                        className="text-blue-500 cursor-pointer hover:underline"
                        onClick={toggleForm}
                    >
                        {isLogin ? 'Sign Up' : 'Login'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginPopup;
