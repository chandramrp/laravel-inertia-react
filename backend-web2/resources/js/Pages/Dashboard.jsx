import React from "react";
import { Head, usePage } from "@inertiajs/react";
import MainLayout from "../Layouts/MainLayout";

export default function Dashboard() {
    const { auth, flash } = usePage().props;

    return (
        <MainLayout>
            <Head title="Dashboard" />

            {flash.success && (
                <div className="bg-green-500 text-white p-4 mb-4">
                    {flash.success}
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-white">
                            <h1 className="text-2xl font-semibold mb-4">
                                Selamat Datang, {auth.user.name}!
                            </h1>

                            <div className="mt-4">
                                <div className="flex items-center space-x-4">
                                    {auth.user.avatar && (
                                        <img
                                            src={auth.user.avatar}
                                            alt="Profile"
                                            className="w-12 h-12 rounded-full"
                                        />
                                    )}
                                    <div>
                                        <p className="text-gray-300">
                                            Email: {auth.user.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
