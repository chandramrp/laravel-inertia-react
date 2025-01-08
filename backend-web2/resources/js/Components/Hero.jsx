export default function Hero() {
    return (
        <div className="relative h-[80vh] w-full">
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col justify-center h-full max-w-2xl">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                        Unlimited movies, TV shows, and more
                    </h1>
                    <p className="text-xl text-gray-200 mb-8">
                        Watch anywhere. Cancel anytime.
                    </p>
                    <div className="flex space-x-4">
                        <button className="btn-primary">Start Watching</button>
                        <button className="btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
