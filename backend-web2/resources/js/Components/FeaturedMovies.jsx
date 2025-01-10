import MovieCard from "./MovieCard";

export default function FeaturedMovies() {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">
                Featured Movies
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <MovieCard
                    movie={{
                        title: "Sample Movie",
                        year: "2024",
                        poster: "/images/sample-poster.png",
                    }}
                />
            </div>
        </div>
    );
}
