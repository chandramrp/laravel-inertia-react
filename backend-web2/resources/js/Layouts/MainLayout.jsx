import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function MainLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-primary">
            <nav className="bg-white dark:bg-primary-light shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <Link href="/" className="flex items-center">
                                <span className="text-2xl font-bold text-primary dark:text-white">
                                    StreamFlix
                                </span>
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <button
                                onClick={toggleDarkMode}
                                className="p-2 rounded-lg bg-gray-200 dark:bg-primary-dark"
                            >
                                {darkMode ? "🌞" : "🌙"}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>

            <footer className="bg-white dark:bg-primary-light mt-auto">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-gray-500 dark:text-gray-400">
                        © 2024 StreamFlix. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
