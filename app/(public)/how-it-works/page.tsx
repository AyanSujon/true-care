// import React from 'react';

// const HowItWorks = () => {
//     return (
//         <div>
//             HowItWorks
//         </div>
//     );
// };

// export default HowItWorks;











import React from 'react';
import { Check, Clock, MapPin, CreditCard, Shield, Users } from 'lucide-react';

const HowItWorks: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-6xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
                        How True Care Works
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Booking reliable care for your loved ones has never been easier.
                        True Care connects you with trusted caregivers for babies, elderly, and sick family members — safely and conveniently.
                    </p>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-12">
                        Simple Steps to Book Care
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white text-2xl font-bold mb-6">
                                1
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center justify-center gap-3">
                                <Users className="w-8 h-8 text-pink-600" />
                                Choose Your Service
                            </h3>
                            <p className="text-gray-600">
                                Browse our services: Baby Care, Elderly Care, or Care for Sick Individuals.
                                View detailed descriptions and select the one that fits your needs.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white text-2xl font-bold mb-6">
                                2
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center justify-center gap-3">
                                <MapPin className="w-8 h-8 text-pink-600" />
                                Enter Location & Duration
                            </h3>
                            <p className="text-gray-600">
                                Specify your location (Division, District, City, Area) and exact address.
                                Choose the required duration — our system automatically calculates the total cost.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-600 text-white text-2xl font-bold mb-6">
                                3
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-800 mb-4 flex items-center justify-center gap-3">
                                <Clock className="w-8 h-8 text-pink-600" />
                                Book & Track
                            </h3>
                            <p className="text-gray-600">
                                Confirm your booking. Track status (Pending, Confirmed, Completed) in real-time
                                on your "My Bookings" page.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features/Benefits Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-12">
                        Why Choose True Care?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex gap-4">
                            <Shield className="w-10 h-10 text-purple-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Safe & Trusted</h4>
                                <p className="text-gray-600">We prioritize safety with verified caregivers and secure platform features.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <CreditCard className="w-10 h-10 text-pink-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Transparent Pricing</h4>
                                <p className="text-gray-600">No hidden fees — cost calculated automatically based on duration and service rate.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <MapPin className="w-10 h-10 text-purple-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Location-Based Booking</h4>
                                <p className="text-gray-600">Find care exactly where you need it, with precise address input.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Clock className="w-10 h-10 text-pink-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Real-Time Tracking</h4>
                                <p className="text-gray-600">Monitor your booking status and history anytime from your dashboard.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Check className="w-10 h-10 text-purple-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Easy Authentication</h4>
                                <p className="text-gray-600">Sign up quickly with email/password or Google login.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Users className="w-10 h-10 text-pink-600 flex-shrink-0" />
                            <div>
                                <h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
                                <p className="text-gray-600">Access True Care seamlessly on mobile, tablet, or desktop.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Experience True Care?
                    </h2>
                    <p className="text-xl mb-8">
                        Sign up today and book reliable care for your loved ones in minutes.
                    </p>
                    <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
                        Get Started Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;