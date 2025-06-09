import {FaArrowLeft} from "react-icons/fa";
import {useState} from "react";
import { useLocalStorage } from 'react-use';
import {postApi} from "../lib/api/apiReq.js";
import {Link} from "react-router";
import {alertError} from "../lib/alert.js";
import {motion} from "framer-motion";
import {commonPage} from "../components/animation/PageVariants.js";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const body = JSON.stringify({email, password})
            const url = `${import.meta.env.VITE_API_PATH}/auth/login`
            console.log('url', url);
            const response = await postApi(url, body)
            const responseBody = await response.json();
            if (response.status === 200) {
                console.log(responseBody);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                useLocalStorage("Token", responseBody.token);
            }
            else{
                console.log('responseBody', responseBody);
                await alertError(responseBody.msg)
            }
        }
        catch(e) {
            setError(e);
            console.log('error', e);
            await alertError(error)
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <motion.div className="min-h-screen bg-gray-50 flex items-center justify-center px-4"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={commonPage}
        >
            <div className="relative w-full max-w-md rounded-[calc(var(--radius-lg)+1px)] bg-white shadow ring-1 ring-black/5">
                {/* Tombol Kembali */}
                <Link to="/" className="absolute -top-12 left-0 inline-flex items-center text-amber-600 hover:text-amber-700 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <FaArrowLeft className="mr-1 h-4 w-4" />
                    Back to Home
                </Link>

                {/* Background border effect */}
                <div className="absolute inset-px rounded-[calc(var(--radius-lg))] bg-white"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col px-8 py-10 sm:px-10">
                    <h2 className="text-2xl font-bold text-gray-900 text-center">
                        Welcome
                    </h2>
                    <p className="mt-1 text-sm text-gray-600 text-center">
                        Please Login
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                id="email"
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@example.com"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="••••••••"
                                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-lg bg-amber-500 px-4 py-2 text-white font-medium hover:bg-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-400">
                                {loading ? "Loading..." : "Login"}
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        do not have account?{" "}
                        <Link to="/register" className="font-medium text-amber-600 hover:text-amber-700">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
