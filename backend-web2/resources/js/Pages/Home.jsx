import { Head } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../Components/Hero";
import CategorySlider from "../Components/CategorySlider";
import FeaturedMovies from "../Components/FeaturedMovies";
import TrendingNow from "../Components/TrendingNow";

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />

            <div className="min-h-screen bg-gray-900">
                <Hero />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <CategorySlider />
                        <FeaturedMovies />
                        <TrendingNow />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
