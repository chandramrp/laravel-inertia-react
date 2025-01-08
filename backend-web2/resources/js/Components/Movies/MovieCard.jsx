import React, { useState } from "react";
import { Link } from "@inertiajs/react";

export default function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 w-full">
                        <h3 className="text-lg font-bold text-white">
                            {movie.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                            {movie.release_year}
                        </p>
                        <div className="flex items-center mt-2 space-x-2">
                            <span className="px-2 py-1 text-xs bg-blue-600 rounded">
                                {movie.rating}
                            </span>
                            <span className="text-sm text-gray-300">
                                {movie.duration} min
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        href={`/movies/${movie.slug}`}
                        className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Watch Now
                    </Link>
                    <button
                        onClick={() => handleAddToWatchlist(movie.id)}
                        className="p-2 bg-gray-800/80 text-white rounded-full hover:bg-gray-700 transition-colors"
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
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
