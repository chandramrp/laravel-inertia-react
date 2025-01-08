import React from "react";
import Navbar from "../Components/Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main className="pt-16">{children}</main>
        </div>
    );
}
