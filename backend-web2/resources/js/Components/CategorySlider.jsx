import { useState, useRef } from "react";

export default function CategorySlider() {
    const sliderRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const categories = [
        "Action",
        "Comedy",
        "Drama",
        "Horror",
        "Sci-Fi",
        "Romance",
        "Thriller",
        "Documentary",
        "Animation",
    ];

    const scroll = (direction) => {
        const container = sliderRef.current;
        const scrollAmount = direction === "left" ? -200 : 200;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setScrollPosition(container.scrollLeft + scrollAmount);
    };

    return (
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-center">
                <button
                    onClick={() => scroll("left")}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                        text-white transition-colors"
                    disabled={scrollPosition <= 0}
                >
                    ←
                </button>

                <div
                    ref={sliderRef}
                    className="flex space-x-4 overflow-x-hidden scroll-smooth px-4"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 whitespace-nowrap rounded-full
                                bg-white/10 hover:bg-secondary text-white
                                transition-colors"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => scroll("right")}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 
                        text-white transition-colors"
                >
                    →
                </button>
            </div>
        </div>
    );
}
