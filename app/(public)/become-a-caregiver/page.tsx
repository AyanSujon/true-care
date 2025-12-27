// import React from 'react';

// const BecomeACaregiver = () => {
//     return (
//         <div>
//             Become a Caregiver
//         </div>
//     );
// };

// export default BecomeACaregiver;











import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from "@/components/ui/separator";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Clock, Shield, Star, CheckCircle, User, HeartHandshake, } from 'lucide-react';

const BecomeACaregiver: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-700 text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Become a Trusted Caregiver with True Care</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Join our community of compassionate caregivers and make a real difference in the lives of children, elderly, and families in need.
                        Flexible hours, competitive pay, and the joy of helping others await you.
                    </p>
                    <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-8 py-6">
                        Start Your Application
                    </Button>
                </div>
                <div className="absolute inset-0 bg-black opacity-20"></div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Become a Caregiver with True Care?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <Heart className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Make a Meaningful Impact</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Provide essential care for children, elderly, or those in need and bring joy and comfort to families every day.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <Clock className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Flexible Scheduling</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Choose bookings that fit your lifestyle – part-time, full-time, or occasional gigs.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <Users className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Supportive Community</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Join a network of caregivers with training, resources, and ongoing support from True Care.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <Shield className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Safe & Verified</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Background checks, verification, and insurance ensure safety for you and the families you serve.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <Star className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Competitive Earnings</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Get paid fairly based on duration, experience, and service type with transparent pricing.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-pink-200 shadow-lg">
                            <CardHeader>
                                <CheckCircle className="w-12 h-12 text-pink-600 mb-4" />
                                <CardTitle>Grow Your Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Access free training in CPR, first aid, child development, and elderly care.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-16 px-4 bg-pink-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Simple Steps to Get Started</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                            <p>Create your free caregiver profile in minutes.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                            <h3 className="text-xl font-semibold mb-2">Verify & Train</h3>
                            <p>Complete background check and optional training.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                            <h3 className="text-xl font-semibold mb-2">Build Profile</h3>
                            <p>Add experience, certifications, and availability.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                            <h3 className="text-xl font-semibold mb-2">Start Caring</h3>
                            <p>Accept bookings and start making a difference!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}

            <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
                <div className="max-w-5xl mx-auto">
                    <Card className="shadow-2xl border border-pink-100 rounded-2xl overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-pink-600 to-purple-500 text-white rou">
                            <CardTitle className="text-4xl font-bold text-center">Apply to Become a Caregiver</CardTitle>
                            <CardDescription className="text-pink-50 text-lg mt-2 text-center">
                                Join True Care and make a meaningful difference in people's lives.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-10 pb-12 px-8">
                            <form className="space-y-12">
                                {/* Personal Information */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-pink-100 rounded-full">
                                            <User className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-800">Personal Information</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName" className="text-base font-medium">Full Name <span className="text-red-500">*</span></Label>
                                            <Input id="fullName" placeholder="Enter your full name" className="h-11" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="text-base font-medium">Email Address <span className="text-red-500">*</span></Label>
                                            <Input id="email" type="email" placeholder="your@email.com" className="h-11" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone" className="text-base font-medium">Phone Number <span className="text-red-500">*</span></Label>
                                            <Input id="phone" type="tel" placeholder="+880..." className="h-11" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="age" className="text-base font-medium">Age <span className="text-red-500">*</span></Label>
                                            <Input id="age" type="number" min="18" placeholder="Must be 18+" className="h-11" required />
                                            <p className="text-sm text-gray-500">You must be at least 18 years old</p>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address" className="text-base font-medium">Full Address <span className="text-red-500">*</span></Label>
                                            <Input id="address" placeholder="Street, City, Division, etc." className="resize-none" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="NID No." className="text-base font-medium">National ID Number <span className="text-red-500">*</span></Label>
                                            <Input id="nidNumber" placeholder="Enter Your National ID Card" className="resize-none" required />
                                        </div>
                                    </div>
                                </div>

                                <Separator className="bg-pink-100" />

                                {/* Services & Experience */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-3 bg-pink-100 rounded-full">
                                            <HeartHandshake className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <h3 className="text-2xl font-semibold text-gray-800">Services & Experience</h3>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <Label className="text-base font-medium mb-4 block">Services You Offer</Label>
                                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition">
                                                    <Checkbox id="baby" className="data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600" />
                                                    <Label htmlFor="baby" className="cursor-pointer font-medium">Baby Care / Babysitting</Label>
                                                </div>
                                                <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition">
                                                    <Checkbox id="elderly" className="data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600" />
                                                    <Label htmlFor="elderly" className="cursor-pointer font-medium">Elderly Care</Label>
                                                </div>
                                                <div className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition">
                                                    <Checkbox id="sick" className="data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600" />
                                                    <Label htmlFor="sick" className="cursor-pointer font-medium">Care for Sick Individuals</Label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="experience" className="text-base font-medium">Years of Experience</Label>
                                                <Select>
                                                    <SelectTrigger className="h-11">
                                                        <SelectValue placeholder="Select experience level" />
                                                    </SelectTrigger>
                                                    <SelectContent className='bg-white'>
                                                        <SelectItem className='hover:text-white' value="0">No experience (willing to train)</SelectItem>
                                                        <SelectItem className='hover:text-white' value="1">Less than 1 year</SelectItem>
                                                        <SelectItem className='hover:text-white' value="2">1-3 years</SelectItem>
                                                        <SelectItem className='hover:text-white' value="4">3-5 years</SelectItem>
                                                        <SelectItem className='hover:text-white' value="5+">5+ years</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>


                                            {/* Availability */}
                                            <div className="space-y-6">
                                                <div className="space-y-2 max-w-md">
                                                    <Label htmlFor="hours" className="text-base font-medium">Preferred Working Hours</Label>
                                                    <Select>
                                                        <SelectTrigger className="h-11">
                                                            <SelectValue placeholder="Full-time / Part-time / Occasional" />
                                                        </SelectTrigger>
                                                        <SelectContent className='bg-white w-full'>
                                                            <SelectItem className='hover:text-white' value="full">Full-time</SelectItem>
                                                            <SelectItem className='hover:text-white' value="part">Part-time</SelectItem>
                                                            <SelectItem className='hover:text-white' value="occasional">Occasional / Weekends</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="bio" className="text-base font-medium">Tell Us About Yourself <span className="text-red-500">*</span></Label>
                                            <Textarea
                                                id="bio"
                                                placeholder="Share your experience, why you love caregiving, certifications (CPR, First Aid, nursing, etc.)..."
                                                rows={10}
                                                className="resize-none"
                                                required
                                            />
                                            <p className="text-sm text-gray-500">This helps families choose the right caregiver</p>
                                        </div>
                                    </div>
                                </div>

                                <Separator className="bg-pink-100" />

                                {/* Agreement & Submit */}
                                <div className="space-y-8">
                                    <div className="flex items-start space-x-3">
                                        <Checkbox
                                            id="agree"
                                            required
                                            className="mt-1 data-[state=checked]:bg-pink-600 data-[state=checked]:border-pink-600"
                                        />
                                        <Label htmlFor="agree" className="text-base leading-relaxed">
                                            I agree to a background check, identity verification, and True Care's <a href="/terms" className="text-pink-600 underline hover:text-pink-700">terms of service</a> and <a href="/privacy" className="text-pink-600 underline hover:text-pink-700">privacy policy</a>.
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white text-lg font-semibold py-7 rounded-xl shadow-lg transform transition hover:scale-[1.02]"
                                    >
                                        Submit Application
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>




































        </div>
    );
};

export default BecomeACaregiver;











