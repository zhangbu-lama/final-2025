import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Failed = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const bookingId = searchParams.get("bookingId");
    const returnUrl = searchParams.get("returnUrl") || "/";

    React.useEffect(() => {
        // You can add any failure handling logic here
        setTimeout(() => {
            navigate(returnUrl);
        }, 3000);
    }, [navigate, returnUrl]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 py-8 px-4 flex items-center justify-center">
            <div className="w-[450px] mx-auto bg-white rounded-xl shadow-2xl overflow-hidden p-8 text-center">
                <div className="text-red-500 text-6xl mb-4">✕</div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Failed</h1>
                <p className="text-gray-600 mb-6">Please try again or contact support.</p>
                <p className="text-sm text-gray-500">Redirecting you back...</p>
            </div>
        </div>
    );
};

export default Failed;
