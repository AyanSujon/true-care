import { CheckCircle, Clock, Heart, MapPin, Shield, Users } from 'lucide-react';
import React from 'react';

const WhyChooseTrueCare = () => {
    return (
        <div>
                  {/* Key Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose True Care?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted & Verified Caregivers</h3>
              <p className="text-gray-600">All caregivers undergo thorough background checks for your complete safety and peace of mind.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Clock className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Flexible & Dynamic Booking</h3>
              <p className="text-gray-600">Book services for any duration, with automatic cost calculation and real-time availability.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Location-Based Services</h3>
              <p className="text-gray-600">Find caregivers in your division, district, city, or specific area — care comes to you.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Users className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Care Options</h3>
              <p className="text-gray-600">Specialized services for babysitting, elderly care, and support for sick family members.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Track & Manage Bookings</h3>
              <p className="text-gray-600">Monitor booking status (Pending, Confirmed, Completed) from your personal dashboard.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Responsive & User-Friendly</h3>
              <p className="text-gray-600">Seamless experience on mobile, tablet, and desktop with secure authentication.</p>
            </div>
          </div>
        </div>
      </section>

        </div>
    );
};

export default WhyChooseTrueCare;