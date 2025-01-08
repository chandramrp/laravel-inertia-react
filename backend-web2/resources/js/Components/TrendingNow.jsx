import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link } from "@inertiajs/react";

export default function TrendingNow() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulasi fetch data
        setTimeout(() => {
            try {
                setMovies([
                    {
                        id: 1,
                        title: "Film Trending 1",
                        poster: "https://via.placeholder.com/300x450",
                        rating: 4.5,
                        overview: "Deskripsi film trending 1",
                        release_date: "2024",
                    },
                    {
                        id: 2,
                        title: "Film Trending 2",
                        poster: "https://via.placeholder.com/300x450",
                        rating: 4.3,
                        overview: "Deskripsi film trending 2",
                        release_date: "2024",
                    },
                    {
                        id: 3,
                        title: "Film Trending 3",
                        poster: "https://via.placeholder.com/300x450",
                        rating: 4.7,
                        overview: "Deskripsi film trending 3",
                        release_date: "2024",
                    },
                ]);
                setIsLoading(false);
            } catch (err) {
                setError("Gagal memuat data film trending");
                setIsLoading(false);
            }
        }, 1000);
    }, []);

    if (isLoading) {
        return (
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Trending Sekarang
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((n) => (
                        <div
                            key={n}
                            className="bg-gray-200 dark:bg-gray-700 animate-pulse h-[300px] rounded-lg"
                        ></div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Trending Sekarang
                </h2>
                <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg">
                    <p className="text-red-600 dark:text-red-300">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Trending Sekarang
                </h2>
                <Link
                    href="/movies/trending"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                    Lihat Semua
                </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
