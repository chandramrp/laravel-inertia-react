import React, { useState, useEffect } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import SearchBar from "./SearchBar";

export default function Navbar() {
    const { auth } = usePage().props;
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);

    const handleLogout = (e) => {
        e.preventDefault();
        router.post("/logout");
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
                    : "bg-gray-900"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="text-xl font-bold text-white hover:text-blue-400"
                        >
                            StreamFlix
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 items-center justify-center px-6">
                        <SearchBar />
                    </div>

                    <div className="flex items-center space-x-4">
                        {auth?.user ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-white">
                                    {auth.user.name}
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="text-white hover:text-blue-400"
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="/login"
                                    className="text-white hover:text-blue-400"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
