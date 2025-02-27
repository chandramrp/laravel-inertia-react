import React from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import MainLayout from "../../Layouts/MainLayout";

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/register", {
            onSuccess: () => {
                // Redirect akan ditangani oleh server
                console.log("Registrasi berhasil");
            },
            onError: (errors) => {
                console.error("Registrasi gagal:", errors);
            },
            preserveScroll: true,
        });
    };

    return (
        <MainLayout>
            <Head title="Register" />
            <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-2xl">
                    <div>
                        <h2 className="mt-4 text-center text-3xl font-extrabold text-white">
                            Buat Akun Baru
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-400">
                            Bergabunglah dengan komunitas streaming terbaik
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="password_confirmation"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Konfirmasi Password
                                </label>
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={processing}
                                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
                            >
                                {processing ? (
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                ) : (
                                    "Daftar"
                                )}
                            </button>
                        </div>

                        <div className="text-center text-sm">
                            <Link
                                href="/login"
                                className="font-medium text-blue-400 hover:text-blue-300"
                            >
                                Sudah punya akun? Masuk sekarang
                            </Link>
                        </div>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-800 text-gray-400">
                                        Atau daftar dengan
                                    </span>
                                </div>
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/auth/google"
                                    className="w-full inline-flex justify-center items-center px-4 py-2.5 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-sm font-medium text-gray-200 hover:bg-gray-600 transition duration-200"
                                >
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Daftar dengan Google
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
