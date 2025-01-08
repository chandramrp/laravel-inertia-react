import React, { useState, useEffect, useRef } from "react";
import { router } from "@inertiajs/react";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [isExpanded, setIsExpanded] = useState(false);
    const searchRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchRef.current &&
                !searchRef.current.contains(event.target)
            ) {
                setIsExpanded(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            router.get(
                "/search",
                { query: query },
                {
                    preserveState: true,
                    preserveScroll: true,
                }
            );
        }
    };

    return (
        <div ref={searchRef} className="relative ml-auto mr-4">
            <form onSubmit={handleSearch} className="relative">
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={`p-2 rounded-full hover:bg-gray-800/50 transition-colors duration-200 ${
                        isExpanded ? "text-blue-400" : "text-white"
                    }`}
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

                <input
                    type="text"
                    className={`absolute right-0 top-0 h-10 bg-gray-800/50 backdrop-blur-sm text-white rounded-full outline-none border border-gray-700/50 focus:border-blue-500/50 transition-all duration-300 ${
                        isExpanded
                            ? "w-64 px-12 opacity-100 visible"
                            : "w-10 px-0 opacity-0 invisible"
                    }`}
                    placeholder="Cari film..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>

            {isExpanded && query && (
                <div className="absolute right-0 mt-2 w-64 bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-lg shadow-xl py-2 z-50">
                    <div className="px-4 py-2 text-sm text-gray-400">
                        Tekan Enter untuk mencari "{query}"
                    </div>
                </div>
            )}
        </div>
    );
}
