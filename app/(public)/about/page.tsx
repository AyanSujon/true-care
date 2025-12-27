// import React from 'react';

// const About = () => {
//     return (
//         <div>
//             about
//         </div>
//     );
// };

// export default About;



import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Shield, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        About <span className="text-pink-600">True Care</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8">
                        Your trusted platform for reliable baby sitting and elderly care services
                    </p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        True Care is dedicated to making caregiving simple, safe, and accessible. We connect families with verified, compassionate caregivers who provide professional care for children, elderly loved ones, and those needing special support.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <Card className="border-pink-200 shadow-lg">
                        <CardHeader>
                            <Heart className="w-12 h-12 text-pink-600 mb-4" />
                            <CardTitle className="text-2xl">Our Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg">
                                To provide families with peace of mind by connecting them to trusted, professional caregivers who deliver compassionate and reliable care in the comfort of home.
                            </CardDescription>
                        </CardContent>
                    </Card>

                    <Card className="border-purple-200 shadow-lg">
                        <CardHeader>
                            <Shield className="w-12 h-12 text-purple-600 mb-4" />
                            <CardTitle className="text-2xl">Our Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-lg">
                                A world where every family has access to safe, affordable, and high-quality care services, allowing loved ones to thrive while maintaining dignity and independence.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Key Features */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                        Why Choose True Care?
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center">
                            <Users className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Verified Caregivers</h3>
                            <p className="text-gray-600">All caregivers undergo thorough background checks and verification for your safety.</p>
                        </div>
                        <div className="text-center">
                            <Clock className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
                            <p className="text-gray-600">Book by duration, location, and specific needs with automatic cost calculation.</p>
                        </div>
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Local & Reliable</h3>
                            <p className="text-gray-600">Connect with caregivers in your area for quick, dependable service.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Our Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Baby Care</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Professional babysitting</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Playtime & educational activities</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Meal preparation</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Elderly Care</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Companionship & daily assistance</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Medication reminders</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Light housekeeping</li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Special Care</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Care for sick individuals</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Post-hospital recovery support</li>
                                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-pink-600 mr-2" /> Personalized care plans</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-pink-600 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Experience True Care?
                    </h2>
                    <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of families who trust us for safe and reliable caregiving services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
                            Book a Service
                        </Button>
                        <Link href={"/become-a-caregiver"}>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-pink-700">
                                Become a Caregiver
                            </Button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;