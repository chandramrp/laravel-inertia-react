import { Head } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import Hero from "@/Components/Hero";
import CategorySlider from "@/Components/CategorySlider";
import FeaturedMovies from "@/Components/FeaturedMovies";
import TrendingNow from "@/Components/TrendingNow";

export default function Home() {
    return (
        <MainLayout>
            <Head title="StreamFlix - Watch Movies Online" />

            <Hero />

            <div
                className="bg-gradient-to-b from-primary to-primary-dark 
                min-h-screen py-12"
            >
                <CategorySlider />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <FeaturedMovies />
                    <TrendingNow />
                    {/* Tambahkan section lain di sini */}
                </div>
            </div>
        </MainLayout>
    );
}
