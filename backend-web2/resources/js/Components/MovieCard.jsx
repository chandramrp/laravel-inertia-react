import { useState } from "react";

export default function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`card transform transition-all duration-300
                ${isHovered ? "scale-105 shadow-2xl" : "scale-100"}`}
            >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
                    <img
                        src={movie.poster}
                        alt={movie.title}
                        className="object-cover w-full h-full"
                    />

                    {isHovered && (
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent
                            flex flex-col justify-end p-4"
                        >
                            <h3 className="text-white font-bold text-lg">
                                {movie.title}
                            </h3>
                            <p className="text-gray-300 text-sm mb-2">
                                {movie.year}
                            </p>

                            <div className="flex items-center space-x-2 mb-3">
                                <span className="text-yellow-400">⭐</span>
                                <span className="text-white">
                                    {movie.rating}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-white">
                                    {movie.duration}
                                </span>
                            </div>

                            <div className="flex space-x-2">
                                <button
                                    className="flex-1 bg-secondary hover:bg-secondary-dark text-white 
                                    py-2 rounded-md transition-colors"
                                >
                                    Play
                                </button>
                                <button
                                    className="p-2 bg-gray-800/80 hover:bg-gray-700 text-white 
                                    rounded-md transition-colors"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
