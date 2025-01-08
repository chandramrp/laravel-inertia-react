import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 
            ${
                isScrolled
                    ? "bg-white/90 dark:bg-primary/90 backdrop-blur-sm shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-3xl">🎬</span>
                            <span
                                className={`text-2xl font-bold ${
                                    isScrolled
                                        ? "text-primary dark:text-white"
                                        : "text-white"
                                }`}
                            >
                                StreamFlix
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center ml-10 space-x-8">
                            <NavLink href="/movies">Movies</NavLink>
                            <NavLink href="/series">TV Series</NavLink>
                            <NavLink href="/new">New & Popular</NavLink>
                            <NavLink href="/my-list">My List</NavLink>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-light">
                            <SearchIcon className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-primary-light"
                        >
                            {darkMode ? "🌞" : "🌙"}
                        </button>
                        <UserMenu />
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            className={`text-sm font-medium hover:text-secondary transition-colors
                ${
                    isScrolled
                        ? "text-gray-700 dark:text-gray-300"
                        : "text-white"
                }`}
        >
            {children}
        </Link>
    );
}
