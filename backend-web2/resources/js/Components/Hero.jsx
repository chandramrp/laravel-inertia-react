import React from "react";

export default function Hero() {
    return (
        <div className="relative h-[80vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg.png"
                    alt="Hero Background"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center h-full pt-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl animate-fade-in">
                        Streaming Film & Serial TV Terbaik
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-xl animate-fade-in-up">
                        Nikmati ribuan film dan serial TV premium kapanpun dan
                        dimanapun
                    </p>
                    <div className="mt-8 flex space-x-4 animate-fade-in-up">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            Mulai Nonton
                        </button>
                        <button className="px-8 py-3 bg-gray-800/80 text-white rounded-lg hover:bg-gray-700/80 transition-colors">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
